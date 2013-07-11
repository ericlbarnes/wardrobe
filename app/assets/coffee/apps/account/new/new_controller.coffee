@Wardrobe.module "AccountApp.New", (New, App, Backbone, Marionette, $, _) ->

  class New.Controller extends App.Controllers.Base

    initialize: ->
      user = App.request "new:user:entity"

      @listenTo user, "created", ->
        App.vent.trigger "account:created", user

      view = @getNewView user
      @show view

    getNewView: (user) ->
      new New.User
        model: user
        collection: App.request "get:all:users"