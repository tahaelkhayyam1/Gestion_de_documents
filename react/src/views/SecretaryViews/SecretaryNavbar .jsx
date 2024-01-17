import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const SecretaryNavbar = ({ userName, onLogout }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Secrétaire Dashboard</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/secretaire/dashboardSecretaire" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                <Link to="/secretaire/gestionDemandes" className="nav-link">Gestion des Demandes</Link>
            </li>
                        {/* Ajoutez d'autres liens ici si nécessaire */}
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

export default SecretaryNavbar;
