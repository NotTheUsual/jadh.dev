import React, { useState } from 'react'
import { Link } from 'gatsby'

import JADHLogo from '../images/JADHLogo'

import '../components/layout.css'
import './index.css'

const themes = ['blue', 'red', 'green']

const IndexPage = () => {
  const [theme, setTheme] = useState(0)

  const nextTheme = () => {
    if (themes[theme + 1]) {
      setTheme(theme + 1)
    } else {
      setTheme(0)
    }
  }

  return (
    <main className={`home home--${themes[theme]}`}>
      <div className="home-grid">
        <div className="home-grid__block" />
        <div className="home-grid__block" />
        {/* <div className="home-grid__block" /> */}
        <Link className="home-grid__block home-grid__block--link" to='/about/'>
          <span>About</span>
        </Link>
        <div className="home-grid__block" />
        <div className="home-grid__block" />
        <Link className="home-grid__block home-grid__block--link" to='/contact/'>
          <span>Contact</span>
        </Link>
        <Link className="home-grid__block home-grid__block--link" to='/experiments/'>
          <span>Experiments</span>
        </Link>
        <div className="home-grid__block" />
        <div className="home-grid__block" />
        <div className="home-grid__block" />
        <div className="home-grid__block" />
        <JADHLogo onClick={nextTheme} className="home-grid__logo" />
      </div>
    </main>
  )
}

export default IndexPage
