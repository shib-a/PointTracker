import React, {useState} from "react";
function Slider({min,max,step,value,onChange}) {
    return(
        <div className="slider_div">
            <input type="range" min={min} max={max} step={step} value={value} onChange={onChange} className="slider"/>
            <span className="slider_label">{value}</span>
        </div>
    );
};
export default Slider;