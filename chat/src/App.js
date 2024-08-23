import './App.css';
import Home from './components/component-home/Home';
import Login from './components/component-login/Login';
import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Login />} />
        <Route path='/home' element = {<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
