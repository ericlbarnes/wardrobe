# Generate an avatar based on the email
#
# email - The email String
# size - The Integer size of the image
$.fn.avatar = (email, size = 28) ->
  return $(this).attr "src", '//www.gravatar.com/avatar/' + md5(email) + '?s=' + (size * 2)
