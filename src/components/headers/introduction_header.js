import react from "react";
import { HashLink } from "react-router-hash-link";

function IntroductionHeaders() {

    return(
        <div id="headerTitle">
              <h3> App-headers Lines </h3> 

                <div id="subjectTitle">
                          <ul className="subjectLinks">
                             
                          <HashLink smooth to="/introduction#WhatIsPhaser"><li> What is Phaser? </li></HashLink>
                          <HashLink smooth to="/introduction#Disclaimer"><li> Disclaimer </li></HashLink>
                          <HashLink smooth to="/introduction#MoreResources"><li> More resources </li></HashLink>
                              
                          </ul>
                </div>
            </div>
    ); 

}

export default IntroductionHeaders;