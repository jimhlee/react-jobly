import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./helpers/userContext";
import "./NavBar.css";

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


function NavBar({logoutFunction}) {
    const currUser = useContext(userContext);

    /*
     *  data:
          {username: "testusername",
          password: "password",
          firstName: "Bob",
          lastName: "Last",
          email: "email@email.com"},
    */

    return (
        <nav className="NavBar">
            {currUser.data
                // TODO: change curr user and token to default
                ? < NavLink onClick={logoutFunction} to={'/'} > Logout {currUser.data.username}</NavLink>
                : <div>
                    < NavLink to={'/login'}> Login </NavLink>
                    < NavLink to={'/signup'}> Signup </NavLink>
                </div>
            }
            <NavLink to={"/"}>
                Jobly
            </NavLink>

            <NavLink to={"/companies"}>
                Companies
            </NavLink>

            <NavLink to={"/jobs"}>
                Jobs
            </NavLink>

        </nav>
    );
}

export default NavBar;