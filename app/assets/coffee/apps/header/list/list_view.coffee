@Wardrobe.module "HeaderApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Header extends App.Views.ItemView
    template: "header/list/templates/header"
    tagName: "header"
