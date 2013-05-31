# Fill the form with the JSON
$.fn.fillJSON = (json) ->
  $el = $(this)
  for key, val of json
    $el.find("[name='#{key}']").val(val)