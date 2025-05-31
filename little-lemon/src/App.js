import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ReservationsPage from './components/ReservationsPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showReservations, setShowReservations] = useState(false);

  return (
    <div className="app">
      <Header 
        onHomeClick={() => setShowReservations(false)} 
        onReservationsClick={() => setShowReservations(true)}
      />
      
      <main>
        {showReservations ? <ReservationsPage /> : <HomePage onReserveClick={() => setShowReservations(true)} />}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;