import { NavLink } from "react-router";
function Navbar() {
    return(
        <div>
            <h1>HETIC</h1>
            <nav>
                 <NavLink 
                 to="/home">
                    Home 
                 </NavLink>
                 <NavLink 
                 to="/About">
                    About 
                    </NavLink>
                 <NavLink
                  to="/Contacts">
                    Contacts
                     </NavLink>

            </nav>
        </div>
    )
}
   
 export default Navbar      