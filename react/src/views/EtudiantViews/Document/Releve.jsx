import { useEffect, useState } from "react";
 import axios from 'axios';
import { useStateContext } from "../../../contexts/Context";
import { useParams } from 'react-router-dom';

 import logo from './logo.png'; 
import signature from './signature.png'; 
import tampon from './tampon.png'; 
        function Releve() {
          const { id } = useParams();
  const [user, setUser] = useState(null);
  const currentDate = new Date().toLocaleDateString("fr-FR"); // You can adjust the locale as needed

 
   useEffect(() => {
    fetchUserData();
  }, []);

 

  useEffect(() => {
    // Check if user data is available
    if (user) {
      // Delay the print action by 3 seconds
      const printTimeout = setTimeout(() => {
        window.print();
      }, 500); // 3000 milliseconds = 3 seconds

      // Clear the timeout if the component unmounts before 3 seconds
      return () => clearTimeout(printTimeout);
    }
  }, [user]);


const fetchUserData = async () => {
  try {
    const result = await axios(`http://localhost:8000/api/user/${id}`);
    const userData = result.data; 
     setUser(userData); 


     
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

 

if (!user) {
  return <div>Loading...</div>;
}

   


        return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Grade Report</title>
          <style dangerouslySetInnerHTML={{__html: "        body {            font-family: 'Arial', sans-serif;            margin: 0;            padding: 0;            background: #fff;        }        .report-container {            width: 210mm;            height: 297mm;            margin: auto;            padding: 20mm;            box-shadow: 0 0 5mm rgba(0,0,0,0.2);        }        .header {    text-align: center;    border-bottom: 2px solid black;    padding-bottom: 10px;    margin-bottom: 100px;    margin-top: -110px;          }  .header-logo {    width: 200px; /* Adjust as needed */    height: auto;  }  .header-info {    text-align: left;    font-size: 0.85em;    margin-top: -90px;  }  .header-info p {    margin: 2px;  }        table {            width: 100%;            border-collapse: collapse;            margin-bottom: 5mm;        }        th, td {            border: 1px solid #000;            padding: 2mm;            text-align: left;        }        th {            background-color: #f2f2f2;        }        .footer {            text-align: right;            position: relative;        }        .footer img.stamp {            position: absolute;            right: 20mm;            bottom: 10mm;            width: 30mm;            height: auto;        }        .footer img.signature {            position: absolute;            right: 20mm;            bottom: 20mm;            width: 40mm;            height: auto;        }        .title {    text-align: center;    font-size: 1.5em;    font-weight: bold;    margin-bottom: 150px;  }    .signature img {    width: 120px; /* Adjust as needed */    height: auto;  }   @media print {   .report-container {                box-shadow: 0 0 0.0cm rgba(255, 255, 255, 1);        }    }    .signature {    position: relative;    text-align: right;    margin-top: 70px;  }  .signature img.signature-image {    width: 120px; /* Adjust as needed */    height: auto;  }  .signature img.stamp {    position: absolute;    width: 100px; /* Adjust as needed */    height: auto;    right: 50px; /* Adjust as needed */     z-index: 1;  }    " }} />
          <style dangerouslySetInnerHTML={{__html: "Nav, Aside,a { display: none; /* Hide navbar and aside when printing } " }} />

          <div className="report-container">
            <div className="page">
              <div className="header">
                <img src={logo} alt="Logo" className="header-logo" />
                <div className="header-info">
                  <p>Université privée de fes</p>
                  <p>Fès 30000</p>
                  <p>Phone:0661-446024 </p>
                  <p>Mail: info@upf.ac.ma</p>
                </div>
              </div>
              <div className="title">Relevé de Note</div>
              <div style={{marginBottom: '10px'}}>
                <span>Nom et Prenom : </span>
                <span>{user.name}</span>
              </div>
              <div style={{marginBottom: '10px'}}>
                <span>Année et fillière : </span>
                <span>{user.annee} {user.filliere}</span>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Module</th>
                    <th>Abs</th>
                    <th>Control</th>
                    <th>Examen</th>
                    <th>Rattrapage</th>
                    <th>Moyenne</th>
                    <th>Obs</th>
                  </tr>
                </thead>
                <tbody>
                   <tr>
                    <td>Module Name</td>
                    <td>0</td>
                    <td>15</td>
                    <td>17</td>
                    <td>-</td>
                    <td>16</td>
                    <td>V</td>
                  </tr>
                  <tr>
                    <td>Module Name</td>
                    <td>0</td>
                    <td>15</td>
                    <td>17</td>
                    <td>-</td>
                    <td>16</td>
                    <td>V</td>
                  </tr>
                  <tr>
                    <td>Module Name</td>
                    <td>0</td>
                    <td>15</td>
                    <td>17</td>
                    <td>-</td>
                    <td>16</td>
                    <td>V</td>
                  </tr>
                  <tr>
                    <td>Module Name</td>
                    <td>0</td>
                    <td>15</td>
                    <td>17</td>
                    <td>-</td>
                    <td>16</td>
                    <td>V</td>
                  </tr>
                  <tr>
                    <td>Module Name</td>
                    <td>0</td>
                    <td>15</td>
                    <td>17</td>
                    <td>-</td>
                    <td>16</td>
                    <td>V</td>
                  </tr>
                  <tr>
                    <td>Module Name</td>
                    <td>0</td>
                    <td>15</td>
                    <td>17</td>
                    <td>-</td>
                    <td>16</td>
                    <td>V</td>
                  </tr>
                  <tr>
                    <td>Module Name</td>
                    <td>0</td>
                    <td>15</td>
                    <td>17</td>
                    <td>-</td>
                    <td>16</td>
                    <td>V</td>
                  </tr>
                 </tbody>
              </table>
              <div className="signature">
                <div style={{marginBottom: '10px'}}>
                  <b><span>Moyenne Generale  :</span> 
                    <span> 12.00</span></b>
                </div>
                <div style={{marginBottom: '10px'}}>
                  <b><span>Semestre  :</span> 
                    <span> Validé</span></b> 
                </div>
                
                <img src={signature} alt="Signature" className="signature-image" />
                <img src={tampon} alt="Tampon" className="stamp" />
                <p>Fait à Fes, Le {currentDate}</p>

              </div>
              
            </div>
          </div></div>
      );
    }
    export default Releve;