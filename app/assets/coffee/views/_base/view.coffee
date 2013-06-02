@Wardrobe.module "Views", (Views, App, Backbone, Marionette, $, _) ->

  _remove = Marionette.View::remove

  _.extend Marionette.View::,

    remove: (args...) ->
      console.log "removing", @
      if @model?.isDestroyed()
        @$el.fadeOut 400, =>
          _remove.apply @, args
      else
        _remove.apply @, args
