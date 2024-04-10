import { Link } from "react-router-dom"
import "./NavBar.css"

/**
 * NavBar: Links to different components
 *
 * state: none
 *
 * props: none
 *
 * App -> NavBar
 *
 */

//TODO: Links to navLinks

function NavBar() {

    return (
        <nav className="NavBar">

        <Link to={"/"}>
            Jobly
        </Link>

        <Link to={"/companies"}>
            Companies
        </Link>

        <Link to={"/jobs"}>
            Jobs
        </Link>

        </nav>
    );
  }

  export default NavBar;