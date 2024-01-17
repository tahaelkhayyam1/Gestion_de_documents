import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const ViewSecretaires = () => {
  const [secretaire, setSecretaires] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchsecretaireDetails = async () => {
      try {
        const result = await axios(`http://localhost:8000/api/secretaires/${id}`);
        setSecretaires(result.data);
      } catch (error) {
        console.error("Error fetching secretaire details:", error);
      }
    };

    fetchsecretaireDetails();
  }, [id]);

  if (!secretaire) {
    return <div>Loading...</div>;
  }

  return (


    <div>


      <div className="page-content page-container" id="page-content">


        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      {/* <div class="m-b-25">
                    <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image">
                     </div> */}
                      <h6 className="f-w-600">{secretaire.name} {secretaire.surname}</h6>
                    
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Cin</p>
                          <h6 className="text-muted f-w-400">{secretaire.cin}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">{secretaire.email}</h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Date de Naissance</p>
                          <h6 className="text-muted f-w-400">{secretaire.datedenaissance}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Phone</p>
                          <h6 className="text-muted f-w-400">{secretaire.mobile_number}</h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Addresse 1</p>
                          <h6 className="text-muted f-w-400">{secretaire.address_line1}</h6>
                        </div>

                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Country</p>
                          <h6 className="text-muted f-w-400">{secretaire.Country}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Region</p>
                          <h6 className="text-muted f-w-400">{secretaire.Region}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: "\n      body {\n        background-color: #f9f9fa\n    }\n\n    .padding {\n        padding: 3rem !important\n    }\n\n    .user-card-full {\n        overflow: hidden;\n    }\n\n    .card {\n        border-radius: 5px;\n        -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);\n        box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);\n        border: none;\n        margin-bottom: 30px;\n    }\n\n    .m-r-0 {\n        margin-right: 0px;\n    }\n\n    .m-l-0 {\n        margin-left: 0px;\n    }\n\n    .user-card-full .user-profile {\n        border-radius: 5px 0 0 5px;\n    }\n\n    .bg-c-lite-green {\n        background: -webkit-gradient(linear, left top, right top, from(#f29263), to(#ee5a6f));\n        background: linear-gradient(to right, #ee5a6f, #f29263);\n    }\n\n    .user-profile {\n        padding: 20px 0;\n    }\n\n    .card-block {\n        padding: 1.25rem;\n    }\n\n    .m-b-25 {\n        margin-bottom: 25px;\n    }\n\n    .img-radius {\n        border-radius: 5px;\n    }\n\n\n\n    h6 {\n        font-size: 14px;\n    }\n\n    .card .card-block p {\n        line-height: 25px;\n    }\n\n    @media only screen and (min-width: 1400px) {\n        p {\n            font-size: 14px;\n        }\n    }\n\n    .card-block {\n        padding: 1.25rem;\n    }\n\n    .b-b-default {\n        border-bottom: 1px solid #e0e0e0;\n    }\n\n    .m-b-20 {\n        margin-bottom: 20px;\n    }\n\n    .p-b-5 {\n        padding-bottom: 5px !important;\n    }\n\n    .card .card-block p {\n        line-height: 25px;\n    }\n\n    .m-b-10 {\n        margin-bottom: 10px;\n    }\n\n    .text-muted {\n        color: #919aa3 !important;\n    }\n\n    .b-b-default {\n        border-bottom: 1px solid #e0e0e0;\n    }\n\n    .f-w-600 {\n        font-weight: 600;\n    }\n\n    .m-b-20 {\n        margin-bottom: 20px;\n    }\n\n    .m-t-40 {\n        margin-top: 20px;\n    }\n\n    .p-b-5 {\n        padding-bottom: 5px !important;\n    }\n\n    .m-b-10 {\n        margin-bottom: 10px;\n    }\n\n    .m-t-40 {\n        margin-top: 20px;\n    }\n\n    .user-card-full .social-link li {\n        display: inline-block;\n    }\n\n    .user-card-full .social-link li a {\n        font-size: 20px;\n        margin: 0 10px 0 0;\n        -webkit-transition: all 0.3s ease-in-out;\n        transition: all 0.3s ease-in-out;\n    }\n      " }} />
      </div>


    </div>


















  );
};

export default ViewSecretaires;
