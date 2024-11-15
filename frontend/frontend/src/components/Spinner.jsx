import React, {useState} from 'react';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea";


function Spinner({min, max, step, value, onChange}) {
    const [val, changeVal] = useState(value);


    function handleInc() {
        if (val < max) {
            changeVal(val + step);
            value = val;
            return val;
        }
        value = val;
        return val;
    }
    function handleDec() {
        if (val > min) {
            changeVal(val - step);
            value = val;
            return val;
        }
        value = val;
        return val;
    }
    return(
        <div className="spinnerDiv">
            <Button type={"button"} onClick={handleDec} className="decButton" children={"-"}/>
            <InputText value={value}/>
            <Button type={"button"} onClick={handleInc} className="incButton" children={"+"}/>
        </div>
    )
}
export default Spinner;