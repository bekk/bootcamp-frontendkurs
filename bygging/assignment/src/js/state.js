let indexCount = 0;

const todos = [
    {
        id: indexCount++,
        name: 'Lære CSS',
        completed: true,
        changedAt: dateNSecondsAgo(135)
    },
    {
        id: indexCount++,
        name: 'Dra på Bootcamp',
        completed: true,
        changedAt: dateNSecondsAgo(4 * 60 * 60 * 24)
    },
    {
        id: indexCount++,
        name: 'Bygg LESS',
        completed: false,
        changedAt: dateNSecondsAgo(40)
    },
    {
        id: indexCount++,
        name: 'Bygg Javascript',
        completed: false,
        changedAt: dateNSecondsAgo(10 * 60)
    }
];

export function addTodo(name) {
    todos.push({
        id: indexCount++,
        name: name,
        completed: false,
        changedAt: new Date()
    });
}

export function toggleTodo(index) {
    var todo = todos[index];
    todo.completed = !todo.completed;
    todo.changedAt = new Date();
}

export function getTodos() {
    return todos;
}

function dateNSecondsAgo(seconds) {
    let date = new Date();
    date.setTime(date.getTime() - (seconds * 1000));
    return date;
}