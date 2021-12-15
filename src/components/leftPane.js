import { Link } from 'react-router-dom';


function LeftPane() {

    return (
        <section className="App-subjects"> 
          
                  <header className="App-header">
                        <h1> Phaser Documentation </h1>
                  </header>

                  
                  <div id="subjectTitle">
                        <h3> App-Subjects LINES</h3>

                        <ul className="subectLinks">
                            <li><Link to="/sprite"> Sprite </Link></li>
                            <li><Link to="/BasicPhysics"> basic physics </Link></li>
                            <li><a href="#"> extending classes </a></li>
                            <li><a href="#"> gravity</a></li>
                            <li><a href="#"> cursors</a></li>
                            <li><a href="#"> music </a></li>
                            <li><a href="#"> sound </a></li>
                            <li><a href="#">  </a></li>
                        </ul>
                  </div>
            
                  
            </section>
    );
    
}

export default LeftPane;
