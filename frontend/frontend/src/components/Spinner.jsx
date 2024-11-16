import React, {useEffect, useState} from 'react';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";


function Spinner({min, max, step, value, updateValueAction}) {
    const [val, changeVal] = useState(value);

    function handleInc() {
        if (val < max) {
            changeVal(val + step);
            // value = val;
            updateValueAction(val)
        }
        updateValueAction(val)
    }
    function handleDec() {
        if (val > min) {
            changeVal(val - step);
            // value = val;
            updateValueAction(value)
        }
        // value = val;
    }
    useEffect(() => {
        updateValueAction(val);
    },[val, updateValueAction]);
    return(
        <div className="spinnerDiv">
            <Button type={"button"} onClick={handleDec} className="decButton" children={"-"}/>
            <InputText value={val}/>
            <Button type={"button"} onClick={handleInc} className="incButton" children={"+"}/>
        </div>
    )
}
export default Spinner;