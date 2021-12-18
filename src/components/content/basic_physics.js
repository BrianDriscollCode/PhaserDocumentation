import React from 'react';


function BasicPhysics(props) {

    return (
        <div id="informationTitle">
                      <h2> Basic Physics </h2>
                

                <div className="content">
                <p id="tagline"> This page is related to the basics of arcade physics. If physics
                      requirements are high, then using matter.js physics may be more recommended.
                      </p>

                      <div className="entry">
                        <h3> Bounce and Velocity </h3>  

                          <dl>
                            <dt> Set Bounce</dt>
                            <dd> - Set Bounce useful range(0.01 - 1.00). X is necessary, Y is optional:</dd>
                            <dd className="codelet"> this.player.setBounce(x, y) </dd>
                            
                            <dt> Set Velocity</dt>
                            <dd> - Set velocity (useful range: 1-1000). Y optional in first version:</dd>
                            <dd className="codelet"> this.player.setVelocity(x, y) //version 1</dd>
                            <dd className="codelet"> this.player.setVelocityX(x) //version 2</dd>
                            <dd className="codelet"> this.player.setVelocityY(y) //version 3</dd>
                          </dl>

                      </div>
                      

                      <div className="entry">
                      <h3> Flip (true or false) </h3> 

                          <dl>
                          <dt> Flip Sprite/image</dt>
                            <dd> - Flip sprite or image horizontally (x) or vertically (y) and takes boolean (true or false):</dd>
                            <dd className="codelet"> this.player.flipX(boolean) //version 1</dd>
                            <dd className="codelet"> this.player.flipY(boolean) //version 2</dd>
                          </dl>

                      </div>
                        

                      <h3> *SUBJECT TITLE* Syntax </h3>  

                       <img className="codeSnippets" src={props.cursorSyntax} alt="Syntax for adding cursors"/>
                
                       <p id="tagline"> This is an example of a tagline. This will be the summary 
                        line giving users an explanation of the component, what it is used for 
                        and thoughts on the component. This will make it easy for people to understand
                        whether or not they found the right component.
                      </p>
                      <p id="tagline"> This is an example of a tagline. This will be the summary 
                        line giving users an explanation of the component, what it is used for 
                        and thoughts on the component. This will make it easy for people to understand
                        whether or not they found the right component.
                      </p>

                      <h3 id="setConfigGravity"> Set Config Gravity </h3> 
                </div>
            </div>   
    );

}

export default BasicPhysics;