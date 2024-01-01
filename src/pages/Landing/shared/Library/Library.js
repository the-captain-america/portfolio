import React, { useState } from 'react'
import { Dropdown } from '@common/Dropdown/Dropdown'
import { Toggle } from '@common/Toggle'
import { Accordion } from '@common/Accordion'
import { Section } from '@common/Section'
import { Provider as AccordionContainer } from '@common/Accordion'
import { Main } from '@common/Main'
import { Hero } from '@components/Hero'
import { Slider } from '@common/Slider'
import { Radio } from '@common/Radio'
import styled, { keyframes } from 'styled-components'
import { colors, media } from '@common/Theme'
import { Detail } from '@pages/Landing/shared/Library/Detail'
import { Parallax } from '@components/Parallax'

const Container = styled.div`
  .main.library {
    ${media.md`
      height: auto;
    `}
  }
  .hero {
    min-height: 800px;
    ${media.md`
      min-height: 1100px;
    `};
  }
`

const aspectRatio = 1.3333

const deviceWidth = {
  sm: 400,
  md: 700,
  lg: 1000,
}

const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .slider {
    background: white;
    border-radius: 8px 8px 0 0;
    transition: all 0.3s ease-in-out;
    ul.slider-box {
      li.slider-box-item {
        padding-top: 32px;
        padding-left: 16px;
        padding-right: 16px;
        display: flex;
        height: 100%;
        justify-content: center;
      }
    }
    ${media.md`
      width: ${deviceWidth.md}px;
      max-width: ${deviceWidth.md}px;
      max-height: calc(${deviceWidth.md}px / ${aspectRatio});
      height: calc(${deviceWidth.md}px / ${aspectRatio});
    `};
    ${media.lg`
      width: ${deviceWidth.lg}px;
      max-width: ${deviceWidth.lg}px;
      max-height: calc(${deviceWidth.lg}px / ${aspectRatio});
      height: calc(${deviceWidth.lg}px / ${aspectRatio});
    `}
  }
`

const radioOptions = [
  { label: 'Option 1', value: 'A', id: 'A' },
  { label: 'Option 2', value: 'B', id: 'B' },
  { label: 'Option 3', value: 'C', id: 'C' },
]

const Library = () => {
  const [state, setState] = useState({
    toggle: true,
    dropdown: [
      { label: 'Thor', id: 1, active: false },
      { label: 'Captain America', id: 2, active: false },
      { label: 'Iron Man', id: 3, active: false },
    ],
    radio: '',
  })

  const handleToggleCallback = (data) => {
    setState({ ...state, [data.name]: data.value })
  }

  const radioComponent = (
    <Detail
      title="Radio"
      link="https://github.com/vinu-codes/portfolio/blob/main/src/common/Radio/Radio.js"
      items={[
        {
          label:
            'Built with reusability in mind, this component is designed to work across all browsers.',
        },
        {
          label:
            'This is a reusable component, designed from the ground - up, I intentionally hand coded each line',
        },
      ]}
    >
      <Radio
        name="radio"
        label="Pick an option"
        options={radioOptions}
        value={state.radio}
        callback={({ name, data }) => {
          setState({ ...state, [name]: data })
        }}
      />
    </Detail>
  )

  const accordionExample = (
    <Detail
      title="Accordion"
      items={[
        {
          label:
            'This accordion component not only enriches the end-user experience by providing an intuitive and space-efficient interface but also elevates the developer experience through its reusable, customizable, and well-documented design. Its adoption can significantly expedite the development of interactive and collapsible sections within React applications.',
        },
        {
          label:
            'Developers can integrate the accordion effortlessly into their projects by importing the component and configuring it through props. The simplicity of the API contributes to a smooth onboarding process for new developers.',
        },
      ]}
      link="https://github.com/vinu-codes/portfolio/blob/main/src/common/Accordion/Accordion.js"
    >
      <AccordionContainer>
        <Accordion name="accordion" title="title 2">
          <p>this is inside accordionv2</p>
        </Accordion>
      </AccordionContainer>
    </Detail>
  )

  const toggleComponent = (
    <Detail
      title="Toggle"
      items={[
        {
          label:
            'Build this component in order  to toggle the light and dark theme.',
        },
      ]}
      link="https://github.com/vinu-codes/portfolio/blob/main/src/common/Toggle/Toggle.js"
    >
      <Toggle
        className="toggle"
        label="Enable light theme"
        value={state.toggle}
        name="toggle"
        callback={handleToggleCallback}
      />
    </Detail>
  )

  const dropdownComponent = (
    <Detail
      title="Dropdown"
      link="https://github.com/vinu-codes/portfolio/blob/main/src/common/Dropdown/Dropdown.js"
      items={[
        {
          label:
            'This Dropdown component was developed from scratch, starting out with a basic sketch. It is a fully comprehensive reusable component.',
        },
      ]}
    >
      <Dropdown
        options={state.dropdown}
        name="dropdown"
        callback={({ name, value }) => {
          setState({ ...state, [name]: value })
        }}
      />
    </Detail>
  )

  return (
    <Container id="library">
      <Hero>
        <Main
          pt={100}
          title="Library"
          className="library"
          subtitle="Component Library"
        ></Main>

        <SliderWrapper>
          <Slider
            items={[
              { value: accordionExample, label: 'Accordion' },
              {
                value: dropdownComponent,
                label: 'Dropdown',
              },
              {
                value: toggleComponent,
                label: 'Toggle',
              },
              {
                value: radioComponent,
                label: 'Radio',
              },
            ]}
          />
        </SliderWrapper>
      </Hero>
    </Container>
  )
}

export { Library }
