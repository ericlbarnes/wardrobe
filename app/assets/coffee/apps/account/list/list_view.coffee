@Wardrobe.module "AccountApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.AccountItem extends App.Views.ItemView
    template: "account/list/templates/item"
    className: "account pull-left"

    triggers:
      "click .delete" : "post:delete:clicked"

    events:
      "click .details" : "edit"

    onShow: ->
      $avEl = @$(".avatar")
      $avEl.avatar @model.get("email"), $avEl.attr("width")

    edit: (e) ->
      e.preventDefault()
      App.vent.trigger "post:item:clicked", @model

  class List.Accounts extends App.Views.CompositeView
    template: "account/list/templates/grid"
    itemView: List.AccountItem
    itemViewContainer: ".accounts"
    className: ""
