// src/pages/Game.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Game.css';
import { promptDecks } from '../data/prompts';

export default function Game() {
  const location = useLocation();
  const { decks } = location.state || {};

  let activeDecks = decks || [];
  if (activeDecks.includes('Wildcard')) {
    activeDecks = ['Friendship', 'Love', 'Family', 'Self', 'Spicy'];
  }

  const prompts = activeDecks.flatMap(deck => promptDecks[deck] || []).slice(0, 3);
  const colors = ['card-orange', 'card-blue', 'card-red'];

  const [cardIndex, setCardIndex] = useState(0);

  const handleFlip = () => {
    setCardIndex((prev) => (prev + 1) % prompts.length);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') {
        handleFlip();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="game-container">
      <h2 className="game-title">TRUTH/TRUTH</h2>

      <div className="card-stack" onClick={handleFlip}>
        {[2, 1, 0].map((i) => (
          <div
            key={i}
            className={`card ${colors[i]} ${cardIndex === i ? 'active' : ''}`}
            style={{ zIndex: cardIndex === i ? 4 : i + 1 }}
          >
            <div className="burst">{prompts[i] || '...'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}