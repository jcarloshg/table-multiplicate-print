
const {createFile} = require('./helpers/multiplicar');
const argv = require('./config/yarg');
const colors = require('colors');

console.clear();


// without package yarg :¨)
// const [,,argv3 = 'base=5'] = process.argv;
// const [, base] = argv3.split('=');

console.log(argv);

createFile( argv.b, argv.l, argv.g )
    .then( nameFile => console.log(nameFile.rainbow , ' created!') )
    .catch( err => console.log(err));

