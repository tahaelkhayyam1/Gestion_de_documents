import React, { useEffect } from 'react';

 import logo from './logo.png'; 
import signature from './signature.png'; 
import tampon from './tampon.png'; 



 
function emploi() {
    
    useEffect(() => {
        window.print();
      }, []);
      
    return (
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>University Timetable</title>
                <style dangerouslySetInnerHTML={{ __html: " table {   width: 80%;   margin: 20px auto;   border-collapse: collapse; } table, th, td {   border: 1px solid #333; } th, td {   padding: 10px;   text-align: left; } th {   background-color: #555;   color: #fff; } td {   background-color: #eee; } tr:nth-child(even) td {   background-color: #ddd; }" }} />
       
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
                    <div className="title">Emploi du temps</div>
                    <div className="content">
                        <table>
                            <thead>
                                <tr>
                                    <th>Jour</th>
                                    <th>8h30-10h</th>
                                    <th>10h15-11h45</th>
                                    <th>14h30-16h</th>
                                    <th>16h15-17h45</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Lundi</td>
                                    <td>Cryptologie/Sécurité informatique</td>
                                    <td>Cryptologie/Sécurité informatique</td>
                                    <td>Génie logiciel et design patterns</td>
                                    <td>Génie logiciel et design patterns</td>
                                </tr>
                                <tr>
                                    <td>Mardi</td>
                                    <td>Technologie Oracle</td>
                                    <td>Technologie Oracle</td>
                                    <td>Projet tutoré</td>
                                    <td>Projet tutoré</td>
                                </tr>
                                <tr>
                                    <td>Mercredi</td>
                                    <td>Programmation et système réseaux</td>
                                    <td>Programmation et système réseaux</td>
                                    <td>Développements mobiles</td>
                                    <td>Développements mobiles</td>
                                </tr>
                                <tr>
                                    <td>Jeudi</td>
                                    <td>Compilation</td>
                                    <td>Compilation</td>
                                    <td>JEE</td>
                                    <td>JEE</td>
                                </tr>
                                <tr>
                                    <td>Vendredi</td>

                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                </tr>
                                <tr>
                                    <td>Samedi</td>

                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                </tr>
                            </tbody>
                        </table>
                        <div className="signature">

                            <img src={signature} alt="Signature" className="signature-image" />
                            <img src={tampon} alt="Tampon" className="stamp" />

                        </div>
                    </div>
                    <style dangerouslySetInnerHTML={{ __html: " @page {   size: A4;   margin: 0; } @media print {   body {     width: 210mm;     height: 297mm;     margin: 10mm auto;     box-shadow: none;   }   .page {     border: initial;     border-radius: initial;     width: initial;     min-height: initial;     box-shadow: initial;     background: initial;     page-break-after: always;   } } body {   box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);   width: 210mm;   height: 297mm;   margin: 0 auto;   padding: 20mm;   background: white;   color: black;   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; } .header {   text-align: center;   border-bottom: 2px solid black;   padding-bottom: 10px;   margin-bottom: 100px;   margin-top: -110px;       } .header-logo {   width: 200px; /* Adjust as needed */   height: auto; } .header-info {   text-align: left;   font-size: 0.85em;   margin-top: -90px; } .header-info p {   margin: 2px; } .title {   text-align: center;   font-size: 1.5em;   font-weight: bold;   margin-bottom: 150px; } .content {   text-align: left;   line-height: 1.4;   font-size: 1em; } .signature {   text-align: right } .signature img {   width: 120px; /* Adjust as needed */   height: auto; } .footer {   text-align: center;   font-size: 0.75em;   margin-top: 30px;   border-top: 1px solid #ccc;   padding-top: 10px; } @media print {   body {   box-shadow: 0 0 0.0cm rgba(255, 255, 255, 1);  }   }   .signature {   position: relative;   text-align: right;   margin-top: 50px; } .signature img.signature-image {   width: 120px; /* Adjust as needed */   height: auto; } .signature img.stamp {   position: absolute;   width: 100px; /* Adjust as needed */   height: auto;   right: 50px; /* Adjust as needed */    z-index: 1; }" }} />
                </div></div>
    );
}
export default emploi;