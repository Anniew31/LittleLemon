import React from 'react';
import food from '../assets/restauranfood.jpg';
import salad from '../assets/greek salad.jpg';
import bruschetta from '../assets/Bruschetta.png';
import fish from '../assets/grilled fish.png';

function HomePage({ onReserveClick }) {
  return (
    <div className="home-page">
      <section className="banner">
        <h1 style={{ color: '#F4CE14', fontWeight: 'bold', fontSize:'min(max(3rem, 4vw), 3rem)'}}>Little Lemon</h1>
        <h2>Chicago</h2>
        <div className = "banner-container">
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Our dishes are crafted with fresh, locally-sourced ingredients and inspired by generations of culinary heritage. Whether you're enjoying a cozy dinner or celebrating a special occasion, we bring warmth, flavor, and a touch of innovation to every plate.</p>
          <img src = {food} alt = "food" style = {{width: '22rem', height: '15rem', marginRight: '1.5rem'}}></img>
        </div>
        <button className="button" onClick={onReserveClick}>Reserve a table</button>
      </section>
      
      <section className="menu">
        <h2>Order for Delivery</h2>
        <div className="categories">
          <span>Lunch</span>
          <span>Mains</span>
          <span>Desserts</span>
          <span>A La Carte</span>
          <span>Specials</span>
        </div>
        
        <div className="menu-items">
          <div className="menu-item">
            <h3>Greek Salad</h3>
              <div className = "menu-image">
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese.</p>
                <img src = {salad} alt = 'salad' style = {{width: '12rem', height: '7rem', marginRight: '1.5rem'}}></img>
              </div>
            <p className="price">$12.99</p>
          </div>
          
          <div className="menu-item">
            <h3>Bruschetta</h3>
              <div className="menu-image">
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic.</p>
                <img src = {bruschetta} alt = 'salad' style = {{width: '12rem', height: '7rem', marginRight: '1.5rem'}}></img>
              </div>
              <p className="price">$7.99</p>
          </div>
          
          <div className="menu-item">
            <h3>Grilled Fish</h3>
              <div className="menu-image">
                <p>Fresh, flaky fish grilled to perfection over an open flame, lightly seasoned with herbs and a hint of citrus</p>
                <img src = {fish} alt = 'salad' style = {{width: '12rem', height: '7rem', marginRight: '1.5rem'}}></img>
              </div>
            <p className="price">$20.99</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;