feather.replace();

const buttonEl = document.querySelector('#insert-icon');
const inputEl = document.querySelector('#insert-text');
const tasksEl = document.querySelector('#tasks');
const trashEl = document.querySelectorAll('.task-icon');
const finzalizedTaskEl = document.querySelector('#tarefas-finalizadas');
const pendentTaskEl = document.querySelector('#tarefas-pendentes');

//POST create new task
const apiCreateTask = async (description, complete) => {

    console.log("create task");
    //shortcut for json
    const newTask = {
        description,
        complete
    }

    //other method
    // const newTask = {
    //     description: description,
    //     complete: complete
    // }

    const url = 'https://labstododg.herokuapp.com//tasks';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    }

    const response = await fetch(url, options);
    return await response.json();
}

//GET all tasks
const apiGetTasks = async () => {

    const url = 'https://labstododg.herokuapp.com//tasks';

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = await fetch(url, options);
    return await response.json();

}

//UPDATE task
const apiUpdateTask = async (id, description, complete) => {

    const url = `https://labstododg.herokuapp.com//tasks/${id}`;

    const updatedTask = {
        description,
        complete
    }

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
    }

    const response = await fetch(url, options);
    return await response.json();
}

//DELETE task   
const apiDeleteTask = async (id) => {

    const url = `https://labstododg.herokuapp.com//tasks/${id}`;

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = await fetch(url, options);

    switch (response.status) {
        case 204:
            console.log('Task deleted');
            return "Task deleted";
        case 404:
            console.log('Task not found');
            return "Task not found";
        default:
            console.log('Error');
            return "Error";
    }


}

//UPDATE complete  task
const apiPatchTask = async (id, complete) => {

    const url = `https://labstododg.herokuapp.com//tasks/${id}`;

    const updatedTask = {
        complete
    }

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
    }

    const response = await fetch(url, options);

    switch (response.status) {
        case 204:
            console.log('Task updated');
            return "Task updated";
        case 404:
            console.log('Task not found');
            return "Task not found";
        default:
            console.log('Error');
            return "Error";
    }
}

window.addEventListener('load', async () => {
    await renderizarTareas();
});

buttonEl.addEventListener('click', async () => {
    const description = inputEl.value;
    await apiCreateTask(description, false);
    inputEl.value = '';
    console.time('renderizarTareas');
    await renderizarTareas();
    console.timeEnd('renderizarTareas');
});

const renderizarTareas = async () => {

    const tasks = await apiGetTasks();
    tasksEl.innerHTML = '';

    tasks.forEach(task => {

        const taskEl = document.createElement('div');
        taskEl.classList.add('task');

        const checkboxEl = document.createElement('input');
        checkboxEl.type = 'checkbox';
        checkboxEl.checked = task.complete;
        checkboxEl.addEventListener('change', async () => {
            await apiPatchTask(task.id, checkboxEl.checked);
            await renderizarTareas(await apiGetTasks());
        });


        const taskTextEl = document.createElement('p');
        taskTextEl.classList.add('task-text');
        taskTextEl.textContent = task.description;

        const trashEl = document.createElement('img');
        trashEl.classList.add('task-icon');
        trashEl.src = './trash-2.svg';

        taskEl.appendChild(checkboxEl);
        taskEl.appendChild(taskTextEl);
        taskEl.appendChild(trashEl);

        tasksEl.appendChild(taskEl);

        trashEl.addEventListener('click', async () => {
            await apiDeleteTask(task.id);
            await renderizarTareas(tasks);
        }
        )
    });


    //update status of tasks
    const pendentTasks = tasks.filter(task => !task.complete);
    pendentTaskEl.textContent = pendentTasks.length;
    finzalizedTaskEl.textContent = tasks.length - pendentTasks.length;


}

