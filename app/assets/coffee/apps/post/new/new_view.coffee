@Wardrobe.module "PostApp.New", (New, App, Backbone, Marionette, $, _) ->

  class New.Post extends App.Views.PostView
    onRender: ->
      @$(".publish").text("Publish Post")

