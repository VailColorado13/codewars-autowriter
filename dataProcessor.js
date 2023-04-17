const todaysDate = () => {
    const today = new Date()
    const day = String(today.getDate()).length < 2 ? `0${today.getDate()}` : String(today.getDate())
    const month = String(today.getMonth() + 1).length === 1 ? `0${today.getMonth() +1}` : String(today.getMonth() + 1)
    const year = String(today.getFullYear()).substring(2) 
    
    return `${month}.${day}.${year}`
}

module.exports = {
    createDirName: (kyu, title) => {
        const specialCharacters = /[^\w\s]/gi;
        title = title.toLowerCase()
        title = title.replace(specialCharacters, '')

        title = title.split(' ').join('-')
        kyu = kyu.split(' ').join('')

        return `${todaysDate()}-${kyu}-${title}`
    },

}