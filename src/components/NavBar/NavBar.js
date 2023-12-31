import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@common/Icon'
import { useSize } from '@hooks/useSize'
import { NavigationContext } from '@components/Route'
import {
  Container,
  Image,
  Group,
  Item,
  IconContainer,
  MobileMenu,
  MobileButton,
  MobileGroup,
  MobileItem,
  DesktopTitle,
} from './NavBar.styled'
import profile from './assets/profile.png'

const NavBar = ({ routes = [] }) => {
  const [currentPath, navigate] = useContext(NavigationContext)
  const [isActive, setIsActive] = useState(false)
  const { width } = useSize()

  useEffect(() => {
    if (!!width && width >= 768) {
      setIsActive(false)
      const body = document.querySelector('body')
      body.style.overflow = 'auto'
    }
  }, [width])

  const toggleMenu = () => {
    setIsActive(!isActive)
    const body = document.querySelector('body')
    body.style.overflow = isActive ? 'auto' : 'hidden'
  }

  const handleGitHub = () => {
    window.open(
      'https://github.com/vinu-codes',
      '_blank',
      'noopener,noreferrer',
    )
  }

  const handleProfileClick = () => {
    window.open(
      'https://www.linkedin.com/in/vinujk/',
      '_blank',
      'noopener,noreferrer',
    )
  }

  const handleClick = (path) => {
    navigate(path)

    if (isActive) {
      const body = document.querySelector('body')
      body.style.overflow = 'auto'
      setIsActive(false)
    }
  }

  const renderDesktopItems = () => {
    if (!routes || !routes.length) return null
    return routes.map((route) => (
      <Item
        key={route.label}
        className={currentPath === route.path ? 'active' : ''}
        isActive={currentPath === route.path}
        onClick={() => handleClick(route.path)}
      >
        <span>{route.label}</span>
      </Item>
    ))
  }

  const renderMobileItems = () => {
    if (!routes || !routes.length) return null
    const result = routes.map((route) => (
      <MobileItem
        key={route.label}
        className="mobile-item"
        isActive={currentPath === route.path}
        onClick={() => handleClick(route.path)}
      >
        <span>{route.label}</span>
      </MobileItem>
    ))
    return <MobileGroup>{result}</MobileGroup>
  }

  return (
    <div
      style={{
        height: '72px',
        minHeight: '72px',
        width: '100%',
      }}
    >
      <Container className={isActive ? 'active' : 'not_active'}>
        <Image onClick={handleProfileClick}>
          <img alt="profile" src={profile} />
        </Image>
        <DesktopTitle>Coding the Front End</DesktopTitle>
        <Group>
          {renderDesktopItems()}
          <button className="github-button">
            <span onClick={handleGitHub}>GitHub</span>
          </button>
        </Group>
        <MobileMenu className="mobile-menu">{renderMobileItems()}</MobileMenu>
        <MobileButton onClick={toggleMenu}>
          <IconContainer>
            <Icon
              flip
              name={isActive ? 'CLOSE' : 'HAMBURGER'}
              size={32}
              stroke="rgb(106, 108, 255)"
            />
          </IconContainer>
        </MobileButton>
      </Container>
    </div>
  )
}

NavBar.defaultProps = {
  title: 'NavBar',
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
}

export { NavBar }
