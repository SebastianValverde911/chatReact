import './App.css';
import Login from './components/component-login/Login';
import RegistryUser from './components/component-registry/RegistryUser';
import {Route,Routes} from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { UserRoutes } from './components/UserRoutes/UserRoutes';
import { PrivateRoutes } from './components/PrivateRouters/PrivateRoutes';

function App() {
  return (
    
    <Routes>
      <Route path='/' element = {<Login />} />
      <Route path='/registry-user' element = {<RegistryUser />} />
      <Route path='/*' element={
        <PrivateRoutes>
          <UserRoutes />
        </PrivateRoutes>
      }/>
    </Routes>
    
  );
}

export default App;
