import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    role: null, // Ajouter cette ligne
    setUser: () => {},
    setToken: () => {},
    setRole: () => {}, // Ajouter cette ligne
});
// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [role, setRole] = useState(null);
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    const setToken = (newToken) => {
        _setToken(newToken);
        if (newToken) {
            localStorage.setItem('ACCESS_TOKEN', newToken);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    return (
        <StateContext.Provider value={{
            user,
            token,
            role, // Ajoutez le rôle ici
            setUser,
            setToken,
            setRole // Ajoutez la fonction pour définir le rôle
        }}>
            {children}
        </StateContext.Provider>
    );
};
export const useStateContext = () => useContext(StateContext);
