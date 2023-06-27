import React from 'react'
import Header from '../components/Layout/Header'
import EventCard from '../components/HomePage/Events/EventCard'
import Footer from '../components/Layout/Footer'

const EventPage = () => {
  return (
    <div>
        <Header activeHeading={4}/>
        <EventCard active={true}/>
        <EventCard active={true}/>
        <Footer/>
    </div>
  )
}

export default EventPage