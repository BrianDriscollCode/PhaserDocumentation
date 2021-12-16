import React from "react";
import BasicPhysics from "./content/basic_physics";
import BasicPhysicsHeader from "./headers/basic_physics_header";
import IntroductionHeaders from "./headers/introduction_header";
import SpriteHeader from "./headers/sprites_header";


class RightPane extends React.Component {
    constructor() {
        super();
    }

    render() {

        let currentPage = null;

    if (this.props.page == 'Introduction') {
      currentPage = <IntroductionHeaders />
      console.log('Introduction headers loaded');
    }
    else if (this.props.page == 'BasicPhysics') {
      currentPage = <BasicPhysicsHeader />
      console.log('basic physics headers loaded');
      console.log(this.props.page);
    } else if (this.props.page == 'Sprite') {
        currentPage = <SpriteHeader />
      console.log('basic physics headers loaded');
      console.log(this.props.page);

    } else {
        console.log('fail');
    }


        return (
            <section className="App-headers"> 
                
                {currentPage}
                
    
              </section>
        );
    }    
    
    
}

export default RightPane;
