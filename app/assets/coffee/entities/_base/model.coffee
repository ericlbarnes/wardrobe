@Wardrobe.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->

  class Entities.Model extends Backbone.Model

    initialize: (attributes, options) ->
      options or (options = {})
      @bind "error", @defaultErrorHandler
      @init and @init(attributes, options)

    defaultErrorHandler: (model, error) ->
      switch error.status
        when 401 then document.location.href = "/wardrobe/login"

    destroy: (options = {}) ->
      @set _destroy: true
      super options

    isDestroyed: ->
      @get "_destroy"

    save: (data, options = {}) ->

      isNew = @isNew()

      _.defaults options,
        wait: true
        success:  _.bind(@saveSuccess, @, isNew, options.collection)
        error:    _.bind(@saveError, @)

      @unset "_errors"
      super data, options

    saveSuccess: (isNew, collection) =>
      if isNew ## model is being created
        collection.add @ if collection
        collection.trigger "model:created", @ if collection
        @trigger "created", @
      else ## model is being updated
        collection ?= @collection ## if model has collection property defined, use that if no collection option exists
        collection.trigger "model:updated", @ if collection
        @trigger "updated", @

    saveError: (model, xhr, options) =>
      ## set errors directly on the model unless status returned was a 404
      @set _errors: $.parseJSON(xhr.responseText) unless xhr.status is 404
