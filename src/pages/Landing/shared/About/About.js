import React from 'react'
import { Main } from '@common/Main'
import { Section } from '@common/Section'
import { MobileTech } from './MobileTech'
import { Tech } from './Tech'

import styled from 'styled-components'

const aboutMeInfo = `I am a frontend developer with an accounting background and a strong passion
    for technology and coding. My main areas of expertise include HTML, CSS,
    JavaScript, React, and Styled Components. My main goal is to build top-class
    web applications and websites.`

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  .main.about {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`

const About = () => (
  <Section id="about">
    <MainContainer>
      <Main
        className="about"
        subtitle="A bit about me..."
        title="About me"
        info={aboutMeInfo}
        config={{ hasTypeWriter: false }}
      />

      <Tech />
    </MainContainer>
    <MobileTech />
  </Section>
)

export { About }
