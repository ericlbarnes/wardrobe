@Wardrobe.module "AccountApp", (AccountApp, App, Backbone, Marionette, $, _) ->

  class AccountApp.Router extends Marionette.AppRouter
    appRoutes:
      "account/edit" : "edit"

  API =
    edit: ->
      new AccountApp.Edit.Controller
        region: App.mainRegion

  App.vent.on "account:edit:clicked", ->
    App.navigate "/account/edit"
    API.edit()

  App.addInitializer ->
    new AccountApp.Router
      controller: API