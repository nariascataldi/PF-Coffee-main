import './App.css';
import { Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Route component={NavBar}/>
      <h1>Coffee`s Orders</h1>
    </div>
  );
}

export default App;
