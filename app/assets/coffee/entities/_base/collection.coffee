@Wardrobe.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->

  class Entities.Collection extends Backbone.Collection
    initialize: (attributes, options) ->
      options or (options = {})
      @bind "error", @defaultErrorHandler
      @init and @init(attributes, options)

    defaultErrorHandler: (model, error) ->
      switch error.status
        when 401 then document.location.href = "/wardrobe/login"
