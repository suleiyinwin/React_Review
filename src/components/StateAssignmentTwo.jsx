import { useState } from "react";

function StateAssignmentTwo(){
    const [state,setState]=useState([]);
    const generateNumber=()=>{
        const newNumber= Math.floor(Math.random()*10);
        setState([...state,newNumber])
    }
    return(
        <section>
            <button onClick={generateNumber}>
                Click Me!
            </button>
            <ul>
                {
                    state.map((e,index)=>{
                        return <li key={index}>{e}<br/></li>
                        
                    })
                }
            </ul>
        </section>
    )
}
export default StateAssignmentTwo;