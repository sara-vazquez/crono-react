import React from 'react'
import './Card.css'
import Buttons from '../Buttons/Buttons'

const Card = ({ time, isPaused, onPauseResume, onRestart, onStartCountdown, color, highlight }) => {

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    const hrs = hours.toString().padStart(2, "0");
    const mins = minutes.toString().padStart(2, "0");
    const secs = secondsLeft.toString().padStart(2, "0");

    return `${hrs}:${mins}:${secs}`;
  };

  return (

    <div className="card">
        <h1 className="timer" style={{color: color}}>{formatTime(time)}{highlight}</h1>
        <Buttons 
        isPaused={isPaused}
        onPauseResume={onPauseResume}
        onRestart={onRestart}
        onStartCountdown={onStartCountdown} />
    </div>
  )
}

export default Card