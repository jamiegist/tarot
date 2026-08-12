import { useState } from 'react';
import './App.css';
import { tarotDeck } from './Deck';
import ThreeCardSpread from './ThreeCardSpread.jsx';
import CelticCross from './CelticCross.jsx';

const SPREADS = {
  three: {
    label: 'Three Card Spread',
    component: ThreeCardSpread,
    cardCount: 3,
    positions: ['Past', 'Present', 'Future'],
  },
  celtic: {
    label: 'Celtic Cross',
    component: CelticCross,
    cardCount: 10,
    positions: [
      'Present', 'Challenge', 'Foundation', 'Recent Past', 'Crown',
      'Near Future', 'Attitude', 'Environment', 'Hopes/Fears', 'Outcome',
    ],
  },
};

function App() {
  const [spreadKey, setSpreadKey] = useState('three');
  const [reading, setReading] = useState([{ isPlaceholder: true }]);
  const [isShuffling, setIsShuffling] = useState(false);

  const currentSpread = SPREADS[spreadKey];
  const SpreadComponent = currentSpread.component;
  const showingPlaceholder = reading.length === 1 && reading[0].isPlaceholder;

  const drawReading = () => {
    setIsShuffling(true);
    setTimeout(() => {
      const picked = [...tarotDeck]
        .sort(() => 0.5 - Math.random())
        .slice(0, currentSpread.cardCount)
        .map(card => ({ ...card, isReversed: Math.random() > 0.5 }));
      setReading(picked);
      setIsShuffling(false);
    }, 600);
  };

  const handleSpreadChange = (key) => {
    if (key === spreadKey) return;
    setSpreadKey(key);
    setReading([{ isPlaceholder: true }]);
  };

  const getButtonLabel = () => {
    if (isShuffling) return "Picking...";
    if (showingPlaceholder) return "Draw Cards";
    return "Reshuffle";
  };

  return (
    <div className="app-container">
      <h1>Daily Tarot Reading</h1>
      <p>Welcome to your Daily Tarot Reader. Please select which type of reading you'd like to do.</p>

      <div className="spread-selector">
        {Object.entries(SPREADS).map(([key, spread]) => (
      <button
        key={key}
        className={`spread-option ${spreadKey === key ? 'active' : ''}`}
        onClick={() => handleSpreadChange(key)}
        disabled={isShuffling}
      >
        {spread.label}
      </button>
  ))}
</div>

      <SpreadComponent
        reading={reading}
        isShuffling={isShuffling}
        positions={currentSpread.positions}
        showingPlaceholder={showingPlaceholder}
      />



      <div className="controls">
        <button className='draw-button' onClick={drawReading} disabled={isShuffling}>
          {getButtonLabel()}
        </button>
        {reading.length === currentSpread.cardCount && (
          <button className="reset-button" onClick={() => setReading([{ isPlaceholder: true }])}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default App;