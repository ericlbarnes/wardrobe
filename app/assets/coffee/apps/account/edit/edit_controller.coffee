@Wardrobe.module "AccountApp.Edit", (Edit, App, Backbone, Marionette, $, _) ->

  class Edit.Controller extends App.Controllers.Base

    initialize: ->
      user = App.request "get:current:user"
      view = @getEditView user
      @show view

    getEditView: (user) ->
      new Edit.User
        model: user