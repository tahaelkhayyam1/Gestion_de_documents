import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';

function Document() {
    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();


    const { id } = useParams();



    useEffect(() => {
        axios.get('http://localhost:8000/api/documents')
            .then(response => {
                setDocuments(response.data);
            })
            .catch(error => {
                console.error('Error fetching documents', error);
            });
    }, []);

    const handleDocumentRequest = (documentId) => {
        axios.post('http://localhost:8000/api/document_request', {
            user_id: id,
            document_id: documentId,
            // You can also send other necessary fields like status, created_at, etc., if required
        })
            .then(response => {
                console.log('Document request submitted', response);
                navigate(`/Requests/${id}`);

            })
            .catch(error => {
                console.error('Error submitting document request', error);
                // Handle errors (e.g., show an error message to the user)
            });
    };

    return (

        <div className="main-content">
            <div className="container">
                <div className="row">
                    {documents.map(doc => (

                        <div className="col-sm-6 col-md-4 col-lg-4" key={doc.id}>
                            <div className="food-card food-card--vertical">
                                <div className="food-card_img">


                                </div>
                                <div className="food-card_content">
                                    <div className="food-card_title-section">
                                        <span className="food-card_title">{doc.document_name}</span>
                                        {doc.requirevalidation && (
                                            <h6 className="text-danger">Requires Validation</h6>
                                        )}
                                    </div>
                                    <div className="food-card_bottom-section">
                                        <hr />
                                        {doc.requirevalidation ? (
                                            <a href='#' onClick={() => handleDocumentRequest(doc.id)} className="btn btn-secondary">Request</a>
                                        ) : (
                                             <a target="_blank" href={`/docs/${doc.print_path}${id}`} className="btn btn-secondary">Imprimer</a>

                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                body {
                    background: #f9f9f9;
                    font-family: "roboto", sans-serif;
                }
                .main-content {
                    padding-top: 100px;
                    padding-bottom: 100px;
                }
                a {
                    text-decoration: none;
                }
                .food-card {
                    background: #fff;
                    border-radius: 5px;
                    overflow: hidden;
                    margin-bottom: 30px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
                    transition: 0.1s;
                }
                .food-card .food-card_content {
                    padding: 15px;
                }
                .food-card .food-card_content .food-card_title-section {
                    height: 100px;
                    overflow: hidden;
                }
                .food-card .food-card_content .food-card_title-section .food-card_title {
                    font-size: 24px;
                    color: #333;
                    font-weight: 500;
                    line-height: 1.3;
                    margin-bottom: 8px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .food-card .food-card_content .food-card_bottom-section .space-between {
                    display: flex;
                    justify-content: space-between;
                }
                @media (min-width: 992px) {
                    .food-card--vertical {
                        display: flex;
                        position: relative;
                    }
                    .food-card--vertical .food-card_img img {
                        width: 200px;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            ` }} />
        </div>
    );
}

export default Document;
