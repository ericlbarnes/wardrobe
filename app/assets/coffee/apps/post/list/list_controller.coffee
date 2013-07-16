@Wardrobe.module "PostApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Controller extends App.Controllers.Base

    initialize: ->
      post = App.request "post:entities"

      App.execute "when:fetched", post, =>
        view = @getListView post
        @show view

        @listenTo view, "childview:post:delete:clicked", (child, args) ->
          model = args.model
          if confirm Lang.post_delete_confirm.replace("##post##", _.escape(model.get("title"))) then model.destroy() else false

    getListView: (post) ->
      new List.Posts
        collection: post
