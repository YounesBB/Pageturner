// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState({});
//     return (
//         <AuthContext.Provider value={{ auth, setAuth }}>
//             {children}
//         </AuthContext.Provider>
//     )
// };

// export default AuthContext;

// import React, { useState, createContext } from "react";

// const AuthContext = createContext({
//     isLoggedIn: false,
//     login: () => { },
//     logout: () => { },
// });

// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const loginHandler = (token) => {
//         localStorage.setItem("token", token);
//         setIsLoggedIn(true);
//     };

//     const logoutHandler = () => {
//         localStorage.removeItem("token");
//         setIsLoggedIn(false);
//     };

//     const contextValue = {
//         isLoggedIn: isLoggedIn,
//         login: loginHandler,
//         logout: logoutHandler,
//     };

//     return (
//         <AuthContext.Provider value={contextValue}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthContext;



import React, { useState, createContext } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    login: () => { },
    logout: () => { },
});

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const loginHandler = (token) => {
        if (!token) {
            throw new Error('No token provided');
        }
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        try {
            localStorage.removeItem("token");
            setIsLoggedIn(false);
        } catch (error) {
            console.error(error);
        }
    };

    const contextValue = {
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
