import React from "react";
import Sprites from "./content/sprites";
import BasicPhysics from "./content/basic_physics";
import cursorSyntax from '../assets/syntax/create_Cursors1.PNG';



class CenterPane extends React.Component {

    constructor() {
      super();

      this.state = {page: 'none'}
    }

    render () {

    let currentPage = null;

    if (this.props.page == 'Sprite') {
      currentPage = <Sprites cursorSyntax={cursorSyntax} />
      console.log('sprite page loaded');
    } else if (this.props.page == 'BasicPhysics') {
      currentPage = <BasicPhysics cursorSyntax={cursorSyntax} />
      console.log('Basic Physics page loaded');
    } else {
      currentPage = <Sprites cursorSyntax={cursorSyntax} />
      console.log('sprite page loaded becaus of else');
      console.log(this.props.page);
    }
      
      return (
        <main className="App-information">

          {currentPage}
          
        </main>
      );
    }

    
    
}

export default CenterPane;