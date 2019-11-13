import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const HotspotMarker = ({ onClick }) => (
  <button className={styles.button} type="button" onClick={onClick}>
    <div className={styles.outterCircle}>
      <div className={styles.innerCircle} />
    </div>
  </button>
)

HotspotMarker.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default HotspotMarker
