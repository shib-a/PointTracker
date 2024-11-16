import React, {useEffect, useState} from "react";
import axios from "axios";
import Slider from "../components/Slider";
import {Point} from "../utils/point"
import {useNavigate} from "react-router-dom";
import {getPoints} from "../utils/api";
import {Button} from "primereact/button";
import Spinner from "../components/Spinner";
import Graph from "../components/Graph";


function Main() {
    const [points, setPoints] = useState([]);
    const [point, setPoint] = useState(new Point());
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const [clearButtonClicked, setClearButtonClicked] = useState(false);
    const [x_val, setX_val] = useState(0);
    const [y_val, setY_val] = useState(0);
    const [r_val, setR_val] = useState(1);
    const [hit_val, setHit_val] = useState(false);

    // getData();
    const navigate = useNavigate();
    function logout(){
        navigate("/");
    }

    // async function getData() {
    //     const response = getPoints()
    //         .then(() =>{
    //             setPoints(response.map(point => new Point(point.x, point.y, point.r, point.hit)));
    //         })
    //         .catch(error => console.log(error))
    // }

    async function postData(obj_data) {
        const result = await axios.post('http://localhost:8080/api/points/post', obj_data);
        setR_val(result.data);
        return result.data;
    }

    async function clearData() {
        const result = await axios.delete('http://localhost:8080/api/clear');
        return result.data
    }
    function handleLogout(){
        localStorage.clear();
        navigate("/");
    }

    useEffect(() => {
        if (submitButtonClicked) {
            setSubmitButtonClicked(false);
            const obj_data = new Point(x_val, y_val, r_val);
            console.log(obj_data)
            postData(obj_data);
        }
    }, [submitButtonClicked, point, points, x_val, y_val, r_val]);
    useEffect(() => {
        if (clearButtonClicked) {
            setClearButtonClicked(false);
            clearData();
        }
    }, [clearButtonClicked, points]);
    useEffect( () => {
        async function getPts() {
            // const res = getPoints();
            const result = await axios.get("http://localhost:8080/api/points/get", {withCredentials: true})
                .then((response) => {
                    console.log(response.data);
                    const arr = []
                    console.log(arr);
                    response.data.forEach((point) => {
                        arr.push(new Point(point.x, point.y,point.hit));
                        console.log(point);
                    })
                    console.log(arr)
                    setPoints(arr);
                })
                .catch((error) => {
                    // console.error('GET Error:', error);
                });
        }
        getPts();
        console.log(points);
    }, [r_val])
    return (
        <html>
        <head>
            <title>web_4</title>
        </head>
        <body>
        <div className="base">
            <header className="main_header">
                <h1 id="h1">Мартышов Данила Викторович, Р3207, Вариант 409091</h1>
            </header>
            <Button onClick={handleLogout} type={"button"} children={"logout"}/>
            <form id="data">
                <div className="q_entry">
                    <div>
                        <label>Изменение X</label>
                    </div>
                    <Spinner min={-2} max={2} step={0.5} value={x_val} updateValueAction={(updatedVal) => setX_val(updatedVal)} />
                </div>
                <div className="q_entry">
                    <div><label>Изменение Y</label></div>
                    <Slider min={-3} max={5} value={y_val} step={0.05} onChange={(e) => {
                        setY_val(e.target.value);
                    }}/>
                </div>

                <div className="q_entry" id='r_choice'>
                    <div>
                        <label>Изменение R</label>
                    </div>
                    <Spinner min={-2} max={2} step={0.5} value={r_val} updateValueAction={(chval) => setR_val(chval)}/>
                </div>
                <Button onClick={() => {
                    setSubmitButtonClicked(true);
                }} children={"send"} type={"button"}/>
            </form>
            <div id="graph_div">
                <Graph radius = {r_val} points={points}>
                </Graph>
            </div>
            <Button onClick={() =>
                // setClearButtonClicked(true)
            {
                console.log(x_val);
                console.log(y_val);
                console.log(r_val);
            }
            } children={"clear"} type={"button"}/>
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
                { points.map((pt) => (
                    <tr>
                        <td>{pt.x}</td>
                        <td>{pt.y}</td>
                        <td>{pt.r}</td>
                        <td>{pt.hit ? "yes" : "no"}</td>
                    </tr>
                ))
                }
                </tbody>
            </table>
        </div>
        </body>
        </html>
    );
}
export default Main;