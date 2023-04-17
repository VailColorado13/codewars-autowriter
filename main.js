const fs = require('fs')
const readline = require('readline')
const scraper = require('./scraper')
const fileWriter = require('./fileWriter')


async function promptUser() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      })
    
    rl.question("please enter the link to your kata:" , async function(url) {
        const [kyu, title] = await scraper.getData(url)
        fileWriter.writeFolder(kyu, title, url)
        rl.close()
    }) 
}







promptUser()




 