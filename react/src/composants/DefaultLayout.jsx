import { Outlet, Navigate, Link } from "react-router-dom";
import { useStateContext } from "../contexts/Context";
import { useEffect } from "react";
import axiosClient from "../axios-client.js";

export default function DefaultLayout() {
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
    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to={`/Document/${user.id}`}>Document</Link>
                <Link to="/users">Users</Link>
                <Link to={`/Requests/${user.id}`}>Requests</Link>


            </aside>
            <div className="content">
                <header>
                    <div>
                        <a>UPFDOC</a>
                    </div>
                    <div>
                        {user.name}
                        <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
