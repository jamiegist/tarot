import { useState } from 'react';
import './App.css';
import TarotCard from './TarotCard.jsx';
import {tarotDeck} from './Deck';

function App() {

  const [drawnCard, setDrawnCard] = useState(null);
  const [isShuffling, setIsShuffling] = useState(false);

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * tarotDeck.length);
    setDrawnCard(tarotDeck[randomIndex]);
    setIsShuffling(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tarotDeck.length);
      setDrawnCard(tarotDeck[randomIndex]);
      setIsShuffling(false);
    }, 600); 
  };

  const resetDeck = () => {
    setDrawnCard(null);
    setIsShuffling(false);
  };
 
  return (
    <div className="app-container">
      <h1>Tarot Reader</h1>

      <div className="display-area">
        {isShuffling ? (
          <div className="shuffling-animation">• • •</div>
        ) : drawnCard ? (
          <div className='tarot-card-wrapper'>
            <TarotCard name={drawnCard.name} image={drawnCard.image} />
          </div>
        ) : (
          <p>Focus on your question and ask...</p>
        )}
      </div>

      <div className='controls'>
      <button onClick={drawCard} disabled={isShuffling} className="draw-button">
        {isShuffling ? "Shuffling..." : "Draw a Card"}
      </button>

      {drawnCard && (
          <button onClick={resetDeck} className="reset-button">
            Shuffle Again
          </button>
        )}
      </div>
    </div>
  );
}



export default App;