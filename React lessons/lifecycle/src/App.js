import React, {useState, useEffect, useRef} from "react";
import LifeCycleMethods from "./components/life-cycle-methods";
import {cleanup} from "@testing-library/react";
function App() {
    // #region useEffect
    // const [timer, setTimer] = useState(50)
    // const [salam, setSalam] = useState(50)
    // setInterval(()=>{setTimer(timer - 1)}, 1000)
    // useEffect(()=>{
    //     const interval =
    //         setInterval(()=>{setTimer(timer - 1)}, 1000)
    //     return()=>clearInterval(interval)
    // }, [])
    // useEffect(()=>console.log("useEffect"), [timer])
    //#endregion

    const[color, setColor] = useState("black")
    const changeColor = useRef(null)
    const change = ()=>{
        document.body.style.backgroundColor = changeColor.current.value;
        setColor(changeColor.current.value)
    }

  return (
    <div>
        {/*#region useEffect*/}
        {/*<LifeCycleMethods/>*/}
        {/*<button onClick={()=>setSalam(salam + 1)}>Salam</button>*/}
        {/*<p>Salam: {salam}</p>*/}
        {/*<br/>*/}
        {/*<p>Timer: {timer}</p>*/}
        {/*<button onClick={()=>setTimer(timer - 1)}>Timer</button>*/}
        {/*#endregion*/}

        <input type="text" ref={changeColor} onChange={change} />
        <p>{color}</p>

    </div>
  );
}
export default App;
