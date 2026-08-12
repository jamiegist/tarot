import TarotCard from './TarotCard.jsx';

function ThreeCardSpread({showingPlaceholder, isShuffling, reading, positions}) {

    return(
    <>
        {showingPlaceholder && !isShuffling && (
        <p className="intro-text">Focus on a question or object for your reading and draw 3 cards. The first card represents the past,
        the second one represents the present, and the third card represents the future.</p>
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
        <TarotCard position={positions[i]} key={i} {...card} isFlipped={card.isPlaceholder} />
      ))}
    </div>
  )}
</div>
  </>
    );
}

export default ThreeCardSpread;