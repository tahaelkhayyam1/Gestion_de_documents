import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ListeSecretaires = () => {
  const [secretaires, setSecretaires] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSecretaires = async () => {
      try {
        const result = await axios('http://localhost:8000/api/secretaires');
        setSecretaires(result.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des secretaires:", error);
      }
    };

    fetchSecretaires();
  }, []);

  const handleAddStudentClick = () => {
    navigate('/admin/AjouterSec');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this secretaire?')) {
      try {
        await axios.delete(`http://localhost:8000/api/secretaires/${id}`);
        navigate('/admin/ListeSecretaires');
        console.log('Secrétaire successfully deleted');
      } catch (error) {
        console.error("Error during deletion:", error.response);
      }
    }
  };

  if (!secretaires) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Liste des Secrétaires</h2>
        <button className="btn btn-primary btn-sm" onClick={handleAddStudentClick}>
          <i className="fas fa-plus"></i> Ajouter Secrétaire
          </button>
      </div>

      <table className="table table-striped projects">
        <thead>
          <tr>
            <th style={{ width: '1%' }}>#</th>
            <th style={{ width: '10%' }}>Cin</th>
            <th style={{ width: '20%' }}>Nom Complet</th>
            <th style={{ width: '20%' }}>Mobile Number</th>
            <th style={{ width: '20%' }}>Email</th>
            <th style={{ width: '20%' }}>Adresse</th>
            <th style={{ width: '20%' }}></th>
          </tr>
        </thead>
        <tbody>
          {secretaires.map(secretaire => (
            <tr key={secretaire.id}>
              <td>{secretaire.id}</td>
              <td>{secretaire.cin}</td>
              <td>{secretaire.name} {secretaire.surname}</td>
              <td>{secretaire.mobile_number}</td>
              <td>{secretaire.email}</td>
              <td>{secretaire.address_line1}</td>
              <td className="project-actions text-right">
                <a className="btn btn-primary btn-sm" href={`ViewSecretaires/${secretaire.id}`}>
                  <i className="fas fa-folder"></i> View
                </a>
                <a className="btn btn-info btn-sm" href={`ModifierSec/${secretaire.id}`}>
                  <i className="fas fa-pencil-alt"></i> Edit
                </a>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(secretaire.id)}>
                  <i className="fas fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListeSecretaires;
