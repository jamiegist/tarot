import { useState } from 'react';
import './App.css';
import TarotCard from './TarotCard.jsx';
import {tarotDeck} from './Deck';
import ThreeCardSpread from './ThreeCardSpread.jsx';

function App() {

  const [reading, setReading] = useState([{isPlaceholder: true }]);
  const [isShuffling, setIsShuffling] = useState(false);

  const positions = ["Past", "Present", "Future"];

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
      <p>Welocme to your Daily Tarot Reader. Please select which type of reading you'd like to do.</p>
      <ThreeCardSpread />

      <div className='controls'>
      <button className='draw-button' onClick={drawReading} disabled={isShuffling}>
          {isShuffling ? "Picking..." : "Draw Cards"}
        </button>
        {reading.length === 3 && (
          <button className='reset-button' onClick={() => setReading([{ isPlaceholder: true }])}>Reset</button>
        )}
      </div>
    </div>
  );
}


export default App;