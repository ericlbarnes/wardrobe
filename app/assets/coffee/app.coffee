@Wardrobe = do (Backbone, Marionette) ->

  App = new Backbone.Marionette.Application()

  # Basic pre-seed of common data.
  App.on "initialize:before", (options) ->
    App.environment = $('meta[name=env]').attr("content")
    @currentUser = App.request "set:current:user", options.user
    @baseUrl = options.base_url

  # Set a handler so that other parts of the app can grab the current user.
  App.reqres.setHandler "get:current:user", ->
    App.currentUser

  App.reqres.setHandler "get:base:url", ->
    App.baseUrl

  # Main regions used throughout the admin.
  App.addRegions
    headerRegion: "#header-region"
    topnavRegion: "#top-region"
    mainRegion: "#main-region"
    footerRegion: "footer-region"

  # When our app starts go ahead and start the header.
  App.addInitializer ->
    App.module("HeaderApp").start()

  # Set a default region for our base controller
  App.reqres.setHandler "default:region", ->
    App.mainRegion

  App.commands.setHandler "register:instance", (instance, id) ->
    App.register instance, id if App.environment is "local"

  App.commands.setHandler "unregister:instance", (instance, id) ->
    App.unregister instance, id if App.environment is "local"

  # Finally start up backbone history.
  App.on "initialize:after", ->
    @startHistory()

  App
