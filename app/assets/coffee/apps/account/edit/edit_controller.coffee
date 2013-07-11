@Wardrobe.module "AccountApp.Edit", (Edit, App, Backbone, Marionette, $, _) ->

  class Edit.Controller extends App.Controllers.Base

    initialize: (options) ->
      { account, id } = options
      account or= App.request "user:entity", id

      @listenTo account, "updated", ->
        App.vent.trigger "account:updated", account

      App.execute "when:fetched", account, =>
        view = @getEditView account
        @show view

    getEditView: (account) ->
      new Edit.User
        model: account