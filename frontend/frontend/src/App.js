import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "./Button";
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
    const [buttonClicked, setButtonClicked] = useState(false);
    useEffect(() => {
        if(buttonClicked) {
            axios.get('http://localhost:8080/api/points')
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
        }}, [buttonClicked, points]);
    const handleClick = () => {
        // Update state on button click
        setButtonClicked(true);
    };
  return (
      <div>
          <button onClick={handleClick}>click me</button>
        <ul>
          {points.map(point => <li>{point.x},{point.y},{point.r},{point.hit}</li>)}
        </ul>
      </div>
  );
}

export default App;
