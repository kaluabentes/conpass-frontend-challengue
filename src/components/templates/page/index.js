import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Header from 'components/organisms/header'
import Brand from 'components/atoms/brand'
import Nav from 'components/molecules/nav'
import NavItem from 'components/atoms/nav-item'
import logo from 'images/logo.png'

const Page = ({ children }) => (
  <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
    </Helmet>
    <Header>
      <Brand src={logo} alt="Conpass" />
      <Nav>
        <NavItem path="/">Link fake 1</NavItem>
        <NavItem path="/">Link fake 2</NavItem>
        <NavItem path="/">Link fake 3</NavItem>
        <NavItem path="/">Link fake 4</NavItem>
      </Nav>
    </Header>
    <main>{children}</main>
  </>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
