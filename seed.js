const mongoose = require('mongoose')
const Participant = require('./models/participant')

let resultData
let saveCounter = 0

const url = ['https://data.cityofnewyork.us/resource/pvvr-75zk.json']

mongoose.connect
async function seed(req,res,next) {
url.map(async url => {
    try{
        const res = await fetch(url)
        const json = await res.json()
        resultData= [...json]
        for (let i = 0; i < resultData.length; i++) {

            let seedParticipant = new Participant({
                name: resultData[i].name,
                location: resultData[i].city + resultData[i.region],
                // owner: req.user._id
            })
            seedParticipant.save(() => {
                console.log("saved" + seedParticipant)
                saveCounter++;
  
                if (saveCounter === resultData.length) {
                   mongoose.disconnect()
                   .then(() => console.log("saved succesfully and mongodb   disconnected"))
                   .catch(error => console.log(error));
                   }
                });
             }
          } catch (error) {
             console.log(error);
          }
          })
        }

        seed()