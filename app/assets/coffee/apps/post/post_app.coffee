@Wardrobe.module "PostApp", (PostApp, App, Backbone, Marionette, $, _) ->

  class PostApp.Router extends Marionette.AppRouter
    appRoutes:
      "post" : "list"
      "post/add" : "add"
      "post/edit/:id" : "edit"

  API =
    list: ->
      new PostApp.List.Controller

    add: ->
      new PostApp.New.Controller

    edit: (id, item) ->
      new PostApp.Edit.Controller
        id: id
        post: item

  App.vent.on "post:load", ->
    App.navigate "post/"
    API.list()

  App.vent.on "post:new:clicked", ->
    App.navigate "post/add"
    API.add()

  App.vent.on "post:item:clicked", (item) ->
    App.navigate "post/edit/#{item.id}"
    API.edit item.id, item

  App.addInitializer ->
    new PostApp.Router
      controller: API