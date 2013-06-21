@Wardrobe.module "PostApp", (PostApp, App, Backbone, Marionette, $, _) ->

  class PostApp.Router extends Marionette.AppRouter
    appRoutes:
      "" : "add"
      "post" : "list"
      "post/add" : "add"
      "post/edit/:id" : "edit"

  API =
    list: ->
      @setActive()
      new PostApp.List.Controller

    add: ->
      @setActive ".write"
      new PostApp.New.Controller

    edit: (id, item) ->
      @setActive()
      new PostApp.Edit.Controller
        id: id
        post: item

    setActive: (type = ".posts") ->
      $('ul.nav li').removeClass("active").find(type).parent().addClass("active")

  App.vent.on "post:load", ->
    App.navigate "post"
    API.list()

  # Listen for the post created or saved then show alert and redirect.
  App.vent.on "post:created post:updated", ->
    $("#js-alert").showAlert("Success!", "Post was successfully saved.", "alert-success")
    App.navigate "post"
    API.list()

  App.vent.on "post:new:clicked post:new", ->
    App.navigate "/",
      trigger: false
    API.add()

  App.vent.on "post:item:clicked", (item) ->
    App.navigate "post/edit/#{item.id}"
    API.edit item.id, item

  App.addInitializer ->
    new PostApp.Router
      controller: API
