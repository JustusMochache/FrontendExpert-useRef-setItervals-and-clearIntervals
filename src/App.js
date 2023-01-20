
import { useRef, useState } from 'react';



export default function App(){

  const [ timepiece, setTimePiece ] = useState(0);

  const timerID = useRef(null)

  const startTimer = () => {
    timerID.current = setInterval(() =>{
      setTimePiece(currSecs => currSecs +1)
    }, 1000);
  }


   const stopTimer = () =>{
    clearInterval(timerID.current);
   }
  



  return(
    <>
    <div>
      <button onClick={startTimer} >Start</button>


      <button onClick={stopTimer} >Stop</button>
      <p>{timepiece}</p>
    </div>
    </>
  );
} 