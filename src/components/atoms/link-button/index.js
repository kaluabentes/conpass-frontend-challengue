import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const LinkButton = ({ onClick, children }) => (
  <button className={styles.button} type="button" onClick={onClick}>
    {children}
  </button>
)

LinkButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default LinkButton
