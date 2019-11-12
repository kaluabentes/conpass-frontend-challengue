import React from 'react'
import PropTypes from 'prop-types'

import Container from 'components/atoms/container'

import styles from './styles.module.css'

const Header = ({ children }) => (
  <header className={styles.header}>
    <Container>
      <div className={styles.inner}>{children}</div>
    </Container>
  </header>
)

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
