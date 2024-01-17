import React, { useEffect } from 'react';
import logo from './logo.png'; // Make sure the logo is in the same directory as this file
import signature from './signature.png'; // Make sure the logo is in the same directory as this file
import tampon from './tampon.png'; // Make sure the logo is in the same directory as this file



        function vacance() {
          useEffect(() => {
            window.print();
          }, []);
        
        return (
            <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>liste des Vacances</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <style dangerouslySetInnerHTML={{__html: "        @page {            size: A4;            margin: 0;        }                body {            box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);            width: 210mm;            height: 297mm;            margin: 0 auto;            padding: 20mm;            background: white;            color: black;            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;            position: relative; /* Pour positionner correctement les éléments absolus */        }        .header {            text-align: center;            border-bottom: 2px solid black;            padding-bottom: 10px;            margin-bottom: 100px;            margin-top: -110px;        }        .header-logo {            width: 200px;            /* Adjust as needed */            height: auto;        }        .header-info {            text-align: left;            font-size: 0.85em;            margin-top: -90px;        }        .header-info p {            margin: 2px;        }        .title {            text-align: center;            font-size: 1.5em;            font-weight: bold;            margin-bottom: 50px;        }        .footer {            text-align: center;            font-size: 0.75em;            margin-top: 30px;            border-top: 1px solid #ccc;            padding-top: 10px;        }        @media print {            body {                box-shadow: 0 0 0.0cm rgba(255, 255, 255, 1);            }        }        .signature {            text-align: right;            margin-top: 250px;        }        .signature img {            width: 120px;            /* Adjust as needed */            height: auto;        }        .signature {            position: relative;            text-align: right;                   }        .signature img.signature-image {            width: 120px;            /* Adjust as needed */            height: auto;        }        .signature img.stamp {            position: absolute;            width: 100px;            /* Adjust as needed */            height: auto;            right: 50px;            /* Adjust as needed */            z-index: 1;        }    " }} />
           
            <style dangerouslySetInnerHTML={{__html: "Nav, Aside,a { display: none; /* Hide navbar and aside when printing } " }} />

 
            <div className="header">
            <img src={logo} alt="Logo" className="header-logo" />
              <div className="header-info">
                <p>Université privée de fes</p>
                <p>Fès 30000</p>
                <p>Phone:0661-446024 </p>
                <p>Mail: info@upf.ac.ma</p>
              </div>
            </div>
            <div className="title">Vacances</div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">الترتيب</th>
                  <th scope="col">الاعياد</th>
                  <th scope="col">تاريخ العطل</th>
                  <th scope="col" >عدد الأيام</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>عيد المولد النبوي</td>
                  <td>
                    يوما 12 و 13 ربيع الأول 1445</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>ذكرى المسيرة الخضراء
                  </td>
                  <td>يوم الإثنين 6 نونبر 2023
                  </td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>عيد الاستقلال</td>
                  <td>
                    يوم السبت 18 نونبر 2023</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>فاتح السنة الميلادية</td>
                  <td>
                    يوم الإثنين فاتح يناير 2024
                  </td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>ذكرى تقديم عريضة الاستقلال</td>
                  <td>
                    يوم الخميس 11 يناير 2024
                  </td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    عطلة رأس السنة الأمازيغية
                  </td>
                  <td> ستحدد لاحقا
                  </td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>عطلة نهاية الفصل الأول
                  </td>
                  <td> من يوم الأحد 21 يناير 2024 إلى يوم الأحد 28 يناير 2024
                  </td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td> عيد الفطر
                  </td>
                  <td> من يوم 29 رمضان 1445 إلى يوم 3 أو 4 شوال 1445
                  </td>
                  <td>4/5</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    عطلة فصل الربيع وعيد
                    الشغل </td>
                  <td> من يوم الأحد 28 أبريل 2024 إلى يوم الأحد 5 أماي 2024
                  </td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td> عيد الأضحى</td>
                  <td> من يوم 8 ذو الحجة 1445
                    إلى يوم 11 ذو الحجة 1445
                  </td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
            <div className="signature">
              <img src={signature} alt="Signature" className="signature-image" />
                <img src={tampon} alt="Tampon" className="stamp" />
            </div>
          </div>
          
      );
    }
    export default vacance;