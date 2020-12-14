import React from 'react';
import s from './Header.module.css';
import {MdSentimentDissatisfied} from 'react-icons/md';
import {MdSentimentNeutral} from 'react-icons/md';
import {MdSentimentSatisfied} from 'react-icons/md';
import {NavLink} from 'react-router-dom';

function Header() {
   return (
      <nav className={s.navbar}>
         <ul className={s.navbarNav}>
            <li className={s.navItem}>
               <NavLink to="/pre-junior" className={s.navLink} activeClassName={s.activeLink}>
                  <span className={s.icon}><MdSentimentDissatisfied/></span>
                  <span className={s.linkText}>Pre Junior</span>
               </NavLink>
            </li>

            <li className={s.navItem}>
               <NavLink to="junior" className={s.navLink} activeClassName={s.activeLink}>
                  <span className={s.icon}><MdSentimentNeutral/></span>
                  <span className={s.linkText}>Junior</span>
               </NavLink>
            </li>

            <li className={s.navItem}>
               <NavLink to="junior-plus" className={s.navLink} activeClassName={s.activeLink}>
                  <span className={s.icon}><MdSentimentSatisfied/></span>
                  <span className={s.linkText}>Junior Plus</span>
               </NavLink>
            </li>
         </ul>
      </nav>
   );
}

export default Header;
