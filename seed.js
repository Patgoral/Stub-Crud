const Participant = require('./models/participant')

// Set up the Eventbrite API request parameters
const token = process.env.EVENTBRITE_TOKEN
const eventId = "430916953207";
const url = `https://www.eventbriteapi.com/v3/events/${eventId}/attendees/`;

const headers = {
  "Authorization": `Bearer ${token}`
};
//#########################################
//COMMENT THIS BACK IN IF NEED SEEDING
//#########################################
// async function seed() {
//         await Participant.deleteMany({})


async function seed() {
        await Participant.deleteMany({})

  try {

  
//     // Fetch the attendee data from the Eventbrite API
//     const response = await fetch(url, { headers });
//     const data = await response.json();

//     const attendees = data.attendees;

//     // Insert the attendee data into the collection
//     const result = await Participant.insertMany(
//       attendees.map(attendee => ({ name: attendee.profile.name, location: `${attendee.profile.addresses.home.city}, ${attendee.profile.addresses.home.region}`  }))
//     );
//     console.log("Eventbrite seed documents inserted into the collection");

//   } catch (err) {
//     console.error("No API Token");
//   } 
// }

// seed().catch(console.error);