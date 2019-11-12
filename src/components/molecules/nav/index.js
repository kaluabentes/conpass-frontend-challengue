import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const Nav = ({ children }) => <nav className={styles.nav}>{children}</nav>

Nav.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Nav
