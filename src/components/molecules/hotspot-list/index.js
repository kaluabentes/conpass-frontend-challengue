import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const HotspotList = ({ title, children }) => (
  <div className={styles.container}>
    <div className={styles.header}>{title}</div>
    <ul className={styles.list}>{children}</ul>
  </div>
)

HotspotList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default HotspotList
