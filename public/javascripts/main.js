$(document).on("click", "#shorten", function() {
  $.post('/shorten', {
    url: $('#url').val()
  }, function(data) {
    $('.ui.basic.modal').modal({
      blurring: true
    }).modal('show')
  }, 'json').fail(function(data) {
    var json = data.responseJSON
    console.log(json);
  })
})
