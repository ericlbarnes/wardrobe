$.fn.formatDates = ->
  $el = $(this)
  $el.each (index, param) ->
    item = $(this)
    format = item.data("format")
    originalDate = item.data("date")
    if typeof format is "undefined"
      format = "MMM Do YYYY, hh:mma"
    time = if isNaN(originalDate) then moment.utc(originalDate, "YYYY-MM-DD HH:mm:ss") else moment.unix(originalDate)
    item.text time.local().format(format)
