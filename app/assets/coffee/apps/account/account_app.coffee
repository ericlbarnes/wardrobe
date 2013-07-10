@Wardrobe.module "AccountApp", (AccountApp, App, Backbone, Marionette, $, _) ->

  class AccountApp.Router extends Marionette.AppRouter
    appRoutes:
      "accounts" : "list"
      "account/new" : "new"
      "account/edit" : "edit"

  API =
    list: ->
      new AccountApp.List.Controller

    new: ->
      new AccountApp.New.Controller
        region: App.mainRegion

    edit: (account = {}) ->
      new AccountApp.Edit.Controller
        region: App.mainRegion
        account: account

  App.vent.on "account:clicked", ->
    App.navigate "/accounts"
    API.list()

  App.vent.on "account:new:clicked", ->
    App.navigate "/account/new"
    API.new()

  App.vent.on "account:edit:clicked", (account) ->
    App.navigate "/account/edit"
    API.edit account

  App.addInitializer ->
    new AccountApp.Router
      controller: API