# Fill the form with the JSON
$.fn.fillJSON = (json) ->
  $el = $(this)
  for key, val of json
    $el.find("[name='#{key}']").val(val)

$.fn.showAlert = (title, msg, type) ->
  $el = $(this)
  html = "<div class='alert alert-block #{type}'>
    <button type='button' class='close' data-dismiss='alert'>×</button>
    <h4 class='alert-heading'>#{title}</h4>
    <p>#{msg}</p>
  </div>"
  $el.html(html).fadeIn()
  if type is "alert-success"
    $(".alert").delay(3000).fadeOut 400