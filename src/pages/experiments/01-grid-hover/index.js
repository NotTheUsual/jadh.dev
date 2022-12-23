import React, { useState } from 'react'
import ExperimentLayout from '../../../components/experimentLayout'
import twitter from './twitter.svg'
import twitterWhite from './twitter-white.svg'
import * as styles from './grid-hover.module.css'

const GridHoverExperiment = () => {
  const [clicked, setClicked] = useState(false)

  const toggleClick = event => {
    event.preventDefault()
    setClicked(wasClicked => !wasClicked)
  }

  return (
    <ExperimentLayout title="Weird grid hover thing">
      <button className={styles.twitterLink} onClick={toggleClick}>
        <div className={styles.linkLowerLevel}>
          <div className={styles.linkLowerLeft}>
            <img
              src={twitter}
              alt="Twitter logo"
              className={styles.twitterImg}
            />
          </div>
          <div className={styles.linkLowerRight}>Follow me on Twitter</div>
        </div>

        <div
          className={`${styles.linkUpperLevelWrapper} ${
            clicked ? styles.apology : ''
          }`}
        >
          {clicked ? (
            <p>
              Actually, you know what, that's a terrible idea, don't do that
            </p>
          ) : (
            <div className={styles.linkUpperLevel}>
              <div className={styles.linkUpperLeft}>
                <img
                  src={twitterWhite}
                  alt="Twitter logo"
                  className={styles.twitterImg}
                />
              </div>
              <div className={styles.linkUpperRight}>Follow me on Twitter</div>
            </div>
          )}
        </div>
      </button>
    </ExperimentLayout>
  )
}

export default GridHoverExperiment
