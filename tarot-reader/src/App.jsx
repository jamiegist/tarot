import { useState } from 'react';
import './App.css';
import TarotCard from './TarotCard.jsx';
import {tarotDeck} from './Deck';

function App() {

  const [reading, setReading] = useState([{isPlaceholder: true }]);
  const [isShuffling, setIsShuffling] = useState(false);

  const showingPlaceholder = reading.length === 1 && reading[0].isPlaceholder;

  const drawReading = () => {
    setIsShuffling(true);

    setTimeout(() => {
      const picked = [...tarotDeck].sort(() => 0.5 - Math.random()).slice(0, 3).map(card => ({ ...card, isReversed: Math.random() > 0.5 }));
      setReading(picked);      
      setIsShuffling(false);
    }, 600); 
  };
 
  return (
    <div className="app-container">
      <h1>Daily Tarot Reading</h1>

      {showingPlaceholder && !isShuffling && (
        <p className="intro-text">Focus on a question for your reading and draw 3 cards...</p>
      )}

<div className="display-area">
  {isShuffling && (
    <div className="shuffling-deck">
      <div className="shuffle-card"></div>
      <div className="shuffle-card"></div>
      <div className="shuffle-card"></div>
    </div>
  )}

  {!isShuffling && reading.length > 0 && (
    <div className='tarot-card-wrapper'>
      {reading.map((card, i) => (
        <TarotCard key={i} {...card} isFlipped={card.isPlaceholder} />
      ))}
    </div>
  )}
</div>

      <div className='controls'>
      <button className='draw-button' onClick={drawReading} disabled={isShuffling}>
          {isShuffling ? "Picking..." : "Draw Your Cards"}
        </button>
        {reading.length === 3 && (
          <button className='reset-button' onClick={() => setReading([{ isPlaceholder: true }])}>Reset</button>
        )}
      </div>
    </div>
  );
}


export default App;