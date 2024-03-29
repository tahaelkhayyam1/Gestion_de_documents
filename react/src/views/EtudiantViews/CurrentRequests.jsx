import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function CurrentRequests() {
    const { id } = useParams();
    const [Requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequestsDetails = async () => {
            try {
                console.log("User ID:", id);
                const result = await axios(`http://localhost:8000/api/Requests/${id}`);
                setRequests(result.data);
            } catch (error) {
                console.error("Error fetching Requests details:", error);
            }
        };

        fetchRequestsDetails();
    }, [id]);





    if (Requests.length === 0) {
        return (<div className="card text-center">
        <div className="card-header">
          
        </div>
        <div className="card-body">
          <h5 className="card-title">Hello </h5>
          <p className="card-text">You have no Current Document Requests , try to refresh  the Page or Request a Document.</p>
          <a href={`/Document/${id}`} className="btn btn-primary">Request ?</a>
        </div>
   
      </div>
      );
    }






    return (
        <div className="container">
            <div className="row">
                {Requests ? (
                    Requests.map((doc, index) => (
                        <div className="col-lg-4" key={index}>


                            <div className="card card-margin">
                                <div className="card-header no-border">
                                </div>
                                <div className="card-body pt-0">
                                    <div className="widget-49">
                                        <div className="widget-49-title-wrapper">
                                            <div className="widget-49-date-primary">
                                                <span className="widget-49-date-day">{doc.document.id}</span>




                                            </div>
                                            <div className="widget-49-meeting-info">
                                                <span className="widget-49-pro-title">{doc.document.document_name}</span>
                                                <span className="widget-49-meeting-time"> {new Date(doc.created_at).getDate()}  {new Date(doc.created_at).toLocaleString('default', { month: 'long' })} </span>
                                            </div>


                                        </div>
                                        <div className="mt-5">
                                        </div>

                                        {doc.status === 'pending' && (
                                            <div>
                                                <div className="p-3 mb-2 bg-success text-white">
                                                    <p>Your document is currently being reviewed.</p>
                                                </div>

                                                {/* <button className="btn btn-primary">Cancel Request</button> */}
                                            </div>
                                        )}
                                        {doc.status === 'rejected' && (
                                            <div>
                                                <div className="p-3 mb-2 bg-danger text-white">

                                                    <p> Your document has been rejected.
                                                        Check the administration
                                                    </p>
                                                </div>
                                                {/* <button className="btn btn-primary">delete</button> */}
                                            </div>
                                        )}
                                        {doc.status === 'accepted' && (
                                            <div >



                                                <div className="p-3 mb-2 bg-info text-white">

                                                    <p> Your document has been accepted.</p>
                                                </div>
                                                <a target="_blank" href={`/docs/${doc.document.print_path}${doc.user.id}`} className="btn btn-secondary">Imprimer</a>
                                            </div>

                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <style dangerouslySetInnerHTML={{ __html: "body{    background: #F4F7FD;}.card-margin {    margin-bottom: 1.875rem;}.card {    border: 0;    box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);    -webkit-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);    -moz-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);    -ms-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);}.card {    position: relative;    display: flex;    flex-direction: column;    min-width: 0;    word-wrap: break-word;    background-color: #ffffff;    background-clip: border-box;    border: 1px solid #e6e4e9;    border-radius: 8px;}.card .card-header.no-border {    border: 0;}.card .card-header {    background: none;    padding: 0 0.9375rem;    font-weight: 500;    display: flex;    align-items: center;    min-height: 50px;}.card-header:first-child {    border-radius: calc(8px - 1px) calc(8px - 1px) 0 0;}.widget-49 .widget-49-title-wrapper {  display: flex;  align-items: center;}.widget-49 .widget-49-title-wrapper .widget-49-date-primary {  display: flex;  align-items: center;  justify-content: center;  flex-direction: column;  background-color: #edf1fc;  width: 4rem;  height: 4rem;  border-radius: 50%;}.widget-49 .widget-49-title-wrapper .widget-49-date-primary .widget-49-date-day {  color: #4e73e5;  font-weight: 500;  font-size: 1.5rem;  line-height: 1;}.widget-49 .widget-49-title-wrapper .widget-49-date-primary .widget-49-date-month {  color: #4e73e5;  line-height: 1;  font-size: 1rem;  text-transform: uppercase;}.widget-49 .widget-49-title-wrapper .widget-49-date-secondary {  display: flex;  align-items: center;  justify-content: center;  flex-direction: column;  background-color: #fcfcfd;  width: 4rem;  height: 4rem;  border-radius: 50%;}.widget-49 .widget-49-title-wrapper .widget-49-date-secondary .widget-49-date-day {  color: #dde1e9;  font-weight: 500;  font-size: 1.5rem;  line-height: 1;}.widget-49 .widget-49-title-wrapper .widget-49-date-secondary .widget-49-date-month {  color: #dde1e9;  line-height: 1;  font-size: 1rem;  text-transform: uppercase;}.widget-49 .widget-49-title-wrapper .widget-49-date-success {  display: flex;  align-items: center;  justify-content: center;  flex-direction: column;  background-color: #e8faf8;  width: 4rem;  height: 4rem;  border-radius: 50%;}.widget-49 .widget-49-title-wrapper .widget-49-date-success .widget-49-date-day {  color: #17d1bd;  font-weight: 500;  font-size: 1.5rem;  line-height: 1;}.widget-49 .widget-49-title-wrapper .widget-49-date-success .widget-49-date-month {  color: #17d1bd;  line-height: 1;  font-size: 1rem;  text-transform: uppercase;}.widget-49 .widget-49-title-wrapper .widget-49-date-info {  display: flex;  align-items: center;  justify-content: center;  flex-direction: column;  background-color: #ebf7ff;  width: 4rem;  height: 4rem;  border-radius: 50%;}.widget-49 .widget-49-title-wrapper .widget-49-date-info .widget-49-date-day {  color: #36afff;  font-weight: 500;  font-size: 1.5rem;  line-height: 1;}.widget-49 .widget-49-title-wrapper .widget-49-date-info .widget-49-date-month {  color: #36afff;  line-height: 1;  font-size: 1rem;  text-transform: uppercase;}.widget-49 .widget-49-title-wrapper .widget-49-date-warning {  display: flex;  align-items: center;  justify-content: center;  flex-direction: column;  background-color: floralwhite;  width: 4rem;  height: 4rem;  border-radius: 50%;}.widget-49 .widget-49-title-wrapper .widget-49-date-warning .widget-49-date-day {  color: #FFC868;  font-weight: 500;  font-size: 1.5rem;  line-height: 1;}.widget-49 .widget-49-title-wrapper .widget-49-date-warning .widget-49-date-month {  color: #FFC868;  line-height: 1;  font-size: 1rem;  text-transform: uppercase;}.widget-49 .widget-49-title-wrapper .widget-49-date-danger {  display: flex;  align-items: center;  justify-content: center;  flex-direction: column;  background-color: #feeeef;  width: 4rem;  height: 4rem;  border-radius: 50%;}.widget-49 .widget-49-title-wrapper .widget-49-date-danger .widget-49-date-day {  color: #F95062;  font-weight: 500;  font-size: 1.5rem;  line-height: 1;}.widget-49 .widget-49-title-wrapper .widget-49-date-danger .widget-49-date-month {  color: #F95062;  line-height: 1;  font-size: 1rem;  text-transform: uppercase;}.widget-49 .widget-49-title-wrapper .widget-49-date-light {  display: flex;  align-items: center;  justify-content: center;  flex-direction: column;  background-color: #fefeff;  width: 4rem;  height: 4rem;  border-radius: 50%;}.widget-49 .widget-49-title-wrapper .widget-49-date-light .widget-49-date-day {  color: #f7f9fa;  font-weight: 500;  font-size: 1.5rem;  line-height: 1;}.widget-49 .widget-49-title-wrapper .widget-49-date-light .widget-49-date-month {  color: #f7f9fa;  line-height: 1;  font-size: 1rem;  text-transform: uppercase;}.widget-49 .widget-49-title-wrapper .widget-49-date-dark {  display: flex;  align-items: center;  justify-content: center;  flex-direction: column;  background-color: #ebedee;  width: 4rem;  height: 4rem;  border-radius: 50%;}.widget-49 .widget-49-title-wrapper .widget-49-date-dark .widget-49-date-day {  color: #394856;  font-weight: 500;  font-size: 1.5rem;  line-height: 1;}.widget-49 .widget-49-title-wrapper .widget-49-date-dark .widget-49-date-month {  color: #394856;  line-height: 1;  font-size: 1rem;  text-transform: uppercase;}.widget-49 .widget-49-title-wrapper .widget-49-date-base {  display: flex;  align-items: center;  justify-content: center;  flex-direction: column;  background-color: #f0fafb;  width: 4rem;  height: 4rem;  border-radius: 50%;}.widget-49 .widget-49-title-wrapper .widget-49-date-base .widget-49-date-day {  color: #68CBD7;  font-weight: 500;  font-size: 1.5rem;  line-height: 1;}.widget-49 .widget-49-title-wrapper .widget-49-date-base .widget-49-date-month {  color: #68CBD7;  line-height: 1;  font-size: 1rem;  text-transform: uppercase;}.widget-49 .widget-49-title-wrapper .widget-49-meeting-info {  display: flex;  flex-direction: column;  margin-left: 1rem;}.widget-49 .widget-49-title-wrapper .widget-49-meeting-info .widget-49-pro-title {  color: #3c4142;  font-size: 14px;}.widget-49 .widget-49-title-wrapper .widget-49-meeting-info .widget-49-meeting-time {  color: #B1BAC5;  font-size: 13px;}.widget-49 .widget-49-meeting-points {  font-weight: 400;  font-size: 13px;  margin-top: .5rem;}.widget-49 .widget-49-meeting-points .widget-49-meeting-item {  display: list-item;  color: #727686;}.widget-49 .widget-49-meeting-points .widget-49-meeting-item span {  margin-left: .5rem;}.widget-49 .widget-49-meeting-action {  text-align: right;}.widget-49 .widget-49-meeting-action a {  text-transform: uppercase;}    " }} />

        </div>
    );
}
