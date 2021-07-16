
const fs = require('fs');
const colors = require('colors');

const createFile = async ( base = 1, list=false, goal ) => {

    try {

        const header = `=================> table ${base} \n`;
        let salida = header;
        let consola = header.green;
        
        for (let i = 1; i <= goal; i++)
        { 
            consola +=`${base} ${'x'.red} ${i} ${'='.blue} ${base*i} \n`;
            salida += `${base} x ${i} = ${base*i} \n`;
        }

        
        if(list) console.log(consola);// print table
        
        // the folder fileCrated not have permission to write, only read.
        fs.writeFileSync(`./fileCreated/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }

}

module.exports = {
    createFile
}