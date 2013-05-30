Backbone.Marionette.Renderer.render = (template, data) ->

  path = JST[template + ".html"]
  throw "Template #{template} not found!" unless path
  path(data)
