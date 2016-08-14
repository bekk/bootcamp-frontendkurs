import {formatTime} from './utils';

export function renderTodos(todos) {

    const notCompleted = todos.filter((todo) => !todo.completed);
    const completed = todos.filter((todo) => todo.completed);

    const notElement = document.querySelector('#notCompleted ul');
    const compElement = document.querySelector('#completed ul');

    notElement.innerHTML = renderTodoList(notCompleted);
    compElement.innerHTML = renderTodoList(completed);
}

export function updateTimeSince(todos) {
    todos.forEach(todo => {
        const element = document.querySelector(`#todo-${todo.id} .timesince`);
        element.innerHTML = formatTime(todo.changedAt);
    });
}

function renderTodoList(todos) {
    return todos.map(todo =>
    `
    <li>
        <label id="todo-${todo.id}" tabindex="0" data-id="${todo.id}" class="${todo.completed ? 'completed ' : ''}">
            ${todo.name}
            -
            ${todo.completed ? 'Completed ' : 'Added '}
            <span class="timesince">${formatTime(todo.changedAt)}</span>
        </label>
    </li>
    `).join('');
}