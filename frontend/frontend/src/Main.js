import React, {useEffect, useState} from "react";
import {getValue} from "@testing-library/user-event/dist/utils";
import axios from "axios";
import Slider from "./Slider";
import Button from "./Button";


const eventSource = new EventSource('/api/points/stream');
eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Received update:', data);
};
function Main(){
    const [points, setPoints] = useState([]);
    const [point, setPoint] = useState(new Point());
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const [clearButtonClicked, setClearButtonClicked] = useState(false);
    const [x_val, setX_val] = useState(0);
    const [y_val, setY_val] = useState(0);
    const [r_val, setR_val] = useState(0);
    const [hit_val, setHit_val] = useState(false);

    async function getData(){
        // return axios.get('http://localhost:8080/api/get');
        const response = await axios.get('http://localhost:8080/api/get');
        let result = response.data;
        setPoints(result.map(point => new Point(point.x, point.y, point.r, point.hit)))
    }
    async function postData(obj_data){
        const result = await axios.post('http://localhost:8080/api/post',obj_data);
        return result.data;
    }

    useEffect(()=> {
        getData();
        console.log(points)
        const eventSource = new EventSource("http://localhost:8080/sse/updates")
        eventSource.addEventListener('update', (event) => {
            if(event.data===true){
                getData();
            }
        })
    }, [points]);
    useEffect(() => {
        if(submitButtonClicked) {
            setSubmitButtonClicked(false);
            const obj_data = new Point(x_val,y_val,r_val);
            console.log(obj_data)
            postData(obj_data);
        }}, [submitButtonClicked, point, points, x_val, y_val, r_val]);
    useEffect(() => {
        if(clearButtonClicked) {
            setClearButtonClicked(false);
            setPoints([]);
        }
    }, [clearButtonClicked, points]);
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
                    <Slider min={-5} max={5} value={y_val} step={0.25} onChange={(e)=> {
                        setY_val(e.target.value)
                        console.log(y_val)
                    }}/>
                </div>
                <div className="q_entry" id='r_choice'>
                    <div>
                        <label>Изменение R</label>
                    </div>
                    <Slider min={-5} max={5} value={r_val} step={0.25} onChange={(e)=>setR_val(e.target.value)}/>
                </div>
                <Button onClick={() => {
                    setSubmitButtonClicked(true);
                }} children={"send"} type={"button"}/>
            </form>
            <div id="graph_div">
                <canvas id="graph" width="400" height="400">
                </canvas>
            </div>
            <Button onClick={setSubmitButtonClicked(true)} children={"clear"} type={"button"}/>
            <table>
                <thead>
                <tr>
                    <th>x</th>
                    <th>y</th>
                    <th>r</th>
                    <th>hit?</th>
                </tr>
                </thead>
                <tbody>
                {points.map((pt) => (
                    <tr>
                        <td>{pt.x}</td>
                        <td>{pt.y}</td>
                        <td>{pt.r}</td>
                        <td>{pt.hit ? "yes" : "no"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <form id="goBackForm">
                {/*<commandButton id="redirectButton" value="Go back" action="index"/>*/}
            </form>
        </div>
        <outputScript  name="graph.js"/>
        </body>
        </html>
    );
}
export default Main;