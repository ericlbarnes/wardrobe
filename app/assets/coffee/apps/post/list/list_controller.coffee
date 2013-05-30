@Wardrobe.module "PostApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Controller extends App.Controllers.Base

    initialize: ->
      post = App.request "post:entities"

      App.execute "when:fetched", post, =>
        view = @getListView post
        @show view

    getListView: (post) ->
      new List.Posts
        collection: post