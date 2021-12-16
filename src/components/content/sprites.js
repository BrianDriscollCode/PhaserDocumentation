import React from 'react';
import extendArcadeSpriteImage from '../../assets/syntax/extend_Arcade_Sprite2.PNG';
import extendArcadeSpriteImage2 from '../../assets/syntax/extend_Arcade_Sprite3.PNG';


function Sprite(props) {

    return (
        <div id="informationTitle">
                      <h2 id="WaysToCreateASprite"> Sprite </h2>
                

                <div className="content">

                      <p id="tagline"> 

                        The sprite Game object is used for various screen elements such as players, enemies, and more.

                        There are several functions that can be done to a sprite from input events, physics bodies, tweening, tints, blend modes,
                        animation, and more. 

                        There are also different types of sprites such as arcadesprite or sprite.
                      </p>

                      <h2> Ways to Create Sprites </h2>

                      <dl> 
                      <dt> <a href="https://phaser.io/examples/v3/view/animation/create-animation-from-sprite-sheet#" > Adding a Sprite and Animation </a> </dt>
                        <dd> - after the image is loaded into your scene: 
                        </dd>
                        <dd className="codelet"> 
                          player = this.add.sprite(x, y, preloadkey);
                        </dd>
                        <dd>
                          - Already loaded/created animations can be played by calling the play function on the variable containing the sprite: 
                        </dd>
                        <dd className="codelet">
                            player.play('animationkey') OR this.player.play('animationkey')
                        </dd>
            
                        <dt> From Class extension: </dt>
                        <dd> - For when extending a sprite from a class abstracted out of the main PlayScene.
                        </dd>
                        <dd>
                            - This image is the external file we will call to construct the sprite and then export to the PlayScene.
                            We also add physics to the sprite via "scene.physics.add.existing(this)".
                        </dd>
                        <dd>
                          <img className="codeSnippets" src={extendArcadeSpriteImage} alt="extending arcade sprite 1"/>
                        </dd>
                        <dd>
                          - Calling the external player.js file to construct sprite and then add to PlayScene.
                        </dd>
                        <dd>
                          <img className="codeSnippets" src={extendArcadeSpriteImage2} alt="extending arcade sprite 2"/>
                        </dd>
                        <dd>
                          - Remember to import the images so that they can be used. In this case, the images are imported to the PlayScene.
                          This is also an ARCADE SPRITE. You can also extend a regular sprite. Refer to Photon Storm's documentation
                          to find the exact constructor layouts. 
                        </dd>
                       

                        
                    </dl>

                      
                </div>
            </div>   
    );

}

export default Sprite;