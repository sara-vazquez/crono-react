import React from 'react'
import './Buttons.css'



const Buttons = ({ isPaused, onPauseResume, onRestart, onStartCountdown}) => {
   
    return(
        <div className="buttons">
        <button className="btnPauseResume" onClick={onPauseResume}>{isPaused ? 'Iniciar' : 'Pausa'}</button>
        <button className="btnRestart" onClick={onRestart}>Reiniciar</button>
        <button className="btnCountDown" onClick={onStartCountdown}>Cuenta atrás</button>
        </div>
    )
}

export default Buttons

/* Mínimos:



Nivel intermedio
• Agregar un sonido al alcanzar un determinado tiempo (Un beep cuando llega a 10 segundos)
• Cambiar el color del temporizador según el tiempo: o Menos de 10 segundos.

Nivel desafío extremo
• Añadir un temporizador de cuenta regresiva. Que empiece en 30 segundos y llegue a 0.
• Mostrar un mensaje dinámico según el tiempo. Por ejemplo: “¡Vamos bien!” si es menor de 10, “¡Casi, casi!” si es entre 10 y 20, “¡Tiempo agotado!” si pasa de 20 segundos.
• ¡Personalízalo a tu gusto! */