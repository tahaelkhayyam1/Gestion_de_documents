import { useState, useEffect } from 'react';


import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const EtudiantList = () => {
  const [etudiants, setEtudiants] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchEtudiants = async () => {
      try {
        const result = await axios('http://localhost:8000/api/etudiants');
        setEtudiants(result.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des étudiants:", error);
      }
    };


    fetchEtudiants();
  }, []);

  const handleAddStudentClick = () => {
    navigate('/admin/ajouterEtd');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await axios.delete(`http://localhost:8000/api/etudiants/${id}`);
        navigate('/admin/ListeEtudiants'); // Utiliser navigate ici




        console.log('Student successfully deleted');
        window.location.reload();
      } catch (error) {
        console.error("Error during deletion:", error.response);
      }
    }
  };








  return (


    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />

      <div className="col-12 mb-3">
        <h2>Liste des Etudiants</h2>
        <button className="btn btn-primary btn-sm" onClick={handleAddStudentClick}>
          <i className="fas fa-plus"></i> Ajouter Etudiant
        </button>
      </div>




      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <table className="table table-striped projects">
            <thead>
              <tr>
                <th style={{ width: '1%' }}>
                  #
                </th>
                <th style={{ width: '10%' }}>
                  image
                </th>
                <th style={{ width: '10%' }}>
                  Cin
                </th>
                <th style={{ width: '20%' }}>
                  Name
                </th>
                <th>
                  paiement status
                </th>
                <th>
                  Formation
                </th>
                <th style={{ width: '20%' }}>
                </th>
              </tr>
            </thead>
            <tbody>
              {etudiants.map(etudiant => (










                <tr key={etudiant.id}>
                  <td>
                    {etudiant.id}
                  </td>
                  <td>


                  </td>
                  <td>
                    {etudiant.cin}
                  </td>
                  <td>
                    <a>
                      {etudiant.name} {etudiant.surname}
                    </a>
                    <br />
                    <small>
                      {etudiant.datedenaissance}
                    </small>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-green" role="progressbar" aria-valuenow={etudiant.paiement_status} aria-valuemin={0} aria-valuemax={100} style={{ width: `${etudiant.paiement_status}%` }}>
                      </div>
                    </div>
                    <small>
                      {etudiant.paiement_status}% Complete




                    </small>
                  </td>
                  <td>
                    <a>
                      {etudiant.filliere}
                    </a>
                    <br />
                    <small>
                      {etudiant.annee} ème année
                    </small>
                  </td>
                  <td className="project-actions text-right">


                    <a className="btn btn-primary btn-sm" href={`ViewEtudiant/${etudiant.id}`}>
                      <i className="fas fa-folder"></i> View
                    </a>


                    <a className="btn btn-info btn-sm" href={`Modifieretd/${etudiant.id}`}>
                      <i className="fas fa-pencil-alt"></i> Edit
                    </a>


                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(etudiant.id)}>
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </td>
                </tr>




              )






              )}














            </tbody>
          </table>
        </div>
      </div>
    </div>
  );


};


export default EtudiantList;



