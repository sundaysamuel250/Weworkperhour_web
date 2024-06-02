import React from 'react'
import AboutHeroSection from './components/AboutHeroSection'
import RecruitPionerSection from './components/RecruitPionerSection'
import WhatTheySayingSection from '../company/components/WhatTheySayingSection'
import FooterSection from '../../components/reusable/FooterSection'

const About: React.FC = () => {
  return (
    <>
    <AboutHeroSection />
    <RecruitPionerSection />
    <WhatTheySayingSection />
    <FooterSection />
    </>
  )
}

export default About