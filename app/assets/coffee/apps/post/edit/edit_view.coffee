@Wardrobe.module "PostApp.Edit", (Edit, App, Backbone, Marionette, $, _) ->

  class Edit.Post extends App.Views.ItemView
    template: "post/edit/templates/form"
    events:
      "submit" : "save"

    save: (e) ->
      e.preventDefault()
      alert "Sorry can't save it today"
      return @
