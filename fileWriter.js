const fs = require('fs')
const dataProcessor = require('./dataProcessor')
const textWriter = require('./textWriter')

module.exports = {
    writeFolder: (kyu, title, link) => {
        const dirName = dataProcessor.createDirName(kyu, title)
        fs.mkdir(`../${dirName}`, (err) => {
          if (err) {
            return console.error(err)
          }
          console.log('\n\n\nDirectory created successfully!\n')
          console.log(`\n\n\n`)
          console.log(`navigate to folder: \n cd ../${dirName}`)
          console.log(`\n\n\n`)
        
          // move the writeFile function here
          fs.writeFile(`../${dirName}/solution.js`, textWriter.writeHeader(kyu, title, link), (err) => {
            if (err) console.log(err)
          })
        })
      }

    }
   


