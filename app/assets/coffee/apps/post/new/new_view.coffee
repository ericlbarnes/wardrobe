@Wardrobe.module "PostApp.New", (New, App, Backbone, Marionette, $, _) ->

  class New.Post extends App.Views.PostView

    initialize: ->
      App.vent.on "post:new:seed", (contents) =>
        @fillForm contents

    onRender: ->
      @$(".publish").text("Publish Post")

    fillForm: (contents) ->
      @$("#slug").val contents.fields.slug
      @$("#title").val contents.fields.title
      @editor.codemirror.setValue contents.content
      @$("#publish_date").val contents.fields.date
