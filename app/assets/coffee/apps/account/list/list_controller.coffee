@Wardrobe.module "AccountApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Controller extends App.Controllers.Base

    initialize: ->
      users = App.request "get:all:users"

      view = @getListView users
      @show view

      @listenTo view, "childview:account:delete:clicked", (child, args) ->
        model = args.model
        confirmMsg = Lang.account_delete_confirm
          .replace("##first_name##", _.escape(model.get("first_name")))
          .replace("##last_name##", _.escape(model.get("last_name")))

        if confirm confirmMsg then model.destroy() else false

    getListView: (users) ->
      new List.Accounts
        collection: users

