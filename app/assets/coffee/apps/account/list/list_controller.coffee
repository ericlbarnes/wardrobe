@Wardrobe.module "AccountApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Controller extends App.Controllers.Base

    initialize: ->
      users = App.request "get:all:users"

      view = @getListView users
      @show view

      @listenTo view, "childview:post:delete:clicked", (child, args) ->
        model = args.model
        if confirm "Are you sure you want to delete #{model.get("title")}?" then model.destroy() else false

    getListView: (users) ->
      new List.Accounts
        collection: users

