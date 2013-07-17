@Wardrobe.module "Views", (Views, App, Backbone, Marionette, $, _) ->

  class Views.PostView extends App.Views.ItemView
    template: "post/_base/templates/form"
    className: "span12"

    # Set a flag so we know when the tags are shown.
    initialize: ->
      @tagsShown = false

    # Standard backbone events
    events:
      "click .publish" : "save"
      "click .js-toggle" : "toggleDetails"
      "click .icon-tags" : "toggleTags"
      "click .icon-user" : "showUsers"
      "change .js-active" : "changeBtn"

    # Marionette model events.
    modelEvents:
      "change:_errors"  : "changeErrors"

    # Helpers used by the view
    templateHelpers:
      submitBtnText: ->
        if @active? or @active is "1" then "Publish Post" else "Save Post"
      previewUrl: ->
        "#{App.request("get:base:url")}/post/preview/#{@id}"

    # When the dom is shown setup all the plugins
    onShow: ->
      @setUpEditor()
      @setupUsers()
      @setupCalendar()

      if @model.isNew()
        $('#title').slugIt
          output: "#slug"

      else
        publish = moment(@model.get("publish_date"), "YYYY-MM-DD HH:mm")
        @$("#publish_date").val publish.format("MMM Do, YYYY h:mm A")

      App.request "tag:entities", (tags) =>
        @setUpTags tags

    # Setup the editor
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

      @imageUpload @editor

      @$('.editor-statusbar')
        .find('.lines').html(@editor.codemirror.lineCount())
        .find('.words').html(@editor.codemirror.getValue().length)
        .find('.cursorActivity').html(@editor.codemirror.getCursor().line + ':' + @editor.codemirror.getCursor().ch)

    # Populate the user select list.
    setupUsers: ->
      $userSelect = @$("#js-user")
      users = App.request "get:all:users"
      users.each (item) ->
        $userSelect.append $("<option></option>").val(item.id).html(item.get("first_name") + " " + item.get("last_name"))

      if not @model.isNew() # Set the default to yourself.
        user = App.request "get:current:user"
        $userSelect.val user.id
      else
        $userSelect.val @model.get("user_id")

    # Setup the tags instance
    setUpTags: (tags) ->
      @$("#js-tags").selectize
        persist: true
        delimiter: ','
        maxItems: null
        options: @generateTagOptions(tags)
        render:
          item: (item) ->
            "<div><i class='icon-tag'></i> #{item.text}</div>"
          option: (item) ->
            "<div><i class='icon-tag'></i> #{item.text}</div>"
        create: (input) ->
          value: input
          text: input

    # Generate tags for selectize
    generateTagOptions: (tags) ->
      opts = for tag in tags.pluck("tag") when tag isnt ""
        value: tag
        text: tag
      @customTags(opts)

    # Add any tags from the hidden input. Primarily used when using drag/drop.
    #
    # This allows us to keep from going through the selectize api for adding and option and then the item.
    customTags: (opts) ->
      val = $("#js-tags").val()
      if val isnt ""
        for tag in val.split(",") when tag isnt ""
          opts.push
            value: tag
            text: tag
      opts

    # Toggle the tags based on toolbar click
    #
    # Returns bool
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

    # Setup the date selection which is inside a tip
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

    # Save the post data
    save: (e) ->
      e.preventDefault()

      @processFormSubmit
        title: @$('#title').val()
        slug: @$('#slug').val()
        active: @$('input[type=radio]:checked').val()
        content: @editor.codemirror.getValue()
        tags: @$("#js-tags").val()
        user_id: @$("#js-user").val()
        publish_date: @$("#publish_date").val()

    # Private: Process the form and sync to the server
    processFormSubmit: (data) ->
      @model.save data,
        collection: @collection

    # Show the errors based on validation failure.
    changeErrors: (model, errors, options) ->
      if _.isEmpty(errors) then @removeErrors() else @addErrors errors

    # Private: Loop through the errors and display
    addErrors: (errors = {}) ->
      @$("#js-errors").show().find("span").html(Lang.post_errors)
      for name, error of errors
        @addError error

    # Private: Add any errors from the form.
    addError: (error) ->
      sm = $("<li>").text(error)
      @$("#js-errors span").append sm

    # Private: Remove any errors from the form.
    removeErrors: ->
      @$("#js-errors").hide()

    # Private: Collapse the details fields
    collapse: (@$toggle) ->
      @$toggle.data("dir", "up").addClass("icon-chevron-sign-right").removeClass("icon-chevron-sign-down")
      @$(".details.hide").hide()

    # Private: Expand the details fields
    expand: (@$toggle) ->
      @$toggle.data("dir", "down").addClass("icon-chevron-sign-down").removeClass("icon-chevron-sign-right")
      @$(".details.hide").show()

    # Toggle the post details
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

    # Setup the image uploading.
    imageUpload: (editor) ->
      options =
        uploadUrl: App.request("get:base:url") + "/api/dropzone/image"
        allowedTypes: ["image/jpeg", "image/png", "image/jpg", "image/gif"]
        progressText: "![Uploading file...]()"
        urlText: "![file]({filename})"
        onUploadedFile: (json) ->
          debugger
        errorText: "Error uploading file"

      inlineAttach.attachToCodeMirror(editor.codemirror, options)