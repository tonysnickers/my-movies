import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <ul className='nav'>
        <NavLink to={"/"}>
          <li>
          Accueil
          </li>
        </NavLink>
        <NavLink to={"/like"}>
          <li>
          Coup de coeur
          </li>
        </NavLink>

      </ul>
    </div>
  )
}

export default Nav
