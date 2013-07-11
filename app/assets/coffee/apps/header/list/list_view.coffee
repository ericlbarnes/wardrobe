@Wardrobe.module "HeaderApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Header extends App.Views.ItemView
    template: "header/list/templates/header"
    tagName: "header"

    events:
      "click .write" : "newPost"
      "click .accounts" : "accounts"

    onRender: ->
      @generateAvatar App.request "get:current:user"

    # Helpers used by the view
    templateHelpers:
      logoutUrl: ->
        "#{App.request("get:base:url")}/wardrobe/logout"

    generateAvatar: (user) ->
      $avEl = @$(".avatar")
      $avEl.avatar user.get("email"), $avEl.attr("width")

    accounts: (e) ->
      e.preventDefault()
      App.vent.trigger "account:clicked"

    newPost: (e) ->
      e.preventDefault()
      App.vent.trigger "post:new:clicked"
