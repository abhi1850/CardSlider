import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Slider/>} />
        </Routes>  
      </Router>     
    </div>
  );
}

export default App;
