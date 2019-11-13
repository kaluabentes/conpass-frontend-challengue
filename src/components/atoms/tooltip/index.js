import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const Tooltip = ({ isEditable, onEdit, title, content }) => (
  <div className={styles.tooltip}>
    {isEditable ? (
      <input className={styles.titleField} value={title} onChange={onEdit} />
    ) : (
      <h3 className={styles.title}>{title}</h3>
    )}
    {isEditable ? (
      <textarea className={styles.contentField} onChange={onEdit}>
        {content}
      </textarea>
    ) : (
      <p className={styles.content}>{content}</p>
    )}
  </div>
)

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isEditable: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default Tooltip
