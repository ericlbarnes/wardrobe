@Wardrobe.module "AccountApp.New", (New, App, Backbone, Marionette, $, _) ->

  class New.Controller extends App.Controllers.Base

    initialize: ->
      user = App.request "new:user:entity"
      view = @getNewView user
      @show view

    getNewView: (user) ->
      new New.User
        model: user