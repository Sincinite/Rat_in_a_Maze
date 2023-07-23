import './App.css';
import Solve from './Solve';
import matrix from './matrix';
import Solution from './Solution';
import Header from './Header';
function App(){
  let temp;
  temp=structuredClone(matrix);
  temp[0][0]=3;
  temp[matrix.length-1][matrix[0].length-1]=4;
  return (
    <div className="App">
      <Header/>
      <div className='inp_comp'>
        <span className='heading'>Initial Matrix</span>
        <Solve mat={temp}/>
      </div>
      <Solution/>
    </div>
  );
}

export default App;
