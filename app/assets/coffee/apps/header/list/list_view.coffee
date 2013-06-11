@Wardrobe.module "HeaderApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Header extends App.Views.ItemView
    template: "header/list/templates/header"
    tagName: "header"

    events:
      "click .write" : "newPost"
      "click .edit-account" : "editAccount"

    onRender: ->
      @generateAvatar App.request "get:current:user"

    generateAvatar: (user) ->
      $avEl = @$(".avatar")
      $avEl.avatar user.get("email"), $avEl.attr("width")

    editAccount: (e) ->
      e.preventDefault()
      App.vent.trigger "account:edit:clicked"

    newPost: (e) ->
      e.preventDefault()
      App.vent.trigger "post:new:clicked"
