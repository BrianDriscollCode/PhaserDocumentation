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
                  <Route exact path="/"> 
                      <LeftPane />
                      <CenterPane page = "Sprite" />        
                      <RightPane />
                  </Route>
                  <Route exact path="/sprite">
                      <LeftPane />
                      <CenterPane page="Sprite" />        
                      <RightPane />
                  </Route>
                  <Route exact path="/BasicPhysics">
                      <LeftPane />
                      <CenterPane page="BasicPhysics" />        
                      <RightPane />
                  </Route>
                  
              </Switch>
          </section>
        </div>
    </Router>
  );
}

export default App;
