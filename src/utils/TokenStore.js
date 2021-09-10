import React, { createContext, useReducer, useState } from "react";

const initialState = {
    token: null,
};

export const TokenStore = createContext();

const Store = ({ children }) => {
    const [token, setToken] = useState(initialState);
    return (
        <TokenStore.Provider value={[token, setToken]}>
            {children}
        </TokenStore.Provider>
    )
};

export default Store;