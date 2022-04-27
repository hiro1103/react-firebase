import Home from './components/Home';
import SignUp from './components/SingUp';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <BrowserRouter>
          <PrivateRoute exact path="/" component={Home} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signup" component={SignUp} />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;