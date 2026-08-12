import TarotCard from './TarotCard.jsx';

const AREA_BY_INDEX = [
  'present-the-self', 'problem', 'past', 'future', 'conscious',
  'unconscious', 'your-influence', 'external-influence', 'hopes-fears', 'outcome',
];

function CelticCross({ reading, isShuffling, positions, showingPlaceholder }) {
  const hasFullReading = reading.length > 1;

  return (
    <>
      {showingPlaceholder && !isShuffling && (
        <p className="intro-text">
          Focus on a question or situation and draw 10 cards for a Celtic Cross reading —
          a deeper look at your past, present, challenges, and possible outcomes.
        </p>
      )}

      <div className="display-area celtic-cross-area">
        {isShuffling && (
          <div className="shuffling-deck">
            <div className="shuffle-card"></div>
            <div className="shuffle-card"></div>
            <div className="shuffle-card"></div>
          </div>
        )}

        {!isShuffling && !hasFullReading && reading[0] && (
          <div className="celtic-cross-placeholder">
            <TarotCard isFlipped={reading[0].isPlaceholder} />
          </div>
        )}

        {!isShuffling && hasFullReading && (
          <div className="celtic-cross-grid">
            {reading.map((card, i) => {
              if (!positions[i] || !AREA_BY_INDEX[i]) return null;
              return (
                <div className={`area-${AREA_BY_INDEX[i]}`} key={i}>
                  <TarotCard
                    position={positions[i]}
                    {...card}
                    isFlipped={card.isPlaceholder}
                    isCrossing={i === 1}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default CelticCross;