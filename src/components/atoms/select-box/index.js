import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const SelectBox = ({ width, height, posX, posY }) => (
  <div
    className={styles.selectBox}
    style={{ width: `${width}px`, height: `${height}px`, top: `${posY}px`, left: `${posX}px` }}
  />
)

SelectBox.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  posX: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
}

export default SelectBox
