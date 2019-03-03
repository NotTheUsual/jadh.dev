import React, { useState } from 'react'

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
        <div className="home-grid__block" />
        <div className="home-grid__block" />
        <div className="home-grid__block" />
        <div className="home-grid__block" />
        <div className="home-grid__block" />
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
