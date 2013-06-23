@Wardrobe.module "AccountApp.Edit", (Edit, App, Backbone, Marionette, $, _) ->

  class Edit.User extends App.Views.ItemView
    template: "account/edit/templates/form"
    className: "span6 offset3"

    events:
      "click .save" : "save"

    modelEvents:
      "change:_errors"  : "changeErrors"

    onRender: ->
      @fillJSON()

    save: (e) ->
      e.preventDefault()
      data =
        first_name: @$('#first_name').val()
        last_name: @$('#last_name').val()
        email: @$('#email').val()
        password: @$('#password').val()
        active: 1 # @$('input[type=radio]:checked').val()

      @model.save data,
        success: (model, response) =>
          App.request "set:current:user", data
          @$(".alert-success").show()

    # Show the errors based on validation failure.
    changeErrors: (model, errors, options) ->
      if _.isEmpty(errors) then @removeErrors() else @addErrors errors

    addErrors: (errors = {}) ->
      @$("#js-errors").show().find("span").html("<strong>Error</strong> Please fix the following errors")
      for name, error of errors
        @addError error

    addError: (error) ->
      sm = $("<li>").text(error)
      @$("#js-errors span").append sm

    removeErrors: ->
      @$("#js-errors").hide()
