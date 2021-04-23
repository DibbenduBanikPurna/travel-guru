import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { signContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser,setLoggedInUser]=useContext(signContext)
    return (
        
                <Route
      {...rest}
      render={({ location }) =>
        (loggedInUser.email || sessionStorage.getItem('email')) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        
    );
};

export default PrivateRoute;