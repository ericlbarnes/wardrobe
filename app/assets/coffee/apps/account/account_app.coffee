@Wardrobe.module "AccountApp", (AccountApp, App, Backbone, Marionette, $, _) ->

  class AccountApp.Router extends Marionette.AppRouter
    appRoutes:
      "accounts" : "list"
      "account/new" : "new"
      "account/edit/:id" : "edit"

  API =
    list: ->
      new AccountApp.List.Controller

    new: ->
      new AccountApp.New.Controller
        region: App.mainRegion

    edit: (id, account) ->
      new AccountApp.Edit.Controller
        region: App.mainRegion
        id: id
        account: account

  App.vent.on "account:clicked", ->
    App.navigate "/accounts"
    API.list()

  App.vent.on "account:new:clicked", ->
    App.navigate "/account/new"
    API.new()

  App.vent.on "account:edit:clicked", (account) ->
    App.navigate "/account/edit/#{account.id}"
    API.edit account.id, account

  # Listen for the user created or saved then show alert and redirect.
  App.vent.on "account:created account:updated", ->
    $("#js-alert").showAlert("Success!", "Account was successfully saved.", "alert-success")
    App.navigate "accounts"
    API.list()

  App.addInitializer ->
    new AccountApp.Router
      controller: API