@Wardrobe.module "PostApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.PostItem extends App.Views.ItemView
    template: "post/list/templates/item"
    tagName: "tr"
    className: "post-item"

    events:
      "click .details" : "edit"
      "click .delete" : "deletePost"

    onShow: ->
      @$('.js-format-date').formatDates()

    edit: (e) ->
      e.preventDefault()
      App.vent.trigger "post:item:clicked", @model

    deletePost: (e) ->
      e.preventDefault()
      if not confirm "Are you sure you want to delete this?"
        return @
      @model.destroy
        success: (model, response) ->
          $("#js-alert").showAlert "Success", "The post is deleted.", "alert-success"

        error: (model, error) ->
          $("#js-alert").showAlert "Error", error.responseText(), "alert-error"

  class List.Empty extends App.Views.ItemView
    template: "post/list/templates/empty"
    tagName: "tr"

  class List.Posts extends App.Views.CompositeView
    template: "post/list/templates/grid"
    itemView: List.PostItem
    emptyView: List.Empty
    itemViewContainer: "tbody"