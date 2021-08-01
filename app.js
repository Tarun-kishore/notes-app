const notes = require('./notes')
const yargs = require('yargs')
const chalk = require('chalk') 
const { listNotes } = require('./notes')


//add
yargs.command({
    command: 'add',
    describe:'Adding a new Note',
    builder:{
        title:{
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body:{
            describe: 'body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

// remove

yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder:{
        title:{
            describe : 'Title to be removed',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// List

yargs.command({
    command: 'list',
    describe: 'Listing all note',
    handler() {
        notes.listNotes()
    }
})

// Read 

yargs.command({
    command: 'read',
    describe:'reading a note',
    builder:{
        title:{
            describe:'Title of note to be read',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()

