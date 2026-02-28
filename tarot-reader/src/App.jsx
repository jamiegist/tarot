import { useState } from 'react';
import './App.css';
import TarotCard from './TarotCard.jsx';
import {tarotDeck} from './Deck';

function App() {

  const [reading, setReading] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);

  const drawReading = () => {
    setIsShuffling(true);

    setTimeout(() => {
      const shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
      
      const threeCards = shuffled.slice(0, 3);
      
      setReading(threeCards);
      setIsShuffling(false);
    }, 600); 
  };

  const resetDeck = () => {
    setReading([]);
    setIsShuffling(false);
  };
 
  return (
    <div className="app-container">
      <h1>Daily Tarot Reading</h1>

    <div className="display-area">
      {isShuffling ? (
        <div className="shuffling-animation">• • •</div>
      ) : reading.length > 0 ? (
        <div className='tarot-card-wrapper'>
          {reading.map((card, index) => (
            <TarotCard key={index} name={card.name} image={card.image} />
          ))}
        </div>
        ) : (
          <p>Focus on a question for your reading and draw 3 cards...</p>
        )}
      </div>

      <div className='controls'>
      <button onClick={drawReading} disabled={isShuffling} className="draw-button">
        {isShuffling ? "Picking Your Cards..." : "Draw Your Cards"}
      </button>

     {reading.length > 0 && !isShuffling && (
          <button onClick={resetDeck} className="reset-button">
            Shuffle Again
          </button>
        )}
      </div>
    </div>
  );
}



export default App;