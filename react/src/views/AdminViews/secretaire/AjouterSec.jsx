import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const AjouterEtd = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    cin: '',
    datedenaissance: '',
    mobile_number: '',
    address_line1: '',
    email: '',
    Country: '',
    Region: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setFormErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:8000/api/add_secretaires', formData);
        console.log('Response:', response.data);
  
        // Check if the response indicates success and contains a redirect path
        if (response.data.success) {
          // Redirect to the path provided by the backend
          navigate(response.data.redirectPath);
        } else {
          // Handle the case where the response doesn't indicate success
          console.error("Submission was not successful.");
        }
      } catch (error) {
        console.error("Error during submission:", error.response);
      }
    }
  };
  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Please fill in the name field.";
    }

    if (!values.surname) {
      errors.name = "Please fill in the surname field.";
    }

    if (!values.cin) {
      errors.name = "Please fill in the Cin field.";
    }

    if (!values.datedenaissance) {
      errors.name = "Please select a date of birth.";
    }

    if (!values.mobile_number) {
      errors.name = "Please fill in the mobile number field.";
    }

    if (!values.address_line1) {
      errors.name = "Please fill in the address line 1 field.";
    }
   

    if (!values.email) {
      errors.name = "Please fill in the email field.";
    }

   
    if (!values.Country) {
      errors.name = "Please select a country.";
    }

    if (!values.Region) {
      errors.name = "Please fill in the region field.";
    }


 
    return errors;
  }; 
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
                  <input type="text" className="form-control" placeholder="first name" value={formData.name} onChange={handleChange} id="name" name="name"  />
                </div>
                <div className="col-md-6"><label className="labels">Surname</label>
                  <input type="text" className="form-control" name="surname" onChange={handleChange} id="surname" value={formData.surname} required placeholder="surname" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Cin</label>
                  <input type="text" className="form-control" onChange={handleChange} id="cin" name="cin" required value={formData.cin} placeholder="Cin" />
                </div>
                <div className="col-md-12"><label className="labels">Date de Naissance</label>
                  <input type="date" className="form-control" onChange={handleChange} id="datedenaissance" value={formData.datedenaissance} name="datedenaissance" />
                </div>
                <div className="col-md-12"><label className="labels">Mobile Number</label>
                  <input type="text" className="form-control" onChange={handleChange} id="mobile_number" name="mobile_number" required value={formData.mobile_number} placeholder="enter phone number" />
                </div>
                <div className="col-md-12"><label className="labels">Address Line 1</label>
                  <input type="text" className="form-control" onChange={handleChange} id="address_line1" name="address_line1" required value={formData.address_line1} placeholder="enter address line 1" />
                </div>
                <div className="col-md-12"><label className="labels">Email</label>
                  <input type="email" className="form-control" onChange={handleChange} id="email" name="email" required value={formData.email} placeholder="enter email" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <select className="form-control" onChange={handleChange} id="Country" value={formData.Country} name="Country">
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
                  <input type="text" className="form-control" onChange={handleChange} id="Region" name="Region" required value={formData.Region} placeholder="state" />
                </div>
              </div>



              <div className="mt-5 text-center">
                <button className="btn btn-primary profile-button" type="submit">
                  Ajouter
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


export default AjouterEtd;
