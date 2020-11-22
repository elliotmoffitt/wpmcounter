import React from "react";
import "./Nav.css"
import wpmcounter from './wpmcounter.png'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
function Nav() {
  return (
    <div>
      {/* <img className="wpmcounter" src={wpmcounter} alt="asdf" /> */}
      <ul className="nav justify-content-end">

        <li className="nav-item">
          <Link className="nav-link active" href="#">Active</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Link</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Link</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" href="#" tabindex="-1">Disabled</Link>
        </li>

      </ul>
    </div>
  );
}
export default Nav;

    // aria-disabled="true"