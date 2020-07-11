import React from 'react';


const AuthContext= React.createContext({
    logged: false,
    setLogged: null
});


export default AuthContext;