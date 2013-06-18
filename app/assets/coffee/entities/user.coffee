@Wardrobe.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->

  class Entities.User extends App.Entities.Model
    urlRoot: ->
      App.request("get:base:url") + "/api/user"

  class Entities.UsersCollection extends App.Entities.Collection
    model: Entities.User
    url: ->
      App.request("get:base:url") + "/api/user"

  API =
    setCurrentUser: (currentUser) ->
      new Entities.User currentUser

    getUserEntities: (cb) ->
      users = new Entities.UsersCollection
      users.fetch
        success: ->
          cb users

  App.reqres.setHandler "set:current:user", (currentUser) ->
    API.setCurrentUser currentUser

  App.reqres.setHandler "user:entities", (cb) ->
    API.getUserEntities cb