const fs = require('fs')

module.exports = { 
    writeHeader: (kyu, title, link) => {
        return `//Solution for ${kyu} ${title} \n//Link to Kata: ${link}`
    }
}
