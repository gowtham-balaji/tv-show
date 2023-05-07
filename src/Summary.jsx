import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./summary.css"

const Summary = () => {
  const { id } = useParams();
  const [showSummary, setShowSummary] = useState("");
  const [showName, setShowName] = useState("");
  

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setShowName(data.name);
        setShowSummary(data.summary);
      })
      .catch((error) => console.log(error));
  }, [id]);

  
 
  return (
    <div>
      <h2>Summary</h2>
      {showSummary ? (
        <div className="summary" dangerouslySetInnerHTML={{ __html: showSummary }}></div>
      ) : (
        <p>Loading summary...</p>
      )}
      {showName && (
        <TicketBookingForm showName={showName} />
      )}
    </div>
  );
};

const TicketBookingForm = ({ showName }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showForm, setShowForm] = useState(false);
  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);

  const handleBooking = () => {
    setShowForm(true);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const bookingDetails = {
      name: name,
      email: email,
      phone: phone,
      movieName: showName,
    };
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
  };

  return (
    <div>
     
     {showForm ? (
       <form className = "form" onSubmit={handleSubmit}>

       <label>
           Movie Name:
             {showName}
         </label>
         <br />
       <div className="input-field">
       <label>
           Name
           </label>
           <input type="text" value={name} onChange={handleNameChange} />
        
       </div>
         <br />
        <div className="input-field">
        <label>
           Email
           </label>
           <input type="email" value={email} onChange={handleEmailChange} />
         
        </div>
         <br />
        <div className="input-field">
        <label>
           Phone
           </label>
           <input type="tel" value={phone} onChange={handlePhoneChange} />
         
        </div>
         <br />
         <button type="submit">Submit</button>
         <br />
         
       </form>
     )   : <button className= "form-btn" onClick={handleBooking} type="click">Book Now</button>}
    </div>
  );
};

export default Summary;