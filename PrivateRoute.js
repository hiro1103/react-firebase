import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from './AuthContext';
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useAuthContext();
    return user ? (
        <Route {...rest} component={Component} />
    ) : (
        <Redirect to="/login" />
    );
};

export default PrivateRoute;