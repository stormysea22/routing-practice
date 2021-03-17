import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home'
import Color from './components/color'
import Number from './components/Number'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Number path="/:id" />
        <Color path="/:word/:color/:bg_color" />
      </Router>
    </div>
  );
}

export default App;
