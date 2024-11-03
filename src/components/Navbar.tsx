import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';

//Help from: https://rupard.hashnode.dev/how-to-create-a-multi-page-website-in-react

function Navbar() {
  return (
    <div className='navigation-menu'>
        <ol>
            <li><a href="https://github.com/hskalla/jargon">Github</a></li>
            <li><Link to={"/docs"}>Documentation</Link></li>
            <li><Link to={"/"}>Gen</Link></li>
        </ol>
    </div>

  )
}

export default Navbar