@Wardrobe.module "Views", (Views, App, Backbone, Marionette, $, _) ->

  class Views.PostView extends App.Views.ItemView
    template: "post/templates/form"

    initialize: ->
      @tagsHide = true

    events:
      "click .publish" : "save"
      "click .js-toggle" : "toggleDetails"
      "click .icon-tags" : "tags"

    modelEvents:
      "change:_errors"  : "changeErrors"

    onShow: ->
      @setUpEditor()
      @setUpTags()
      $('#slug').slugify('#title') if @model.isNew

    setUpEditor: ->
      toolbar = [
        'bold', 'italic', '|'
        'quote', 'unordered-list', 'ordered-list', '|'
        'link', 'image', '|'
        'undo', 'redo', '|', 'tags'
        # {name: 'info', action: 'http://lab.lepture.com/editor/markdown'}
      ]
      @editor = new Editor(toolbar: toolbar)
      @editor.render(document.getElementById("content"))

    setUpTags: ->
      @$("#js-tags").select2
        tags: ["red", "blue"]

    tags: ->
      @$(".tags-bar").toggleClass("hide");

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
      @$toggle.data("dir", "up").addClass("icon-chevron-sign-right").removeClass("icon-chevron-sign-down")
      @$(".details.hide").hide()

    expand: (@$toggle) ->
      @$toggle.data("dir", "down").addClass("icon-chevron-sign-down").removeClass("icon-chevron-sign-right")
      @$(".details.hide").show()

    toggleDetails: (e) ->
      @$toggle = $(e.currentTarget)
      if @$toggle.data("dir") is "up"
        @expand @$toggle
      else
        @collapse @$toggle
