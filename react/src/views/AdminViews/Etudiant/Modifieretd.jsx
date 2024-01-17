import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Modifieretd = () => {
    const [etudiant, setEtudiant] = useState({
      // Initialize with empty values or default values
      name: '',
      surname: '',
      cin: '',
      datedenaissance: '',
      mobile_number: '',
      address_line1: '',
      address_line2: '',
      email: '',
      filliere: '',
      annee: '',
      Country: '',
      Region: '',
      paiement_status: 13
    });


    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
      const fetchEtudiantDetails = async () => {
        try {
          const result = await axios(`http://localhost:8000/api/etudiants/${id}`);
          setEtudiant(result.data);
        } catch (error) {
          console.error("Error fetching student details:", error);
        }
      };

      fetchEtudiantDetails();
    }, [id]);

    const handleChange = (e) => {
      setEtudiant({ ...etudiant, [e.target.name]: e.target.value });
    };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.put(`http://localhost:8000/api/etudiants/${id}`, etudiant);
        navigate('/admin/ListeEtudiants');
 
    } catch (error) {
        if (error.response && error.response.status === 422) {
            // Handle validation errors
            setFormErrors(error.response.data.errors);
        } else {
            console.error("Error updating student:", error);
        }
    }
};


    if (!etudiant) {
      return <div>Loading...</div>;
    }
  return (
    <div>
      <main className="page payment-page">
        <section className="payment-form dark">
          <div className="container">
            <div className="block-heading">
            </div>

            <form onSubmit={handleSubmit}>

              {formErrors.name && <p className="error">{formErrors.name}</p>}


              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Nom</label>
                  <input type="text" className="form-control" placeholder="first name" value={etudiant.name} onChange={handleChange} id="name" name="name" required />
                </div>
                <div className="col-md-6"><label className="labels">Surname</label>
                  <input type="text" className="form-control" name="surname" onChange={handleChange} value={etudiant.surname} id="surname"   required placeholder="surname" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Cin</label>
                  <input type="text" className="form-control" onChange={handleChange} id="cin" name="cin" required value={etudiant.cin} placeholder="Cin" />

                </div>
                <div className="col-md-12"><label className="labels">Date de Naissance</label>
                  <input type="date" className="form-control" onChange={handleChange} id="datedenaissance" value={etudiant.datedenaissance} name="datedenaissance" />

                </div>
                <div className="col-md-12"><label className="labels">Mobile Number</label>
                  <input type="text" className="form-control" onChange={handleChange} id="mobile_number" name="mobile_number" required value={etudiant.mobile_number} placeholder="enter phone number" />

                </div>
                <div className="col-md-12"><label className="labels">Address Line 1</label>
                  <input type="text" className="form-control" onChange={handleChange} id="address_line1" name="address_line1" required value={etudiant.address_line1} placeholder="enter address line 1" />

                </div>
                <div className="col-md-12"><label className="labels">Address Line 2</label>
                  <input type="text" className="form-control" onChange={handleChange} id="address_line2" name="address_line2" required value={etudiant.address_line2} placeholder="enter address line 2" />

                </div>
                <div className="col-md-12"><label className="labels">Email</label>
                  <input type="email" className="form-control" onChange={handleChange} id="email" name="email" required value={etudiant.email} placeholder="enter email" />

                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">filliere</label>
                  <select className="form-control" onChange={handleChange} id="filliere" value={etudiant.filliere} name="filliere">

                    <option value="">Select filliere</option>
                    <option value="Génie informatique">Génie informatique</option>
                    <option value="Génie Civil">Génie Civil</option>
                    <option value="Génie des Energies Renouvelables et Systèmes Energétiques">Génie des Energies Renouvelables et Systèmes Energétiques</option>
                    <option value="Système d’Information et Transformation Digitale">Système d’Information et Transformation Digitale</option>
                    <option value="Génie des Systèmes Embarqués">Génie des Systèmes Embarqués</option>
                    <option value="Design et Architecture d’Intérieur">Design et Architecture d’Intérieur</option>
                    <option value="Urbanisme et Aménagement">Urbanisme et Aménagement</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="labels">annee</label>
                  <select className="form-control" onChange={handleChange} value={etudiant.annee} id="annee" name="annee">

                    <option value="">Select the Year</option>
                    <option value="1">1ère année</option>
                    <option value="2">2ème année</option>
                    <option value="3">3ème année</option>
                    <option value="4">4ème année</option>
                    <option value="5">5ème année</option>
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <select className="form-control" onChange={handleChange} id="Country" value={etudiant.Country} name="Country">

                    <option value="">Select Country</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Angola">Angola</option>
                    <option value="Benin">Benin</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Central African Republic">Central African Republic</option>
                    <option value="Chad">Chad</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Republic of the Congo">Republic of the Congo</option>
                    <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Eswatini">Eswatini</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="France">France</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Ivory Coast">Ivory Coast</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Mali">Mali</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Spain">Spain</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Togo">Togo</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
                <div className="col-md-6"><label className="labels">Region</label>
                  <input type="text" className="form-control" onChange={handleChange} id="Region" name="Region" required value={etudiant.Region} placeholder="state" />

                </div>
              </div>



              <div className="mt-5 text-center">
                <button className="btn btn-primary profile-button" type="submit">
                  Modifier
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
<style dangerouslySetInnerHTML={{__html: "    .payment-form{padding-bottom: 50px;font-family: 'Montserrat', sans-serif;}.payment-form.dark{background-color: #f6f6f6;}.payment-form .content{box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);background-color: white;}.payment-form .block-heading{    padding-top: 50px;    margin-bottom: 40px;    text-align: center;}.payment-form .block-heading p{text-align: center;max-width: 420px;margin: auto;opacity:0.7;}.payment-form.dark .block-heading p{opacity:0.8;}.payment-form .block-heading h1,.payment-form .block-heading h2,.payment-form .block-heading h3 {margin-bottom:1.2rem;color: #3b99e0;}.payment-form form{border-top: 2px solid #5ea4f3;box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);background-color: #ffffff;padding: 20px;max-width: 600px;margin: auto;}.payment-form .title{font-size: 1em;border-bottom: 1px solid rgba(0,0,0,0.1);margin-bottom: 0.8em;font-weight: 600;padding-bottom: 8px;}.payment-form .products{background-color: #f7fbff;    padding: 25px;}.payment-form .products .item{margin-bottom:1em;}.payment-form .products .item-name{font-weight:600;font-size: 0.9em;}.payment-form .products .item-description{font-size:0.8em;opacity:0.6;}.payment-form .products .item p{margin-bottom:0.2em;}.payment-form .products .price{float: right;font-weight: 600;font-size: 0.9em;}.payment-form .products .total{border-top: 1px solid rgba(0, 0, 0, 0.1);margin-top: 10px;padding-top: 19px;font-weight: 600;line-height: 1;}.payment-form .card-details{padding: 25px 25px 15px;}.payment-form .card-details label{font-size: 12px;font-weight: 600;margin-bottom: 15px;color: #79818a;text-transform: uppercase;}.payment-form .card-details button{margin-top: 0.6em;padding:12px 0;font-weight: 600;}.payment-form .date-separator{ margin-left: 10px;    margin-right: 10px;    margin-top: 5px;}@media (min-width: 576px) {.payment-form .title {font-size: 1.2em; }.payment-form .products {padding: 40px;   }.payment-form .products .item-name {font-size: 1em; }.payment-form .products .price {    font-size: 1em; }  .payment-form .card-details {    padding: 40px 40px 30px;     }  .payment-form .card-details button {    margin-top: 2em;     } }" }} />

    </div>




  );
};


export default Modifieretd;
