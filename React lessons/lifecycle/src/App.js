import React, {useState, useEffect } from "react";
import LifeCycleMethods from "./components/life-cycle-methods";
import {cleanup} from "@testing-library/react";
function App() {
    const [timer, setTimer] = useState(50)
    const [salam, setSalam] = useState(50)
    // setInterval(()=>{setTimer(timer - 1)}, 1000)Re
    useEffect(()=>{
        const interval =
            setInterval(()=>{setTimer(timer - 1)}, 1000)
        return()=>clearInterval(interval)
    }, [timer])
    // useEffect(()=>console.log("useEffect"), [timer])
  return (
    <div>
        {/*<LifeCycleMethods/>*/}
        <button onClick={()=>setSalam(salam + 1)}>Salam</button>
        <p>Salam: {salam}</p>
        <p>Timer: {timer}</p>
        {/*<button onClick={()=>setTimer(timer - 1)}>Timer</button>*/}

    </div>
  );
}
export default App;
