import react from "react";

function BasicPhysicsHeader() {

    return(
        <div id="headerTitle">
              <h3> App-headers Lines </h3> 

                <div id="subjectTitle">
                          <ul className="subectLinks">
                            <li><a href="#SetConfigGravity"> Set Config Gravity</a></li>
                            <li><a href="#"> Set Sprite Body Velocity </a></li>
                            <li><a href="#"> Set Sprite Bounce </a></li>
                          </ul>
                </div>
            </div>
    ); 


}

export default BasicPhysicsHeader;