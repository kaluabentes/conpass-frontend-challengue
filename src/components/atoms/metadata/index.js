import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const Metadata = ({ title, description }) => (
  <Helmet>
    <meta name="description" content={description} />
    <title>{title}</title>
  </Helmet>
)

Metadata.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Metadata
