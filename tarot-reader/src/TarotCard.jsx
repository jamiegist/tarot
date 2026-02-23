import React, { useState, useEffect } from 'react';
import './TarotCard.css';

function TarotCard({ name, image, arcana }) {
  return (
    <div className="tarot-card">
      <div className="card-header">
        <span className="arcana-tag">{arcana}</span>
      </div>
      
      {/* If image is empty, it shows a placeholder */}
      <img 
        src={image || "./public/images/placeholder_card.png"} 
        alt={name} 
        className="card-image" 
      />
      
      <div className="card-info">
        <h3 className="card-name">{name}</h3>
      </div>
    </div>
  );
}

export default TarotCard;