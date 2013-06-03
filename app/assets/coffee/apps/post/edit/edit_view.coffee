@Wardrobe.module "PostApp.Edit", (Edit, App, Backbone, Marionette, $, _) ->

  class Edit.Post extends App.Views.PostView

    onRender: ->
      @fillJSON()
      tags = _.pluck(@model.get("tags"), "tag")
      @$("#js-tags").val(tags)
