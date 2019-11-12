import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const Brand = ({ src, alt }) => (
  <h1 className={styles.heading}>
    <img className={styles.image} src={src} alt={alt} />
  </h1>
)

Brand.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Brand
