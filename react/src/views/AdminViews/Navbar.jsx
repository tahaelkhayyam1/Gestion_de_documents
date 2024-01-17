import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Navbar = ({ userName , onLogout  }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Admin Dashboard</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/admin/dashboardAdmin" className="nav-link active" aria-current="page">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/admin/ListeEtudiants" className="nav-link">Etudiants</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/admin/ListeSecretaires" className="nav-link">Secretaire</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/admin/Document_Requested" className="nav-link">Current Requests</Link>
                        </li>
                    </ul>
                    <div className="navbar-text">
                        Bienvenue, {userName}
                        <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
