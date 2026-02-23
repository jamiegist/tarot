import { useState } from 'react';
import './App.css';
import TarotCard from './TarotCard.jsx';
import {tarotDeck} from './Deck';

function App() {
 
  return (
    <div className="app-container">
      <h1>Tarot Reading</h1>
      <div className="deck-grid">
        {tarotDeck.map((card) => (
          <TarotCard 
            key={card.id} 
            name={card.name} 
            image={card.image} 
          />
        ))}
      </div>
    </div>
  );
}


export default App;