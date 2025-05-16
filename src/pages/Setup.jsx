import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Setup.css';

export default function Setup() {
  const [selectedDecks, setSelectedDecks] = useState([]);
  const navigate = useNavigate();

  const toggleDeck = (deck) => {
    if (deck === 'Wildcard') {
      setSelectedDecks((prev) =>
        prev.includes('Wildcard') ? [] : ['Wildcard']
      );
      return;
    }

    if (selectedDecks.includes('Wildcard')) return;

    setSelectedDecks((prev) =>
      prev.includes(deck) ? prev.filter((d) => d !== deck) : [...prev, deck]
    );
  };

  const handleNext = () => {
    if (selectedDecks.length === 0) {
      alert('Please select at least one deck.');
      return;
    }

    navigate('/game', {
      state: {
        decks: selectedDecks
      }
    });
  };

  return (
    <div className="setup-container">
      <div className="setup-box">
        <h2>CHOOSE DECK</h2>
        <div className="deck-group">
          {['Friendship', 'Love', 'Family', 'Self', 'Spicy', 'Wildcard'].map((deck) => (
            <button
              key={deck}
              className={selectedDecks.includes(deck) ? 'selected' : ''}
              onClick={() => toggleDeck(deck)}
            >
              {deck}
            </button>
          ))}
        </div>

        <button className="next-button" onClick={handleNext}>➤</button>
      </div>
    </div>
  );
}
