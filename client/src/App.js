import './App.css';
import { Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Route component={NavBar}/>
      <h1>Coffee`s Orders</h1>
      <Route component={ Footer }/>
    </div>
  );
}

export default App;
