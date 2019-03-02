let position = 1;

$('#add').on('click', function() {
    $('ul').append($(`<li class="list-group-item">Task number ${position}</li>`));
    position = position + 1;
})

$('#remove').on('click', function() {
    $('li:last').remove();
    position = position - 1;
})

$('#deleteAll').on('click', function () {
    $('ul').empty();
    position = 1;
})