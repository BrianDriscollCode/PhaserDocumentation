import './App.css';
import LeftPane from './components/leftPane';
import RightPane from './components/rightPane';
import CenterPane from './components/centerPane';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


let test1 = 'test2';

function App() {
  return (
    <Router>
        <div className="App">
          

          <section className="App-body">
              
              <Switch>
                  <Route exact path="/introduction">
                      <LeftPane />
                      <CenterPane page="Introduction" />        
                      <RightPane page="Introduction" />
                  </Route>
                  <Route exact path="/"> 
                      <LeftPane />
                      <CenterPane page = "Introduction" />        
                      <RightPane page="Introduction" />
                  </Route>
                  <Route exact path="/basics"> 
                      <LeftPane />
                      <CenterPane page = "Basics" />        
                      <RightPane page = "Basics" />
                  </Route>
                  <Route exact path="/sprite">
                      <LeftPane />
                      <CenterPane page="Sprite" />        
                      <RightPane page="Sprite" />
                  </Route>
                  <Route exact path="/basic_physics">
                      <LeftPane />
                      <CenterPane page="BasicPhysics" />        
                      <RightPane page="BasicPhysics" />
                  </Route>
                  <Route exact path="/extending_classes">
                      <LeftPane />
                      <CenterPane page="ExtendingClasses" />        
                      <RightPane page="ExtendingClasses" />
                  </Route>
                  
                  
              </Switch>
          </section>
        </div>
    </Router>
  );
}

export default App;
