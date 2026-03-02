import React, { useState, useEffect } from 'react';
import './TarotCard.css';

function TarotCard({ name, image, arcana, isFlipped, meaning }) {
  const cardBack = "./images/card_back.png";

  return (
    <div className={`tarot-card ${isFlipped ? 'is-back' : ''}`}>
      <img src={isFlipped ? cardBack : image} alt={name || "Tarot Card"} className="card-image" />
      {!isFlipped && (
        <div className="card-info">
          <h3>{name}</h3>
          <p>{meaning}</p>
        </div>
      )}
    </div>
  );
}

export default TarotCard;