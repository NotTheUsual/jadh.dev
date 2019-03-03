import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import JADHLogo from '../images/JADHLogo'
import './experimentLayout.css'

const ExperimentLayout = ({ title, children }) => {
  return (
    <Fragment>
      <header className="experiments-header">
        <Link to="/" className="experiments__logo-link">
          <JADHLogo className="experiments__logo" />
          <h3 className="experiments__logo-title">James Hunter</h3>
        </Link>
      </header>
      <main className="experiments">
        {title ? <h1 className="experiments__title">{title}</h1> : null}
        {children}
      </main>
    </Fragment>
  )
}

export default ExperimentLayout
