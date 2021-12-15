function CenterPane(props) {

    return (
        <main className="App-information">

                <div id="informationTitle">
                      <h2> App-Information SUBJECT LINE </h2>
                </div>
                
                <div className="content">
                      <p id="tagline"> This is an example of a tagline. This will be the summary 
                        line giving users an explanation of the component, what it is used for 
                        and thoughts on the component. This will make it easy for people to understand
                        whether or not they found the right component.
                      </p>

                      <h3> *SUBJECT TITLE* Syntax </h3>  

                       <img class="codeSnippets" src={props.cursorSyntax} alt="Syntax for adding cursors"/>
                </div>           

            </main>
        
    );
    
}

export default CenterPane;