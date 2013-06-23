@Wardrobe.module "PostApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.PostItem extends App.Views.ItemView
    template: "post/list/templates/item"
    tagName: "tr"

    attributes: ->
      if @model.get("active") is "1"
        class: "post-item"
      else
        class: "post-item draft"

    triggers:
      "click .delete" : "post:delete:clicked"

    events:
      "click .details" : "edit"

    onShow: ->
      @$('.js-format-date').formatDates()

    edit: (e) ->
      e.preventDefault()
      App.vent.trigger "post:item:clicked", @model

  class List.Empty extends App.Views.ItemView
    template: "post/list/templates/empty"
    tagName: "tr"

  class List.Posts extends App.Views.CompositeView
    template: "post/list/templates/grid"
    itemView: List.PostItem
    emptyView: List.Empty
    itemViewContainer: "tbody"
    className: "span8 offset2"
