import  { useEffect } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/Context";
import Navbar from '../views/AdminViews/Navbar.jsx'; // Assurez-vous que le chemin est correct
import axiosClient from "../axios-client.js";

const AdminLayout = () => {
    const { user, token,  setUser, setToken } = useStateContext();

    useEffect(() => {
        // Chargement des informations utilisateur au montage du composant
        if (!user) {
            axiosClient.get('/user')
                .then(({ data }) => {
                    setUser(data);
                });
        }
    }, [user, setUser]);



    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.post('/logout')
            .then(() => {
                setUser({});
                setToken(null);
            });
    };

    // Rediriger vers la page de connexion si aucun token
    if (!token) {
        return <Navigate to="/login" />;
    }

    // Rediriger si l'utilisateur n'est pas un admin


    return (
        <div className="admin-layout">
            <Navbar userName={user?.name} onLogout={onLogout} />

            <aside className="admin-sidebar">
                {/* Contenu de la barre latérale pour l'admin */}
            </aside>

        <main className="admin-content">
                <Outlet />
        </main>
        <footer className="admin-footer">
                {/* Contenu du pied de page */}
            </footer>
        </div>
    );
};

export default AdminLayout;
