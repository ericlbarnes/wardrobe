@Wardrobe.module "Views", (Views, App, Backbone, Marionette, $, _) ->

  class Views.PostView extends App.Views.ItemView
    template: "post/templates/form"

    initialize: ->
      @tagsShown = false

    events:
      "click .publish" : "save"
      "click .js-toggle" : "toggleDetails"
      "click .icon-tags" : "toggleTags"
      "change .js-active" : "changeBtn"

    modelEvents:
      "change:_errors"  : "changeErrors"

    templateHelpers:
      submitBtnText: ->
        "Publish Post" if not @active? # When no model is set.
        if @active is "1" then "Publish Post" else "Save Post"

    onShow: ->
      @setUpEditor()
      @setUpTags()
      if @model.isNew
        $('#slug').slugify('#title')
        @$("#publish_date").val moment().format("YYYY-MM-DD HH:mm:ss")

    setUpEditor: ->
      toolbar = [
        'bold', 'italic', '|'
        'quote', 'unordered-list', 'ordered-list', '|'
        'link', 'image', '|'
        'undo', 'redo', '|', 'tags'
      ]

      @editor = new Editor
        toolbar: toolbar

      @editor.render(document.getElementById("content"))

      @$('.editor-statusbar')
        .find('.lines').html(@editor.codemirror.lineCount())
        .find('.words').html(@editor.codemirror.getValue().length)
        .find('.cursorActivity').html(@editor.codemirror.getCursor().line + ':' + @editor.codemirror.getCursor().ch)

    setUpTags: ->
      App.request "tag:entities", (tags) =>
        @$("#js-tags").selectize
          # theme: "contacts"
          persist: false
          maxItems: null
          valueField: "tag"
          labelField: "tag"
          searchField: ["tag"]
          options: tags.toJSON()
          render:
            item: (item) ->
              "<div><i class='icon-tag'></i> #{item.tag}</div>"
            option: (item) ->
              "<div><i class='icon-tag'></i> #{item.tag}</div>"

    toggleTags: (e) ->
      if @tagsShown
        @$('.editor-toolbar a, .editor-toolbar i').show()
        @$(".tags-bar").hide();
      else
        @$('.editor-toolbar a, .editor-toolbar i').hide()
        @$('.icon-tags').show()
        @$(".tags-bar").show()
        @$("js-tags").focus()

      @tagsShown = !@tagsShown

    save: (e) ->
      e.preventDefault()

      data =
        title: @$('#title').val()
        slug: @$('#slug').val()
        active: @$('input[type=radio]:checked').val()
        content: @editor.codemirror.getValue()
        tags: @$("#js-tags").val()
        publish_date: @$("#publish_date").val()

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

    # Toggle the save button text based on status
    changeBtn: (e) ->
      if e.currentTarget.value is "1"
        @$(".publish").text("Publish Post")
      else
        @$(".publish").text("Save Post")
