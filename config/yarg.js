
const argv = require('yargs')
    .option({
        'b': {
            alias: 'base',
            type: 'number',
            description: 'es un pinshe numero, wey',
            demandOption: true
        },
        'l': {  
            alias: 'list',
            type: 'boolean',
            default: false,
            description: 'print table',
        },
        'g': {
            alias: 'goal',
            type: 'number',
            description: 'print to n-times',
            default: 10,
        }
    })
    .check( ( argv, options ) => {
        if ( isNaN(argv.b) ) {
            throw ' the base should be a number';
        }
        return true;
    })
    .argv;

module.exports = argv;