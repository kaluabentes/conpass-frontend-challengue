import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

const NavItem = ({ path, children }) => (
  <Link className={styles.link} to={path}>
    {children}
  </Link>
)

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default NavItem
