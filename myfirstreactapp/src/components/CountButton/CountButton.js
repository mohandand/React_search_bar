import React, { useState} from 'react'
import "./CountButton.css"
const CountButton = (props) => {

    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
            setCurrentCount(currentCount + props.increamentBy)
    }
    const buttonStyle = {
        background: props.buttoncolcor,
        borderRadius: "10px",
    }
    
    return (
        <div className={"countdisply"}>
            <button onClick={handleClick} style = {buttonStyle}>
               {props.increamentBy}
             </button>   
             <div>{currentCount}</div>
       </div>
    )
}

export default CountButton

/* we can also    */