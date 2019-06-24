const listOfToDo = [
    {
        task: 'Opłacić rachunki'
    },
    {
        task: 'Spakować plecak'
    },
    {
        task: 'Zrobić zakupy'
    }
];

for (let item of listOfToDo) {
    const newEl = $(`
        <li>${item.task}</li>
    `);

    $('ul').append(newEl);
};

$('#add').on('click', function() {
    const request = $('#toDoInput').val();

    const newEl = $(`
        <li>${request}</li>
    `);

    $('ul').append(newEl);
})