import React from 'react'
import { Link } from 'gatsby'
import StandardLayout from '../../components/standardLayout'
import * as classes from './about.module.css'

const About = () => (
  <StandardLayout title='About'>
    <article className={classes.container}>
      <p>Hi! I'm James Hunter. I do web development things. Mostly for Starling Bank these days.</p>
      <p>I'm not 100% sure what I need this site for, but it's something to work on during the holidays, at least. And that's something?</p>
      <p>Which is all to say this may be more for my benefit than yours (sorry).</p>
      <p>(It's built with Gatsby for some reason. As ever, I'm currently resisting the urge to completely rewrite it.)</p>
      <p>You can find me elsewhere on the internet <Link to='/contact'>on my contact page</Link>.</p>
    </article>
  </StandardLayout>
)

export default About
