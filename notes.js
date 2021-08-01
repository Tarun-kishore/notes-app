const chalk = require('chalk')
const fs = require('fs')

const loadNotes = ()=> {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e){
        return []
    }
}

const saveNotes = (notes)=>{
    const jsonData = JSON.stringify(notes)
    fs.writeFileSync('notes.json',jsonData)
}

const readNote = function(title){
    const notes = loadNotes()

    const requiredNote = notes.find((note)=> note.title === title)

    if(requiredNote){
        console.log(chalk.bgGreen.bold('Your Note'))
        console.log('Title : '+ requiredNote.title)
        console.log('Body : '+ requiredNote.body)
    }
    else{
        console.log(chalk.bgRed('No such note found'))
    }
}

const addNote = (title , body)=>{
    const notes = loadNotes()

    // const duplicateNotes = notes.filter((note)=> note.title === title)
    const duplicateNotes = notes.find((note)=> note.title === title)

    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        
        console.log(chalk.bgGreen.bold.italic('New Note added'))
    }
    else
        console.log(chalk.bgRed.green.bold.underline('Unable to add Note'))


}


const removeNote = (title)=>{
    // console.log("removing note titled "+ title)
    const notes = loadNotes()

    const suitableNotes = notes.filter((note)=> note.title !== title )


    if(notes.length !== suitableNotes.length){
        console.log(chalk.bgGreen.white.bold.italic('SuccessFully deleted Note'))
        saveNotes(suitableNotes)
    }
    else
        console.log(chalk.bgYellow.red.bold.underline('Note not fount'));

}

const listNotes = ()=>{
    const notes = loadNotes()

    console.log(chalk.bgGreen.bold('YOUR NOTES'))

    notes.forEach( e => {
        console.log(chalk.red(e.title) )
    });
}


module.exports = {
    readNote : readNote,
    addNote : addNote,
    removeNote: removeNote,
    listNotes : listNotes
}

