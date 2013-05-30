@Wardrobe.module "PostApp", (PostApp, App, Backbone, Marionette, $, _) ->

  class PostApp.Router extends Marionette.AppRouter
    appRoutes:
      "post" : "list"
      "post/edit/:id" : "edit"

  API =
    list: ->
      new PostApp.List.Controller

    edit: (id, item) ->
      new PostApp.Edit.Controller
        id: id
        post: item

  App.vent.on "post:item:clicked", (item) ->
    App.navigate "post/edit/#{item.id}"
    API.edit item.id, item

  App.addInitializer ->
    new PostApp.Router
      controller: API