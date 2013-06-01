@Wardrobe.module "Views", (Views, App, Backbone, Marionette, $, _) ->

  class Views.PostView extends App.Views.ItemView
    template: "post/templates/form"

    events:
      "click .publish" : "save"

    onShow: ->
      @setUpEditor()
      $('#slug').slugify('#title') if @model.isNew

    setUpEditor: ->
      toolbar = [
        'bold', 'italic', '|'
        'quote', 'unordered-list', 'ordered-list', '|'
        'link', 'image', '|'
        'undo', 'redo'
        # {name: 'info', action: 'http://lab.lepture.com/editor/markdown'}
      ]
      editor = new Editor(toolbar: toolbar)
      editor.render()

    save: (e) ->
      e.preventDefault()
      @model.save
        title: @$('#title').val()
        content: @$('#content').val()
      ,
        success: (model, response) =>
          console.log "IT SAVED"
          App.vent.trigger "post:load"
        error: (model, error) =>
          console.log "IT ERRORED"

      return @