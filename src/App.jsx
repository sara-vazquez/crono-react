import React, { useState, useEffect } from 'react'
import Card from './components/Card/Card'
import './App.css'
import sound from './assets/countdown.mp3'

function App() {
  const [time, setTime] = useState(0)
  const [isPaused, setIsPaused] = useState(true)
  const [color, setColor] = useState('#e2f26b')
  const [countdown, setCountdown] = useState(false)
  const [countdownAt, setCountdownAt] = useState(30)
  const audio = new Audio(sound)

  const handleStartCountdown = () => {
    setCountdown(true)
    setIsPaused(false)
    setTime(countdownAt)
  }

  useEffect(() => {
    if(!countdown || isPaused) return
    const interval = setInterval(() => {
      setTime(previous => {
        const newTime = previous - 1

        if (newTime === 9) {
          audio.play()
        }

        if (newTime <= 0) {
          clearInterval(interval)
          setIsPaused(true)
          setCountdown(false)
          return 0
        }

        return newTime
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [countdown, isPaused])

  useEffect(() => {
    let interval = null
    if (!isPaused && !countdown) {
      interval = setInterval(() => {
        setTime((previous) => {
          const newTime = previous + 1
          
          if (newTime >=10) {
            setColor('#f2f2f2')
          } else {
            setColor('#e2f26b')
          }

          return newTime
        })
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return() => clearInterval(interval)

  }, [isPaused])

  const handlePauseResume = () => {
    setIsPaused(previous => !previous)
  }

  const handleRestart = () => {
    setTime(0)
    setIsPaused(true)
  }
  


  return (
    <>
      <h1>Cronómetro ⏱</h1>
      <div className="crono">
      <Card time={time} 
      highligh={time >= 10}
      isPaused={isPaused}
      onPauseResume={handlePauseResume}
      onRestart={handleRestart}
      onStartCountdown={handleStartCountdown}
      color={color}/>
      </div>
    </>
  )
}

export default App
