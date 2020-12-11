const { boolean } = require('yargs');

// requireds
let description = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

let complete = {
    alias: 'c',
    //default: true,
    type: 'boolean',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('list', 'Listar a los elementos por hacer', {
        complete
    })
    .command('create', 'Crear un elemento por hacer', {
        description,
        complete
    })
    .command('update', 'Actualizar el estado completado de una tarea', {
        description,
        complete
    })
    .command('delete', 'Eliminar un elemento por hacer', {
        description,
    })
    .help()
    .argv;

module.exports = {
    argv
}