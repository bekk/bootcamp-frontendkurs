import {addTodo, getTodos, toggleTodo} from './state';
import {renderTodos, updateTimeSince} from './render';



renderTodos(getTodos());

document.querySelector('#todoList').addEventListener('click', function(event) {
    let element = event.target;
    if (element.parentNode.nodeName === 'LABEL') {
        element = element.parentNode;
    }

    if (element.nodeName === 'LABEL') {
        const clicked = element.dataset.id;
        toggleTodo(clicked);

        renderTodos(getTodos());
    }
});

document.querySelector('#todoList').addEventListener('keydown', function(event) {
    let key = event.which;

    if (key == 13 || key == 32) {
        event.target.click();
    }

});

document.querySelector('#todoForm').addEventListener('submit', function () {
    event.preventDefault();

    const name = document.querySelector('#todoName').value;
    document.querySelector('#todoName').value = '';

    addTodo(name);
    renderTodos(getTodos());
});


setInterval(() => {
    updateTimeSince(getTodos());
}, 2000);