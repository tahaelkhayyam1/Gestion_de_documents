import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Requests() {
    const [documents, setDocuments] = useState([]);
 













    




 
    useEffect(() => {
        axios.get('http://localhost:8000/api/Document_Requested')
            .then(response => {
                setDocuments(response.data);
            })
            .catch(error => {
                console.error('Error fetching documents', error);
            });
    }, []);
    





    const handleValidate = (docId) => {
      // Make an API request to update the document status to 'validé'
      axios.put(`http://localhost:8000/api/document-requests/${docId}/validate`, { status: 'validé' })
          .then(response => {
              // Update the state to reflect the change
              setDocuments(prevDocuments => {
                  const updatedDocuments = prevDocuments.map(doc => {
                      if (doc.id === docId) {
                          doc.status = 'accepted';
                      }
                      return doc;
                  });
                  return updatedDocuments;
              });
              window.location.reload();
            })
          .catch(error => {
              console.error('Error validating document', error);
          });
  };

    const handleReject = (docId) => {
      // Make an API request to update the document status to 'validé'
      axios.put(`http://localhost:8000/api/document-requests/${docId}/reject`, { status: 'rejected' })
          .then(response => {
              // Update the state to reflect the change
              setDocuments(prevDocuments => {
                  const updatedDocuments = prevDocuments.map(doc => {
                      if (doc.id === docId) {
                          doc.status = 'rejected';
                      }
                      return doc;
                  });
                  return updatedDocuments;
              });
            
              window.location.reload();

          })
          .catch(error => {
              console.error('Error rejected document', error);
          });
        };




 




    return (
        <div className="container">
        <div className="row">
         
         {documents.map(doc => (
                          
                            <div className="col-lg-4" key={doc.id}>
                          <div className="card card-margin">
        <div className="card-header no-border">
          <h5 className="card-title">{doc.user.name}</h5>
        </div>
        <div className="card-body pt-0">
          <div className="widget-49">
            <div className="widget-49-title-wrapper">
              <div className="widget-49-date-primary">
                <span className="widget-49-date-day">  {new Date(doc.created_at).getDate()}</span>
                <span className="widget-4-date-month">  {new Date(doc.created_at).toLocaleString('default', { month: 'long' })}</span>



              </div>
              <div className="widget-49-meeting-info">
                <span className="widget-49-pro-title">{doc.document.document_name}</span>
                <span className="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                <span className="widget-49-meeting-time">{doc.user.role}</span>
                <span className="widget-49-meeting-time">{doc.user.id}</span>
              </div>

              
            </div>
            <div className="mt-5">


            <div className="progress progress-sm">
                      <div className="progress-bar bg-green" role="progressbar" aria-valuenow={doc.user.paiement_status} aria-valuemin={0} aria-valuemax={100} style={{ width: `${doc.user.paiement_status}%` }}>
                      </div>
                    </div>
                    <small>
                      {doc.user.paiement_status}% payed
                    </small>







</div>

<ul className="widget-49-meeting-points">
                                <button onClick={() => handleValidate(doc.id)} className="btn btn-primary">Valider</button>
                                <button onClick={() => handleReject(doc.id)} className="btn btn-danger">Refuser</button>
                            </ul>
          </div>
        </div>
      </div>
    
                        </div>
                    ))}
                     </div>

       ,
       <style dangerouslySetInnerHTML={{__html: "\nbody{\n    background: #F4F7FD;\n    margin-top:20px;\n}\n\n.card-margin {\n    margin-bottom: 1.875rem;\n}\n\n.card {\n    border: 0;\n    box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);\n    -webkit-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);\n    -moz-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);\n    -ms-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);\n}\n.card {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    word-wrap: break-word;\n    background-color: #ffffff;\n    background-clip: border-box;\n    border: 1px solid #e6e4e9;\n    border-radius: 8px;\n}\n\n.card .card-header.no-border {\n    border: 0;\n}\n.card .card-header {\n    background: none;\n    padding: 0 0.9375rem;\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    min-height: 50px;\n}\n.card-header:first-child {\n    border-radius: calc(8px - 1px) calc(8px - 1px) 0 0;\n}\n\n.widget-49 .widget-49-title-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-primary {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #edf1fc;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-primary .widget-49-date-day {\n  color: #4e73e5;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-primary .widget-49-date-month {\n  color: #4e73e5;\n  line-height: 1;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-secondary {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #fcfcfd;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-secondary .widget-49-date-day {\n  color: #dde1e9;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-secondary .widget-49-date-month {\n  color: #dde1e9;\n  line-height: 1;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-success {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #e8faf8;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-success .widget-49-date-day {\n  color: #17d1bd;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-success .widget-49-date-month {\n  color: #17d1bd;\n  line-height: 1;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-info {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #ebf7ff;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-info .widget-49-date-day {\n  color: #36afff;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-info .widget-49-date-month {\n  color: #36afff;\n  line-height: 1;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-warning {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: floralwhite;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-warning .widget-49-date-day {\n  color: #FFC868;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-warning .widget-49-date-month {\n  color: #FFC868;\n  line-height: 1;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-danger {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #feeeef;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-danger .widget-49-date-day {\n  color: #F95062;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-danger .widget-49-date-month {\n  color: #F95062;\n  line-height: 1;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-light {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #fefeff;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-light .widget-49-date-day {\n  color: #f7f9fa;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-light .widget-49-date-month {\n  color: #f7f9fa;\n  line-height: 1;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-dark {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #ebedee;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-dark .widget-49-date-day {\n  color: #394856;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-dark .widget-49-date-month {\n  color: #394856;\n  line-height: 1;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-base {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #f0fafb;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-base .widget-49-date-day {\n  color: #68CBD7;\n  font-weight: 500;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-date-base .widget-49-date-month {\n  color: #68CBD7;\n  line-height: 1;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-meeting-info {\n  display: flex;\n  flex-direction: column;\n  margin-left: 1rem;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-meeting-info .widget-49-pro-title {\n  color: #3c4142;\n  font-size: 14px;\n}\n\n.widget-49 .widget-49-title-wrapper .widget-49-meeting-info .widget-49-meeting-time {\n  color: #B1BAC5;\n  font-size: 13px;\n}\n\n.widget-49 .widget-49-meeting-points {\n  font-weight: 400;\n  font-size: 13px;\n  margin-top: .5rem;\n}\n\n.widget-49 .widget-49-meeting-points .widget-49-meeting-item {\n  display: list-item;\n  color: #727686;\n}\n\n.widget-49 .widget-49-meeting-points .widget-49-meeting-item span {\n  margin-left: .5rem;\n}\n\n.widget-49 .widget-49-meeting-action {\n  text-align: right;\n}\n\n.widget-49 .widget-49-meeting-action a {\n  text-transform: uppercase;\n}    " }} />

        </div>
    );
}

export default Requests;
