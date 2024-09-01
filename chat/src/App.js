import './App.css';
import Home from './components/component-home/Home';
import Login from './components/component-login/Login';
import RegistryUser from './components/component-registry/RegistryUser';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Login />} />
        <Route path='/home' element = {<Home />} />
        <Route path='/registry-user' element = {<RegistryUser />} />
      </Routes>
    </Router>
  );
}

export default App;
