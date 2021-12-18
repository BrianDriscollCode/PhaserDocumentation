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

                      <h2 id="WaysToCreateASprite"> Ways to Create Sprites </h2>


                      <div className="entry">
                        <dl> 
                        <dt> <a href="https://phaser.io/examples/v3/view/animation/create-animation-from-sprite-sheet#" > Adding a Sprite and Animation </a> </dt>
                          <dd> - after the image is loaded into your scene: 
                          </dd>
                          <dd className="codelet"> 
                            player = this.add.sprite(x, y, preloadkey)
                          </dd>
                          <dd>
                            - Already loaded/created animations can be played by calling the play function on the variable containing the sprite: 
                          </dd>
                          <dd className="codelet">
                              player.play('animationkey') OR this.player.play('animationkey')
                          </dd>
                          </dl>

                      </div>
                      
                      <div className="entry">
                        <dl>
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
                              This is an ARCADE SPRITE. You can also extend a regular sprite. Refer to Photon Storm's documentation
                              to find the exact constructor layouts. 
                            </dd>                       
                        </dl>

                      </div>
                      

                    <h2 class="afterFirstTitle" id="Collisions"> Collisions  </h2>

                    <p id="tagline">
                      Collisions are how objects can interact with each other through contact. The examples are related to the instantiation PHASER.PHYSICS.ARCADE (ARCADE Physics), not MATTER physics.
                    </p>


                    <div className="entry">
                      <dl> 
                        <dt> Collider  </dt>
                          <dd> - Check for 2 objects to collide with each other: 
                          </dd>
                          <dd className="codelet"> 
                            this.physics.add.collider(object1, object2)
                          </dd>
                          <dd>
                            - Collider with callback:
                          </dd>
                          <dd className="codelet">
                              this.physics.add.collider(object1, object2, () =&gt; &#123; CALLBACK &#125;)
                          </dd>
                          <dd>
                            - Check for overlap (with or without callback)
                          </dd>
                          <dd className="codelet">
                              this.physics.add.overlap(object1, object2, () =&gt; &#123; CALLBACK &#125;)
                          </dd>
                          <dd id="text" className="lineBottomSpace">
                            **WARNING: use both function() and arrow functions if you are having errors to see which one works.
                          </dd>
                        </dl>
                      </div>

                    <div className="entry">
                      <dl>
                          <dt> Set Collision Box Size </dt>
                          <dd> - set size:
                          </dd>
                          <dd className="codelet">
                            this.player.body.setSize(NUMBER);
                          </dd>
                          <dd> - offset the original position of the collision box:
                          </dd>
                          <dd className="codelet">
                            this.player.body.setOffSet(NUMBER);
                          </dd>
                      </dl>
                    </div>


                </div>
            </div>   
    );

}

export default Sprite;