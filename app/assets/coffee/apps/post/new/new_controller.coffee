@Wardrobe.module "PostApp.New", (New, App, Backbone, Marionette, $, _) ->

  class New.Controller extends App.Controllers.Base

    initialize: (options) ->
      post = App.request "new:post:entity"

      @listenTo post, "created", ->
        App.vent.trigger "post:created", post

      view = @getNewView post
      @show view

    getNewView: (post) ->
      new New.Post
        model: post