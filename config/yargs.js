const descripcion = {
    default: true,
    alias: 'd',
    desc: 'Descripcion de la tarhacerea por'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}

//module.exports = {
//      argv
// }
/*comando crear 'Crear un elemento por hacer'
        --descripcion -d


comando actualziar 'Actualiza el estado completado de una tarea'
        --descripcion -d
        --completado -c true

        --help*/