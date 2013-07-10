@Wardrobe.module "AccountApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.AccountItem extends App.Views.ItemView
    template: "account/list/templates/item"
    className: "account"

    triggers:
      "click .delete" : "account:delete:clicked"

    events:
      "click .details" : "edit"

    templateHelpers: ->
      canDelete: ->
        me = App.request "get:current:user"
        if me.id isnt this.id then true else false

    onShow: ->
      $avEl = @$(".avatar")
      $avEl.avatar @model.get("email"), $avEl.attr("width")

    edit: (e) ->
      e.preventDefault()
      App.vent.trigger "account:edit:clicked", @model

  class List.Accounts extends App.Views.CompositeView
    template: "account/list/templates/grid"
    itemView: List.AccountItem
    itemViewContainer: ".holder"
    className: "accounts"

    events:
      "click .add-new" : "new"

    new: (e) ->
      e.preventDefault()
      App.vent.trigger "account:new:clicked"
