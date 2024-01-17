 import { Outlet, Navigate, Link } from "react-router-dom";
import { useStateContext } from "../contexts/Context";
import { useEffect } from "react";
import axiosClient from "../axios-client.js";
export default function EmplyLayout(){
    const { user, token,role, setUser, setToken } = useStateContext();

    useEffect(() => {
        // Chargement des informations utilisateur au montage du composant
        axiosClient.get('/user')
            .then(({ data }) => {
                setUser(data);
            });
    }, [setUser]);

    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.post('/logout')
            .then(() => {
                setUser({});
                setToken(null);
            });
    };

    if (!token) {
        return <Navigate to="/login" />;
    }

    // Rediriger si l'utilisateur n'est pas un utilisateur général (ni secrétaire, ni admin)
    if (role === 'secretaire' || role === 'admin') {
        return <Navigate to={`/${role}/dashboard`} />;
    }

    return(

        <div>
            <Outlet/>
        </div>

    )
}
