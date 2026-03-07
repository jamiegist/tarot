import React, { useState, useEffect } from 'react';
import './TarotCard.css';

function TarotCard({ name, image, arcana, isFlipped, isReversed, meaning, meaningReversed }) {
  const cardBack = "./images/card_back.png";

  return (
    <div className={`tarot-card ${isFlipped ? 'is-back' : ''} ${isReversed ? 'reversed' : ''}`}>
      <img 
        src={isFlipped ? cardBack : image} 
        alt={name} 
        className="card-image" 
      />
      {!isFlipped && (
        <div className="card-info">
          <h3>{name} {isReversed && "(Reversed)"}</h3>
          {/* Display the reversed meaning if applicable */}
          <p>{isReversed ? (meaningReversed || `Reversed: ${meaning}`) : meaning}</p>
        </div>
      )}
    </div>
  );
}

export default TarotCard;