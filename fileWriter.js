const fs = require('fs')
const dataProcessor = require('./dataProcessor')

module.exports = {
    writeFolder: (kyu, title) => {
        const dirName = dataProcessor.createDirName(kyu, title)
        

        fs.mkdir(`../${dirName}`, (err) => {
            if (err) {return console.error(err);}
            console.log('\n\n\nDirectory created successfully!\n')
            console.log('navigate up one folder: cd ..')
            console.log('\n' + 'cd ' + dirName + '\n\n\n')
        })


    }
   
}

