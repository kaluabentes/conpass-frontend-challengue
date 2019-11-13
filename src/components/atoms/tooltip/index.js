import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const Tooltip = ({ title, content }) => (
  <div className={styles.tooltip}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.content}>{content}</p>
  </div>
)

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Tooltip
