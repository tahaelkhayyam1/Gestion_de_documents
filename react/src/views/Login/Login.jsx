import  { useRef, useState } from 'react';
import axiosClient from '../../axios-client.js';
import { useStateContext } from '../../contexts/Context.jsx';
import '../Login/LoginCSS/Login.css';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState(null);
    const { setUser, setToken,setRole } = useStateContext();
    const [isAdmin, setIsAdmin] = useState(true);
    const navigate = useNavigate();

    // Fonction pour gérer le clic sur le bouton Admin
    const handleAdminClick = () => {
        setIsAdmin(true);
    };

    // Fonction pour gérer le clic sur le bouton Étudiant
    const handleStudentClick = () => {
        setIsAdmin(false);
    };

    // Fonction appelée lors de la soumission du formulaire
    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            job: isAdmin ? 'Admin' : 'Student',
        };

        // Envoi de la requête au serveur pour la connexion
        axiosClient.post('/login', payload)
    .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
        setRole(data.role); // Stockage du rôle dans le contexte
        setRole(data.user.role);
        // Redirection en fonction du rôle
        switch (data.role) {
            case 'secretaire':
                navigate('/secretaire/dashboardSecretaire');
                break;
            case 'student':
                navigate(`/Document/${user.id}`);
                break;
            case 'admin':
                navigate('/admin/dashboardAdmin'); // Remplacez par la route de dashboard de l'admin
                break;
            default:
                navigate('/'); // Redirection par défaut
                break;
        }
    })
        .catch((err) => {
            // Gestion des erreurs de validation du formulaire
            const response = err.response;
            if (response && response.status === 422) {
                setErrors(response.data.errors || { email: [response.data.message] });
            } else {
                setErrors({ email: ["Une erreur de serveur s'est produite. Veuillez réessayer."] });
            }
        });
};

    return (
        <div className={`containers ${isAdmin ? 'active' : ''}`}>
            {isAdmin ? (
                // Partie "Admin"
                <div className="form-container sign-up">
                    <form onSubmit={onSubmit}>
                        {/* Titre dynamique en fonction du rôle sélectionné */}
                        <h2>{isAdmin ? 'Directeur/Secrétaire' : 'wha'}</h2>

                        {/* Sélection du rôle */}
                        <select name="job">
                    
                            <option value="Secretaire">Secrétaire</option>
                            <option value="Admin">Admin</option>
                        </select>

                        {errors && (
                            // Affichage des erreurs de validation du formulaire
                            <div className="alert">
                                {Object.keys(errors).map((key) => (
                                    <p key={key}>{errors[key][0]}</p>
                                ))}
                            </div>
                        )}
                        {/* Champ de saisie pour l'email */}
                        <input ref={emailRef} type="email" placeholder="Email" />
                        {/* Champ de saisie pour le mot de passe */}
                        <input ref={passwordRef} type="password" placeholder="Password" />
                        {/* Bouton de soumission du formulaire */}
                        <button type="submit">Login</button>
                    </form>
                </div>
            ) : (
                // Partie "Étudiant"
                <div className="form-container sign-in">
                    <form onSubmit={onSubmit}>
                        {/* Lien vers la création d'un compte */}
                        { <Link to="/signup">Create an account</Link> }

                        {/* Titre pour la partie "Étudiant" */}
                        <h1>Étudiant</h1>
                        {errors && (
                            // Affichage des erreurs de validation du formulaire
                            <div className="alert">
                                {Object.keys(errors).map((key) => (
                                    <p key={key}>{errors[key][0]}</p>
                                ))}
                            </div>
                        )}
                        {/* Champ de saisie pour l'email */}
                        <input ref={emailRef} type="email" placeholder="Email" />
                        {/* Champ de saisie pour le mot de passe */}
                        <input ref={passwordRef} type="password" placeholder="Password" />
                        {/* Lien pour oublier le mot de passe */}
                        <a href="#">Forget Your Password?</a>
                        {/* Bouton de soumission du formulaire */}
                        <button type="submit">Login</button>
                    </form>
                </div>
            )}
            {/* Panneau de basculement entre les rôles */}
            <div className="toggle-container">
                <div className="toggle">
                    {/* Panneau gauche pour Étudiant */}
                    <div className="toggle-panel toggle-left">
                        <h1>Vous nêtes pas un Admin ?</h1>
                        <p>Se connecter en tant quétudiant</p>
                        <button className="hidden" onClick={handleStudentClick}>
                            Étudiant
                        </button>
                    </div>
                    {/* Panneau droit pour Admin */}
                    <div className="toggle-panel toggle-right">
                        <h1>Vous êtes un Admin ?</h1>
                        <p>Se connecter en tant quétudiant</p>
                        <button className="hidden" onClick={handleAdminClick}>
                            Admin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
