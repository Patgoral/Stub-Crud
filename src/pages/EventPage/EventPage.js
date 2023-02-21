import { checkToken } from '../../utilities/users-services'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as participantsAPI from '../../utilities/participants-api'
import './EventPage.css'
import logo from '../assets/fried-clay.png'
import YoutubeEmbed from '../components/Video/Video'

export default function EventPage() {
    const navigate = useNavigate()
    const [buttonString, setButtonString] = useState('')
    const [participants, setParticipants] = useState([])
    let participantList;

    let eventDate = new Date("March 25, 2023 00:00:00").getTime()
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const countDown = setInterval(function () {
            let currentDate = new Date().getTime()
            let timeBetween = eventDate - currentDate;
            setDay(Math.floor(timeBetween / (1000 * 60 * 60 * 24)))
            setHour(Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            setMinute(Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60)))
            setSecond(Math.floor((timeBetween % (1000 * 60)) / 1000))
        }, 1000)
        return function () {
            clearInterval(countDown)
        }
    }, [day], [hour], [minute], [second])
    
    useEffect(function () {
        async function getAllParticipants() {
            const participants = await participantsAPI.showParticipants()
            setParticipants(participants)
        }
        getAllParticipants()
    }, [])

    if (participants.length !== 0) {
        participantList = participants.participants.map((participant) => (
            <div className='list-of-attendees' key={participant._id}>
                <div>{participant.name}</div>
                <div>{participant.location}</div>
            </div>
        ))
    }

    async function handleCheckToken() {
        checkToken()
        if(participants.participants.length > 0){
            navigate('/manage')
        }else{
            navigate('/events/register')
        }
    }
    useEffect(function (){
        async function participantLength(){
        const length = await participants.participants.length;
            if(length > 0){
                setButtonString('Management')
            }else{
                setButtonString('Register')
            }
        }
        participantLength()
    })
    
    return (
        <div className='event-page'>
            <div className='event-page-container-top'>
                <div className='event-logo'>
                    <img className='logo-img' src={logo}></img>
                </div>
                <div className='registration-container'>
                    <div className='next-event'>
                        <div className='event-caption'>The Next Event will be <br /> March 25, 2023<br /></div>
                        {day}d {hour}h {minute}m {second}s
                    </div>
                    <div className='button-div'>
                        <button onClick={handleCheckToken}>{buttonString}</button>
                    </div>
                </div>
            </div>
            <div className='event-page-container-bottom'>
                <div className='event-desc-container'>
                    <div className='event-desc-header'>About this Event</div>
                    <div className='event-desc-body'>
                        <p>This is the fourth edition of the Fried Clay 200k. A self-supported endurance gravel event that takes you through 130ish miles of the Chattahoochee-Oconee National Forest. Expect a grueling trip down some of the best gravel roads middle Georgia has to offer. </p>
                        <p>The route combines the popular Red Clay Ramble and Fried Green Tomatoes routes plus a lot of weird junk I added to make it even harder! You will need a GPS or a smart phone to navigate as there will be no markings on the route at all! Expect long stretches of gravel, mild singletrack, water crossings, horse trails, and mud.</p>
                        <p>If you've been thinking about giving this whole endurance gravel/bikepacking thing a shot, this is the perfect event. Some riders will choose to race, while others will party pace it. This event can be the perfect opportunity to try a longer gravel race, or a tough overnighter if you want to bikepack it.</p>
                        <p> If you chose to camp on the route, there will be marked primitive campsites on the route guide you will receive via e-mail before the event. Your registration gets you the GPX route, an in-depth route guide, and a dope patch.</p>
                        <p> We will have a camp setup the night before if you choose to come down early! You will receive more details via email once registered. This event will take place rain or shine! There are no refunds on registration, but you can transfer your registration. If you have any questions, feel free to reach out.</p>
                    </div>
                </div>
                <div className='attendees-container'>
                    <div className='attendees-header'>List of Attendees</div>
                    <div className='list-container-overflow'>{participantList}</div>
                </div>
                <div className='event-video'><YoutubeEmbed /></div>
            </div>
        </div>
    )
}
