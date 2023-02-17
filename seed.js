require('dotenv').config()
require('./config/database')
const Participant = require('./models/participant')


;(async function seed() {
    await Participant.deleteMany({})
        const participants = await Participant.create([

            {
                name: "Michael Rowe",
                location: "Huntsville, AL" 
            },
            {
                name: "Lucas Gomez",
                location: "Brevard NC" 
            },
            {
                name: "Chris Slaton",
                location: "Tallahassee, FL" 
            },
            {
                name: "Danielle Slaton",
                location: "Tallahassee, FL" 
            },
            {
                name: "Grace Ingham",
                location: "Athens, GA" 
            },
            {
                name: "Jill Lowther",
                location: "Atlanta, GA" 
            },
            {
                name: "Anthony Huinker",
                location: "Atlanta, GA" 
            },
            {
                name: "Leigh Finlayson",
                location: "Atlanta, GA"
            },
            {
                name: "Kate Crockett",
                location: "Augusta, GA" 
            },
            {
                name: "Jack Crockett",
                location: "Augusta, GA" 
            },
            {
                name: "Greg Ekrem",
                location: "Atlanta, GA" 
            },
            {
                name: "Shane Byler",
                location: "Atlanta, GA" 
            },
            {
                name: "Bill Mondock",
                location: "Warner Robbins, GA" 
            },
            {
                name: "Ted Wood",
                location: "Atlanta, GA" 
            },
            {
                name: "Jeph Burgoon",
                location: "Smyrna, GA" 
            },
            {
                name: "Jacob Cronan",
                location: "Atlanta, GA" 
            },
            {
                name: "Chris Bulloch",
                location: "Atlanta, GA" 
            },
            {
                name: "Cedar Blanchard",
                location: "Jasper, GA" 
            },
            {
                name: "Olen Daelhousen",
                location: "Brevard, NC" 
            },
            {
                name: "Marcos Schechter",
                location: "Atlanta, GA" 
            }

        ])
        // console.log(participants)
    })()