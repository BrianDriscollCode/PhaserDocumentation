import react from "react";
import { HashLink } from "react-router-hash-link";

function SpritesHeader() {

    return(
        <div id="headerWrapper">
            <div id="headerTitle">
                <h3> App-headers Lines </h3> 
            </div>

                <div id="subjectTitle">
                          <ul className="subjectLinks">
                              <HashLink smooth to="/sprite#WaysToCreateASprite"><li> Ways to Create a Sprite </li></HashLink>
                              <HashLink smooth to="/sprite#Collisions"><li> Collisions </li></HashLink>
                              
                            
                          </ul>
                </div>

        </div>
        
            
    ); 

}

export default SpritesHeader;