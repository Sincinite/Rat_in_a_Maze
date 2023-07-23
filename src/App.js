import './App.css';
import Solve from './Solve';
import matrix from './matrix';
import Solution from './Solution';
import Header from './Header';
function App(){
  return (
    <div className="App">
      <Header/>
      <div className='inp_comp'>
        <span className='heading'>Initial Matrix</span>
        <Solve mat={matrix}/>
      </div>
      <Solution/>
    </div>
  );
}

export default App;
