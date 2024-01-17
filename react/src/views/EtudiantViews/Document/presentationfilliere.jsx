import React, { useEffect } from 'react';
import logo from './logo.png'; // Make sure the logo is in the same directory as this file
import signature from './signature.png'; // Make sure the logo is in the same directory as this file
import tampon from './tampon.png'; // Make sure the logo is in the same directory as this file


function presentationfilliere() {

  useEffect(() => {
    window.print();
  }, []);

  return (

    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Modules S7 &amp; S8 &amp; S9</title>
      <style dangerouslySetInnerHTML={{ __html: "  @page {    size: A4;    margin: 0;  }  body {      width: 100%;      height: 100%;      margin: 0;      padding: 0;      box-shadow: none;    }        .header, .footer {      position: fixed;      left: 0;      width: 100%;    }        .header {      top: 0;    }        .footer {      bottom: 0;    }        .module-table {      width: 100%;    }        .module-table, .module-table th, .module-table td {      border: 1px solid black;    }        /* Adjust signature and stamp to be within the printable area */    .signature {      position: fixed;      bottom: 5%; /* Adjust this percentage as needed */      right: 5%; /* Adjust this percentage as needed */    }        .signature img.signature-image {      width: 60px; /* Adjust width as needed */    }        .signature img.stamp {      width: 60px; /* Adjust width as needed */    }    /* Header and Footer Styles */  .header {    text-align: center;    padding: 10px 0;  }    .footer {    text-align: center;    padding: 10px 0;  }  .signature {    text-align: right;    margin-top: 250px;  }    .signature img {    width: 120px; /* Adjust as needed */    height: auto;  }    .signature img.stamp {    width: 100px; /* Adjust as needed */    height: auto;  }    .header {    text-align: center;    border-bottom: 2px solid black;    padding-bottom: 10px;    margin-bottom: 100px;          }  .header-logo {    width: 200px; /* Adjust as needed */    height: auto;  }  .header-info {    text-align: left;    font-size: 0.85em;    margin-top: -90px;  }  .header-info p {    margin: 2px;  }  .title {    text-align: center;    font-size: 1.5em;    font-weight: bold;    margin-bottom: 150px;  }  .content {    text-align: left;    line-height: 1.4;    font-size: 1em;  }  .footer {    text-align: center;    font-size: 0.75em;     border-top: 1px solid #ccc;    padding-top: 10px;  }  .signature {    text-align: right;   }  .signature img.signature-image {    width: 120px; /* Adjust as needed */    height: auto;  }  .signature img.stamp {    position: absolute;    width: 100px; /* Adjust as needed */    height: auto;    right: 50px; /* Adjust as needed */    z-index: 1;  }" }} />
      <style dangerouslySetInnerHTML={{__html: "Nav, Aside,a { display: none; /* Hide navbar and aside when printing } " }} />

      <div className="header">
      <img src={logo} alt="Logo" className="header-logo" />
        <div className="header-info">
          <p>Université privée de fes</p>
          <p>Fès 30000</p>
          <p>Phone:0661-446024</p>
          <p>Email: info@upf.ac.ma</p>
        </div>
      </div>
      {/* Repeat this structure for each page */}
      <div className="page" id="page1">
        <h2>Modules 3 ème année</h2>
        <table className="module-table">
          <thead>
            <tr>
              <th>S5</th>
              <th>S6</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Modélisation UML</td>
              <td>Programmation orienté objet C#</td>
            </tr>
            <tr>
              <td>Programmation Orienté Objet Java Standard Edition</td>
              <td>Programmation orienté objet : Java avancé</td>
            </tr>
            <tr>
              <td>Réseaux Informatiques II</td>
              <td>Technologie Web: PHP et MySQL/Symfony</td>
            </tr>
            <tr>
              <td>Système d’exploitation II (Windows server) : Infrastructure réseaux</td>
              <td>Intelligence artificielle 1</td>
            </tr>
            <tr>
              <td>Sciences de données (Analyse des données)</td>
              <td>SQL server (Transact SQL)</td>
            </tr>
            <tr>
              <td>Qualité logiciel / projet tutoré</td>
              <td>CCNA technologies</td>
            </tr>
            <tr>
              <td>Informatique industrielle</td>
              <td>Recherche opérationnelle/ Théorie des Graphes</td>
            </tr>
            <tr>
              <td>Langue 1</td>
              <td>Langue 2</td>
            </tr>
          </tbody>
        </table></div>
      <div className="page" id="page2">
        <h2>Modules 4 ème année</h2>
        <table className="module-table">
          <thead>
            <tr>
              <th>S7</th>
              <th>S8</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>J2EE</td>
              <td>Technologie .NET (ASP.NET et ADD Développement)</td>
            </tr>
            <tr>
              <td>Développement d'applications mobiles</td>
              <td>Frameworks web avancés</td>
            </tr>
            <tr>
              <td>Technologie Oracle</td>
              <td>Traitement d'images et Deep Learning</td>
            </tr>
            <tr>
              <td>Génie logiciel et Design patterns</td>
              <td>Intelligence artificielle 2</td>
            </tr>
            <tr>
              <td>Programmation système et réseau</td>
              <td>Architecteur distribuée EJB / SOA</td>
            </tr>
            <tr>
              <td>Théorie des langages et compilation</td>
              <td>Droit appliqué</td>
            </tr>
            <tr>
              <td>Cryptographie / sécurité informatique</td>
              <td>Technique de recherche d'emploi et Gestion de carrière</td>
            </tr>
            <tr>
              <td>Projet</td>
              <td>Projet</td>
            </tr>
          </tbody>
        </table></div>
      <div className="page" id="page33">
        <h2>Modules 5 ème année</h2>
        <table className="module-table">
          <thead>
            <tr>
              <th>S9</th>
              <th>S8</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MDA/Cloud Computing</td>
              <td>PFE</td>
            </tr>
            <tr>
              <td>Datamining et informatique décisionnelle (Datawarhouse) Référentiels des systèmes d'informations
</td>
              <td>PFE</td>
            </tr>
            <tr>
              <td>Référentiels des systèmes
d'informations
</td>
              <td>PFE</td>
            </tr>
            <tr>
              <td>ERP et stratégie d'entreprise
</td>
              <td>PFE</td>
            </tr>
            <tr>
              <td>Business Intelligence
</td>
              <td>PFE</td>
            </tr>
            <tr>
              <td> virtualisation & sécurité avancée
</td>
              <td>PFE</td>
            </tr>
            <tr>
              <td> Administration base de données : Oracle
</td>
              <td>PFE</td>
            </tr>
            <tr>
              <td> Big data</td>
              <td>PFE</td>
            </tr>

          </tbody>
        </table>
      </div>
      <div className="footer">
        <div className="signature">
          <img src={signature} alt="Signature" className="signature-image" />
          <img src={tampon} alt="Tampon" className="stamp" />
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: "    body, html {      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;      margin: 0;      padding: 0;      background-color: #f0f0f0;    }    .page {  width: 100%;  min-height: calc(100vh - 150px); /* Adjust the value as needed for the desired space from the header */  display: flex;  flex-direction: column;  justify-content: center;  align-items: center;  margin-top: 250px; /* Add margin to create space from the header */}    .module-table {      width: 80%;      margin: 20px 0;      border-collapse: collapse;    }    .module-table th {      background-color: #007bff;      color: #fff;      padding: 10px 0;    }    .module-table td {      padding: 10px 0;      text-align: center;      border-bottom: 1px solid #ddd;    }    .module-table tbody tr:last-child td {      border-bottom: none;    }    h2 {      text-align: center;      padding: 20px 0;    }      @media screen {      /* Styles for screen display */    }      @media print {      body, html {        background-color: #fff;      }      .page {        min-height: 0;        page-break-after: always;        page-break-inside: avoid;        overflow: visible;        display: block;      }      .module-table {        width: 100%;      }      .module-table, .module-table th, .module-table td {        border: 1px solid black; /* Ensuring borders are visible on print */      }    }  " }} />
    </div>

  );
}
export default presentationfilliere;
