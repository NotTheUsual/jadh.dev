import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import JADHLogo from '../images/JADHLogo'
import * as classes from './standardLayout.module.css'

const ExperimentLayout = ({ title, children }) => {
  return (
    <Fragment>
      <header className="experiments-header">
        <Link to="/" className={classes.logoLink}>
          <JADHLogo className={classes.logo}/>
          <h3 className={classes.logoTitle}>James Hunter</h3>
        </Link>
      </header>
      <main className={classes.main}>
        {title ? <h1 className={classes.title}>{title}</h1> : null}
        {children}
      </main>
    </Fragment>
  )
}

export default ExperimentLayout
