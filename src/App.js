import './App.css';
import cursorSyntax from './assets/syntax/create_Cursors1.PNG';
import LeftPane from './components/leftPane';
import RightPane from './components/rightPane';
import CenterPane from './components/centerPane';

let test1 = 'test2';

function App() {
  return (
    <div className="App">
      

      <section className="App-body">
          
          <LeftPane />
          
          <CenterPane cursorSyntax={cursorSyntax} />        
            

          <RightPane />



      </section>
    </div>
  );
}

export default App;
