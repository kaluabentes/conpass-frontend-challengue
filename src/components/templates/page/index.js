import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/organisms/header'
import Brand from 'components/atoms/brand'
import Nav from 'components/molecules/nav'
import NavItem from 'components/atoms/nav-item'
import logo from 'images/logo.png'

const Page = ({ children }) => (
  <>
    <Header>
      <Brand src={logo} alt="Conpass" />
      <Nav>
        <NavItem>Link fake 1</NavItem>
        <NavItem>Link fake 2</NavItem>
        <NavItem>Link fake 3</NavItem>
        <NavItem>Link fake 4</NavItem>
      </Nav>
    </Header>
    <main>{children}</main>
  </>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
