@Wardrobe.module "Views", (Views, App, Backbone, Marionette, $, _) ->

  class Views.PostView extends App.Views.ItemView
    template: "post/templates/form"

    events:
      "click .publish" : "save"
      "click .js-toggle" : "toggleDetails"

    modelEvents:
      "change:_errors"  : "changeErrors"

    onShow: ->
      @setUpEditor()
      $('#slug').slugify('#title') if @model.isNew

    setUpEditor: ->
      toolbar = [
        'bold', 'italic', '|'
        'quote', 'unordered-list', 'ordered-list', '|'
        'link', 'image', '|'
        'undo', 'redo'
        # {name: 'info', action: 'http://lab.lepture.com/editor/markdown'}
      ]
      @editor = new Editor(toolbar: toolbar)
      @editor.render(document.getElementById("content"))

    save: (e) ->
      e.preventDefault()
      data =
        title: @$('#title').val()
        slug: @$('#slug').val()
        content: @editor.codemirror.getValue()
      @processFormSubmit data

    processFormSubmit: (data) ->
      @model.save data,
        collection: @collection

    # Show the errors based on validation failure.
    changeErrors: (model, errors, options) ->
      if _.isEmpty(errors) then @removeErrors() else @addErrors errors

    addErrors: (errors = {}) ->
      @$("#js-errors").show().find("span").html("<strong>Error</strong> Please fix the following errors")
      for name, error of errors
        @addError error

    addError: (error) ->
      sm = $("<li>").text(error)
      @$("#js-errors span").append sm

    removeErrors: ->
      @$("#js-errors").hide()

    collapse: (@$toggle) ->
      @$toggle.data("dir", "up").addClass("icon-caret-right").removeClass("icon-caret-down")
      @$(".details.hide").hide()

    expand: (@$toggle) ->
      @$toggle.data("dir", "down").addClass("icon-caret-down").removeClass("icon-caret-right")
      @$(".details.hide").show()

    toggleDetails: (e) ->
      @$toggle = $(e.currentTarget)
      if @$toggle.data("dir") is "up"
        @expand @$toggle
      else
        @collapse @$toggle