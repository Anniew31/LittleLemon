import React, { useState } from 'react';

function ReservationsPage() {
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [occasion, setOccasion] = useState('');
  const [guests, setGuests] = useState(1);

  const handleIncrement = () => {
    setGuests(prev => prev + 1);
  };

  const handleDecrement = () => {
    setGuests(prev => (prev > 1 ? prev - 1 : 1));
  };

  const DatePicker = ({ selectedDate, onDateChange }) => {
    const today = new Date().toISOString().split('T')[0];
    
    return (
      <div className="date-picker">
        <label htmlFor="reservation-date">Select Date</label>
        <input 
          type="date"
          id="reservation-date"
          value={selectedDate}
          min={today}
          onChange={(e) => onDateChange(e.target.value)}
          required
        />
      </div>
    );
  };

  const handleReserve = () => {
    alert(`Reservation confirmed for ${reservationTime}!\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`);
  };

  return (
    <div className="reservation-page">
      <div className="restaurant-header">
        <h1 style = {{color: '#F4CE14'}}>Reservations</h1>
      </div>
      
      <div className="reservation-form">
        
        <div className="date-section">
          <h4>Date</h4>
          <DatePicker 
            selectedDate={reservationDate}
            onDateChange={setReservationDate}
          />
        </div>

        <div className="time-section">
          <h4>Time</h4>
          <div className="time-option">
            <input 
              type="radio" 
              id="morning" 
              name="time" 
              value="Morning (9:00 - 11:00 AM)"
              onChange={(e) => setReservationTime(e.target.value)}
            />
            <label htmlFor="morning">Morning (9:00 - 11:00 AM)</label>
          </div>
          <div className="time-option">
            <input 
              type="radio" 
              id="afternoon" 
              name="time" 
              value="Afternoon (12:00 - 4:00 PM)"
              onChange={(e) => setReservationTime(e.target.value)}
            />
            <label htmlFor="afternoon">Afternoon (12:00 - 4:00 PM)</label>
          </div>
          <div className="time-option">
            <input 
              type="radio" 
              id="night" 
              name="time" 
              value="Night (5:00 - 10:00 PM)"
              onChange={(e) => setReservationTime(e.target.value)}
            />
            <label htmlFor="night">Night (5:00 - 10:00 PM)</label>
          </div>
        </div>

      <div className="guest-counter-section">
          <div className="guest-counter-header">
            <h4>Number of Guests</h4>
            <div className="guest-counter">
              <button 
                className="counter-btn" 
                onClick={handleDecrement}
                aria-label="Decrease number of guests"
              >
                -
              </button>
              <span className="guest-count">{guests}</span>
              <button 
                className="counter-btn" 
                onClick={handleIncrement}
                aria-label="Increase number of guests"
              >
                +
              </button>
            </div>
          </div>
        </div>

        
        <div className="personal-information">
          <h4>Personal Information</h4>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <input 
              type="text" 
              id="occasion" 
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            />
          </div>

        </div>
        
        <button className="reserve-button" onClick={handleReserve}>Reserve</button>
      </div>
    </div>
  );
}

export default ReservationsPage;