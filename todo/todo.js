const fs = require('fs');

let todoList = [];

const saveDB = () => {
    let data = JSON.stringify(todoList);

    fs.writeFile('database/data.json', data, (err) => {
        if (err) throw new Error('No se puede grabar', err);
    });
}

const loadDB = () => {
    try {
        todoList = require('../database/data.json');
    } catch (error) {
        todoList = [];
    }
}

const create = (description, complete = false) => {
    loadDB();

    let todo = {
        description,
        complete
    };

    todoList.push(todo);
    saveDB();

    return todo;
}

const list = (complete = false) => {
    loadDB();

    if (complete) {
        todoList = todoList.filter(task => task.complete === true);
    } else {
        todoList = todoList.filter(task => task.complete === false);
    }

    return todoList;
}

const update = (description, complete) => {
    loadDB();

    let index = todoList.findIndex(task => task.description == description);

    if (index >= 0) {
        todoList[index].complete = complete;
        saveDB();

        return true;
    }

    return false;
}

const remove = (description) => {
    loadDB();

    let index = todoList.findIndex(task => task.description == description);

    if (index >= 0) {
        todoList.splice(index, 1);
        saveDB();

        return true;
    }

    return false;
}

module.exports = {
    create,
    list,
    update,
    remove
}