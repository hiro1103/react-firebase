import SignUp from "./SingUp";
import { AuthProvider } from "./AuthContext";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from './PrivateRoute';
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <BrowserRouter>
          <PrivateRoute exact path="/" component={Home} />
          <PublicRoute path="/signup" component={SignUp} />
          <PublicRoute path="/login" component={Login} />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}
export default App;
