import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/Context';
import  { useEffect } from 'react';
import SecretaryNavbar from '../views/SecretaryViews/SecretaryNavbar .jsx';
import axiosClient from "../axios-client.js";

const SecretaireLayout = () => {
    const { user, token, setUser, setToken ,role} = useStateContext();

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
    if (!token) {
        return <Navigate to="/login" />;
    }

    if (role != 'secretaire') {
        return <Navigate to="/secretaire/dashboardSecretaire"/>;
}

    return (
        <div className="secretaire-layout">
            <SecretaryNavbar userName={user?.name} onLogout={onLogout} />
            <main className="secretaire-content">
                <Outlet />
            </main>
            {/* Pied de page si nécessaire */}
        </div>
    );
};

export default SecretaireLayout;


