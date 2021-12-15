import React from "react";

//Images
import cursorSyntax from '../assets/syntax/create_Cursors1.PNG';

//Content
import Sprites from "./content/sprites";
import BasicPhysics from "./content/basic_physics";
import ExtendingClasses from "./content/extending_classes";
import Introduction from "./content/introduction";
import Basics from "./content/basics";


class CenterPane extends React.Component {

    constructor() {
      super();

      this.state = {page: 'none'}
    }

    render () {

    let currentPage = null;

    if (this.props.page == 'Introduction') {
      currentPage = <Introduction cursorSyntax={cursorSyntax} />
      console.log('Introduction page loaded');
    }
    else if (this.props.page == 'Basics') {
      currentPage = <Basics cursorSyntax={cursorSyntax} />
      console.log('sprite page loaded');
    }
    else if (this.props.page == 'Sprite') {
      currentPage = <Sprites cursorSyntax={cursorSyntax} />
      console.log('sprite page loaded');
    } else if (this.props.page == 'BasicPhysics') {
      currentPage = <BasicPhysics cursorSyntax={cursorSyntax} />
      console.log('Basic Physics page loaded');
    } else if (this.props.page == 'ExtendingClasses') {
      console.log('extending Page loaded');
      currentPage = <ExtendingClasses cursorSyntax={cursorSyntax}/>
      
    }
    else {
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