import React from 'react';


function Introduction(props) {

    return (
        <div id="informationTitle">
                      <h2> Introduction </h2>
                

                <div className="content">

                    <p id="tagline"> Welcome to a helpful resource for the Phaser 3.5 framework. This is a personal documentation of the 
                    Phaser framework, a free open source HTML 5 game framework. The documentation is authored by <author>Brian Driscoll</author>. Here you will find beginner-friendly 
                    documentation that will be updated with real samples for each section. 
                      </p>

                    <h3>What is Phaser?</h3> 



                    <p id="tagline"> Phaser is a gaming framework created for the browser. It is maintained by 
                        <a href="http://www.photonstorm.com/html5"> Photon Storm</a>, a HTML 5 game development company.
                        Phaser requires a backend to operate. Whether that be Node or some other backend solution, there
                        are some resources that use webpack, but even then, when deploying you will need to create a
                        backend solution.
                    </p>

                      
                    <p id="text"> I have created a barebones version of a <a href="https://github.com/BrianDriscollCode/browserGamePhaserBoilerPlate">heroku-deployable Phaser program using Node JS</a>. This allows for fast, easy
                    deployment via <a href="https://www.heroku.com/nodejs"> NodeJS </a> on Heroku (a server platform for deploying applications for free, or for charge). </p>

                    <h3> Disclaimer </h3>

                    <p id="text"> This documentation is not the MAIN Phaser documentation. This is meant to help people looking for specific topics and for my own personal  
                        reference. If you are trying to learn Phaser from scratch and need a beginner guide, please refer to <a href="https://phaser.io/tutorials/getting-started-phaser3">Phaser's Getting Started Guide</a>.
                    </p>
                </div>
            </div>   
    );

}

export default Introduction;