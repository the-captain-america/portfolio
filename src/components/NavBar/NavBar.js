import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@common/Icon'
import { useSize } from '@hooks/useSize'
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
} from './NavBar.styled'
import profile from './assets/profile.png'
import { NavigationContext } from '@components/Route'

const NavBar = ({ title, routes = [] }) => {
  const { currentPath, navigate } = useContext(NavigationContext)
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

  const renderMenuItems = () => {
    if (!routes || !routes.length) return null

    const handleClick = (path) => {
      navigate(path)
    }

    const result = routes.map((route) => {
      return (
        <Item
          key={route.label}
          isActive={currentPath === route.path}
          onClick={() => handleClick(route.path)}
        >
          {route.label}
        </Item>
      )
    })
    return result
  }

  return (
    <Container className={isActive ? 'active' : 'not_active'}>
      <Image onClick={handleProfileClick}>
        <img src={profile} />
      </Image>
      <Group>
        {renderMenuItems()}
        <Item>
          <span onClick={handleGitHub}>Github</span>
        </Item>
      </Group>
      <MobileMenu className="mobile-menu">
        <MobileGroup className="mobile-group">
          <MobileItem className="mobile-item">
            <span>Home</span>
          </MobileItem>
          <MobileItem>
            <span>About</span>
          </MobileItem>
          <MobileItem>
            <span>Library</span>
          </MobileItem>
          <MobileItem>
            <span>Github</span>
          </MobileItem>
        </MobileGroup>
      </MobileMenu>
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
  )
}

NavBar.defaultProps = {
  title: 'NavBar',
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
}

export { NavBar }