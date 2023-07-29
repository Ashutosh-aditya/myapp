import logo from './logo.svg';
// import './App.css';
import FunctionComponent from './Components/FunctionalComponents';
import ClassComp2 from './Components/ClassComp'; //default exporting names can be different eg.
import Fc from './Components/FunctionalComponents';
import Cc from './Components/ClassComp'; //named exporting can't have different names eg.

// named import
import {ClassComp,ClassComp1} from './Components/ClassComp'

function App() {
  return (
    // <div className="App">
    <div>
      <h1>Hello React app</h1>
      <FunctionComponent/>
      <ClassComp />
      <Fc />
      <Cc />
      <h2>Named exports</h2>
      <ClassComp1 />
      <ClassComp />
    </div>
  );
}

export default App;
