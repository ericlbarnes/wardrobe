@Wardrobe.module "DropzoneApp", (DropzoneApp, App, Backbone, Marionette, $, _) ->

  API =
    setupDropzone: ->
      myDropzone = new Dropzone(document.body,
        url: App.request("get:base:url") + "/api/dropzone"
        method: "POST"
        clickable: false
      )

      # Once a file is dropped go to the new post page.
      myDropzone.on "drop", (file) ->
        App.vent.trigger "post:new"

      # Show any errors if the file upload fails.
      myDropzone.on "error", (file, message, xhr) ->
        msg = $.parseJSON message
        $("#js-alert").showAlert("Error!", msg.error.message, "alert-error")

      # After uploading fill the form.
      myDropzone.on "success", (file, contents) ->
        App.vent.trigger "post:new:seed", contents

  DropzoneApp.on "start", ->
    API.setupDropzone()
