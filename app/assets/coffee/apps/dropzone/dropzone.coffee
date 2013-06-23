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

      # After uploading fill the form.
      myDropzone.on "success", (file, contents) ->
        App.vent.trigger "post:new:seed", contents

  DropzoneApp.on "start", ->
    API.setupDropzone()
