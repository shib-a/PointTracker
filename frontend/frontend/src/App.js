import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "./Button";
import Main from "./Main";
import {getValue} from "@testing-library/user-event/dist/utils";
import Slider from "./Slider";

class Point{
    constructor(x,y,r,hit) {
        // this.id=id;
        this.x=x;
        this.y=y;
        this.r=r;
        this.hit=hit;
    }
}

function App() {
    const [points, setPoints] = useState([]);
    const [point, setPoint] = useState(new Point());
    const [buttonClicked, setButtonClicked] = useState(false);
    const [x_val, setX_val] = useState(0);
    const [y_val, setY_val] = useState(0);
    const [r_val, setR_val] = useState(0);
    const [hit_val, setHit_val] = useState(false);
    useEffect(() => {
        if(buttonClicked) {
            const obj_data = {point};
            axios.post('http://localhost:8080/api/points',obj_data)
                .then(response => {
                    console.log(response.data);
                    let temp = response.data.map(point => new Point(point.x, point.y, point.r, point.hit));
                    setPoints(temp);
                    console.log(points)
                    setButtonClicked(false);
                    // points.forEach(point => console.log(point));
                })
                .catch(error => {
                    setButtonClicked(false);
                    console.error("error", error);
                });
        }}, [buttonClicked, point]);
        return(
            <html>
            <head>
                <title>web_4</title>
            </head>
            <body>
            <div className="base">
                <header className="main_header">
                    <h1 id="h1">Мартышов Данила Викторович, Р3207, Вариант 409091</h1>
                </header>
                <form id="data">
                    <div className="q_entry">
                        <div>
                            <label>Изменение X</label>
                        </div>
                        <Slider min={-5} max={5} value={x_val} step={0.25} onChange={(e)=>setX_val(e.target.value)}/>
                    </div>
                    <div className="q_entry">
                        <div><label>Изменение Y</label></div>
                        {/*<inputText type="text" name="ch_y" placeholder="-5..5" id="data_ch_y" value="#{pointBean.y}">*/}
                        {/*</inputText>*/}
                        <Slider min={-5} max={5} value={x_val} step={0.25} onChange={(e)=>setY_val(e.target.value)}/>
                    </div>
                    <div className="q_entry" id='r_choice'>
                        <div>
                            <label>Изменение R</label>
                        </div>
                        <Slider min={-5} max={5} value={x_val} step={0.25} onChange={(e)=>setR_val(e.target.value)}/>
                    </div>
                    <Button onClick={() => {
                        setButtonClicked(true);
                    }} children={"send"}/>
                </form>
                <div id="graph_div">
                    <canvas id="graph" width="400" height="400">
                    </canvas>
                </div>
                <dataTable id="table" value="#{pointListBean.pointList}" var="point">
                    <column>
                        <facet name="header" className="t_d">x</facet>
                        {/*#{point.x}*/}
                    </column>
                    <column>
                        <facet name="header" className="t_d">y</facet>
                        {/*#{point.y}*/}
                    </column>
                    <column>
                        <facet name="header" className="t_d">r</facet>
                        {/*#{point.r}*/}
                    </column>
                    <column>
                        <facet name="header" className="t_d">hit</facet>
                        {/*#{point.hit}*/}
                    </column>
                </dataTable>
                <form id="goBackForm">
                    {/*<commandButton id="redirectButton" value="Go back" action="index"/>*/}
                </form>
            </div>
            <outputScript  name="graph.js"/>
            </body>
            </html>
        );
  //   const [points, setPoints] = useState([]);
  //   const [buttonClicked, setButtonClicked] = useState(false);
  //   useEffect(() => {
  //       if(buttonClicked) {
  //           axios.get('http://localhost:8080/api/points')
  //               .then(response => {
  //                   console.log(response.data);
  //                   let temp = response.data.map(point => new Point(point.x, point.y, point.r, point.hit));
  //                   setPoints(temp);
  //                   console.log(points)
  //                   setButtonClicked(false);
  //                   // points.forEach(point => console.log(point));
  //               })
  //               .catch(error => {
  //                   setButtonClicked(false);
  //                   console.error("error", error);
  //               });
  //       }}, [buttonClicked, points]);
  //   const handleClick = () => {
  //       // Update state on button click
  //       setButtonClicked(true);
  //   };
  // return (
  //     <div>
  //         <button onClick={handleClick}>click me</button>
  //       <ul>
  //         {points.map(point => <li>{point.x},{point.y},{point.r},{point.hit}</li>)}
  //       </ul>
  //     </div>
  // );
}

export default App;
