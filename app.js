const argv = require('./config/yargs').argv;
const todo = require('./todo/todo');
require('colors');


let command = argv._[0];


switch (command) {
    case 'create':
        let task = todo.create(argv.description, argv.complete);
        console.log(task);
        break;

    case 'list':
        let list = todo.list(argv.complete);
        //console.log(list);
        list.map((task, index) => {
            console.log(`===== TASK (${index+1}) =====`.green);
            console.log(`Descripción: ${task.description}`);
            console.log(`Estado: ${task.complete}`);
            console.log(`=================================`.green);
        });

        break;

    case 'update':
        let updated = todo.update(argv.description, argv.complete);
        console.log(updated);
        break;

    case 'delete':
        let removed = todo.remove(argv.description);
        console.log(removed);
        break;

    default:
        console.log('Comando no es reconocido');
}