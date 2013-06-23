@Wardrobe.module "PostApp.New", (New, App, Backbone, Marionette, $, _) ->

  class New.Post extends App.Views.PostView

    initialize: ->
      App.vent.on "post:new:seed", (contents) =>
        @fillForm contents

    onRender: ->
      @$(".publish").text("Publish Post")

    # Fill the form from a drag and dropped md file
    fillForm: (contents) ->
      @$("#slug").val contents.fields.slug
      @$("#title").val contents.fields.title
      @editor.codemirror.setValue contents.content
      @$("#publish_date").val contents.fields.date
      if contents.fields.tags.length > 0
        @fillTags contents.fields.tags

    fillTags: (tags) ->
      $("#js-tags").val tags.join()
