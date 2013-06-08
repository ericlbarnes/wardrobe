@Wardrobe.module "PostApp.Edit", (Edit, App, Backbone, Marionette, $, _) ->

  class Edit.Post extends App.Views.PostView

    onRender: ->
      @fillJSON()
      @_setDate()
      @_setActive()
      @_setTags()

    _setDate: ->
      date = moment.utc(@model.get("publish_date"), "YYYY-MM-DDTHH:mm:ss")
      @$(".js-date").val date.format "MMM Do YYYY, hh:mma"

    _setActive: ->
      if @model.get("active") is "1"
        @$(".publish").text("Publish Post")
        @$('input:radio[name="active"]').filter('[value="1"]').attr('checked', true);
      else
        @$(".publish").text("Save Post")
        @$('input:radio[name="active"]').filter('[value="0"]').attr('checked', true);

    _setTags: ->
      tags = _.pluck(@model.get("tags"), "tag")
      @$("#js-tags").val tags