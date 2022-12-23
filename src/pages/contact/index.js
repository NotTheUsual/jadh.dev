import React from 'react'
import StandardLayout from '../../components/standardLayout'
import { FaBug, FaGithub, FaMastodon, FaTwitter } from 'react-icons/fa'
import * as classes from './contact.module.css';

const links = [{
  name: 'Twitter',
  handle: '@jadhunter',
  link: 'https://twitter.com/jadhunter',
  Icon: FaTwitter,
  tint: 'hsl(203, 100%, 77%)'
}, {
  name: 'Mastodon',
  handle: '@jadhunter@mastodon.social',
  link: 'https://mastodon.social/@jadhunter',
  Icon: FaMastodon,
  tint: 'hsl(239, 100%, 77%)'
}, {
  name: 'Cohost',
  handle: '@jadhunter',
  link: 'https://cohost.org/jadhunter',
  Icon: FaBug,
  tint: 'hsl(34, 100%, 77%)'
}, {
  name: 'GitHub',
  handle: 'NotTheUsual',
  link: 'https://github.com/NotTheUsual/',
  Icon: FaGithub
}];

const Contact = () => (
  <StandardLayout title="Contact">
    <ul className={classes.list}>
      {links.map((link) => (
        <li key={link.name} className={classes.listItem}>
          <a href={link.link} className={classes.socialLink} style={{ backgroundColor: link.tint }}>
            <h4 className={classes.socialTitle}>{link.name}</h4>
            <p className={classes.socialHandle}>{link.handle}</p>
            <link.Icon className={classes.socialIcon} />
          </a>
        </li>
      ))}
    </ul>
  </StandardLayout>
)

export default Contact
