import react from "react";
import { HashLink } from "react-router-hash-link";

function BasicPhysicsHeader() {

    return(
        <div id="headerWrapper">
            <div id="headerTitle">
                <h3> Page Subjects </h3> 
            </div>

                <div id="subjectTitle">
                          <ul className="subjectLinks">
                              <HashLink smooth to="/basic_physics#setConfigGravity"><li> Set Config Gravity </li></HashLink>
                              <HashLink smooth to="/basic_physics#setConfigGravity"><li> Set Bounce on Sprite</li></HashLink>
                              <HashLink smooth to="/basic_physics#setConfigGravity"><li> Set Object Speed </li></HashLink>
                            
                          </ul>
                </div>

        </div>
        
            
    ); 

}

export default BasicPhysicsHeader;
