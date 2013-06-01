@Wardrobe.module "HeaderApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Header extends App.Views.ItemView
    template: "header/list/templates/header"
    tagName: "header"

    events:
    	"click .write" : "newPost"

    newPost: (e) ->
      e.preventDefault()
      App.vent.trigger "post:new:clicked"


