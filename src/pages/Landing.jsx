// src/pages/Landing.jsx
import React from 'react';
import './Landing.css';
import { useNavigate } from 'react-router-dom';

export default function Landing({ playerCount }) {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="decor dice-top-left" />
      <div className="decor dice-top-right" />
      <div className="decor card-bottom-right" />

      <div className="landing-box">
        <h1>
          <span className="title-bold">Truth</span>
          <span className="title-slash"> / </span>
          <span className="title-colored">Truth</span>
        </h1>
        <p className="subtitle">Ask better questions. Get real answers.</p>

        <button className="start-button" onClick={() => navigate('/setup')}>
          START
        </button>

        <p className="player-count">
          {playerCount} people have played Truth or Truth
        </p>
      </div>
    </div>
  );
}