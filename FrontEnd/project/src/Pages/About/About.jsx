/* eslint-disable no-unused-vars */
import React from 'react'
import M from './img/M'
import Content from './Content/Content'
import TeamSection from './Teamsection/Teamsection'
import Performance from './Performance/Performance'
// import Header from '../Home/Header/Header'
// import Footer from '../Home/Footer/Footer'

const About = () => {
  return (
    <>
        <div className="home">
           {/* <Header /> */}
            <M />
            <Content/>
            <TeamSection/>
            <Performance />
            {/* <Footer /> */}
        </div>
    </>
  )
}

export default About;