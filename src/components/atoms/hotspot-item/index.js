import React from 'react'
import PropTypes from 'prop-types'

import LinkButton from 'components/atoms/link-button'

import styles from './styles.module.css'

const HotspotItem = ({ children, onDelete }) => (
  <li className={styles.item}>
    <div className={styles.title}>{children}</div>
    <LinkButton onClick={onDelete}>Delete</LinkButton>
  </li>
)

HotspotItem.propTypes = {
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default HotspotItem
