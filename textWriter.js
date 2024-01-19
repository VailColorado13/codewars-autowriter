const fs = require('fs')

module.exports = { 
    writeHeader: (kyu, title, link, linkIsJavascript) => {
        if (linkIsJavascript) {
        return `//Solution for ${kyu} ${title} \n//Link to Kata: ${link}`
        }
        else {
            return `#Solution for ${kyu} ${title} \n#Link to Kata: ${link}`
        }
    }
}
