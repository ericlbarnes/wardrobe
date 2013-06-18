@Wardrobe.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->

  class Entities.Post extends App.Entities.Model
    urlRoot: ->
      App.request("get:base:url") + "/api/post"

  class Entities.PostCollection extends App.Entities.Collection
    model: Entities.Post
    url: ->
      App.request("get:base:url") + "/api/post"

  API =
    getAll: ->
      post = new Entities.PostCollection
      post.fetch
        reset: true
      post

    getPost: (id) ->
      post = new Entities.Post
        id: id
      post.fetch()
      post

    newPost: ->
      new Entities.Post

  App.reqres.setHandler "post:entities", ->
    API.getAll()

  App.reqres.setHandler "post:entity", (id) ->
    API.getPost id

  App.reqres.setHandler "new:post:entity", ->
    API.newPost()