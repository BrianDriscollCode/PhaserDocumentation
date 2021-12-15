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

                    <h3 id="WhatIsPhaser">What is Phaser?</h3> 



                    <p id="tagline"> Phaser is a gaming framework created for the browser. It is maintained by 
                        <a href="http://www.photonstorm.com/html5"> Photon Storm</a>, a HTML 5 game development company.
                        Phaser requires a backend to operate. Whether that be Node or some other backend solution, there
                        are some resources that use webpack, but even then, when deploying you will need to create a
                        backend solution.
                    </p>

                      
                    <p id="text"> I have created a barebones version of a <a href="https://github.com/BrianDriscollCode/browserGamePhaserBoilerPlate">heroku-deployable Phaser program using Node JS</a>. This allows for fast, easy
                    deployment via <a href="https://www.heroku.com/nodejs"> NodeJS </a> on Heroku (a server platform for deploying applications for free, or for charge). </p>

                    <h3 id="Disclaimer"> Disclaimer </h3>

                    <p id="text"> This documentation is not the MAIN Phaser documentation. This is meant to help people looking for specific topics and for my own personal  
                        reference. If you are trying to learn Phaser from scratch and need a beginner guide, please refer to <a href="https://phaser.io/tutorials/getting-started-phaser3">Phaser's Getting Started Guide</a>.
                    </p>

                    <h3 id="MoreResources"> More Resources </h3>

                    <dl> 
                        <dt> <a href="https://phaser.io/examples"> Phaser 3 Official Examples</a></dt>
                        <dd> - This resource offers real 
                            working examples that can be edited and tinkered with. Great when searching how to
                            implement specific functions.
                        </dd>
                        <dt> <a href="https://phaser.io/community/discord" >Phaser Discord Channel</a> </dt>
                        <dd> - If you get stuck, this is the place to go! Also, don't code in isolation. 
                            It's great to mingle with others who are doing the same thing you are!
                        </dd>
                        <dt> <a href="https://www.youtube.com/user/WClarkson/videos"> William Clarkson's YouTube Channel</a> </dt>
                        <dd> Very short and sweet videos about specific concepts. Sometimes it can be confusing, but sometimes it 
                            will be exactly the solution you need.
                        </dd>
                    </dl>

                </div>
            </div>   
    );

}

export default Introduction;