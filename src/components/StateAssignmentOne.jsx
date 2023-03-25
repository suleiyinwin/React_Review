import { useState } from "react"

function StateAssigmmentOne(){
    const[state,setState]=useState(0);
    const clickHandler=()=>{
        setState(state+1);
    }
    return(
        <section>
            <button onClick={clickHandler}>
                {state}
            </button>
        </section>
    )
}
export default StateAssigmmentOne;