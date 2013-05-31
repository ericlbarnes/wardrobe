@Wardrobe.module "Views", (Views, App, Backbone, Marionette, $, _) ->

  class Views.ItemView extends Marionette.ItemView
    fillJSON: ->
      @$('form').fillJSON(@model?.toJSON() or {})