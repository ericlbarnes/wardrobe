@Wardrobe.module "HeaderApp", (HeaderApp, App, Backbone, Marionette, $, _) ->
  @startWithParent = false

  API =
    list: ->
      new HeaderApp.List.Controller
        region: App.headerRegion

  HeaderApp.on "start", ->
    API.list()