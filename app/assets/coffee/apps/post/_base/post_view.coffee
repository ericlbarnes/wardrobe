@Wardrobe.module "Views", (Views, App, Backbone, Marionette, $, _) ->

  class Views.PostView extends App.Views.ItemView
    template: "post/_base/templates/form"
    className: "span12"

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
        if @active? or @active is "1" then "Publish Post" else "Save Post"

    onShow: ->
      @setUpEditor()
      @setupCalendar()

      if @model.isNew()
        $('#slug').slugify('#title')
      else
        publish = moment(@model.get("publish_date"), "YYYY-MM-DD HH:mm")
        @$("#publish_date").val publish.format("MMM Do, YYYY h:mm A")

      App.request "tag:entities", (tags) =>
        @setUpTags tags

    setUpEditor: ->
      toolbar = [
        'bold', 'italic', '|'
        'quote', 'unordered-list', 'ordered-list', '|'
        'link', 'image', 'code', '|'
        'undo', 'redo', '|', 'tags', 'calendar'
      ]

      @editor = new Editor
        toolbar: toolbar

      @editor.render(document.getElementById("content"))

      @$('.editor-statusbar')
        .find('.lines').html(@editor.codemirror.lineCount())
        .find('.words').html(@editor.codemirror.getValue().length)
        .find('.cursorActivity').html(@editor.codemirror.getCursor().line + ':' + @editor.codemirror.getCursor().ch)

    setUpTags: (tags) ->

      @$("#js-tags").select2
        tags: _.without tags.pluck("tag"), ""
        allowClear: true

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

    insertCode: (e) ->
      e.preventDefault()

    setupCalendar: ->
      @$(".icon-calendar").qtip
        show:
          event: "click"
        content:
          text: $("#date-form").html()
        position:
          at: "right center"
          my: "left center"
          viewport: $(window) # Keep the tooltip on-screen at all times
          effect: false
        events:
          render: (event, api) ->
            $(".js-date").each ->
              $(this).val $("#publish_date").val()
            $(".js-setdate").click (e) ->
              e.preventDefault()
              pubDate = $(e.currentTarget).parent().find('input').val()
              $("#publish_date").val pubDate
              $('.icon-calendar').qtip "hide"
        hide: "unfocus"

    save: (e) ->
      e.preventDefault()

      @processFormSubmit
        title: @$('#title').val()
        slug: @$('#slug').val()
        active: @$('input[type=radio]:checked').val()
        content: @editor.codemirror.getValue()
        tags: @$("#js-tags").val()
        publish_date: @$("#publish_date").val()

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
        @$(".publish").text "Publish Post"
      else
        @$(".publish").text "Save Post"
