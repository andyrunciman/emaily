import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthenticatedRoute = ({ auth, path, component: Component, ...rest }) => {
    //console.log("Rendering authroute auth =", auth);
    //In this app a auth status of null means that we 
    //have not yet got a response from the server so 
    //we can wait
    if (auth === null) {
        return <h1>Please wait...</h1>
    }
    return <Route {...rest} render={
        props => auth ? <Component {...props} /> : <Redirect to='/dashboard' />
    } />
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(AuthenticatedRoute);




