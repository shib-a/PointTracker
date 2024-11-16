import React, {useEffect, useState, useRef} from 'react';
function Graph() {
    const canvasRef = useRef(null);
    var graph = document.getElementById("cab graph");
    var context = graph.getContext('2d');
    var height = graph.height/2*0.9;
    var width = graph.width/2*0.9;
    var length = height/2;
    var hasSubmitted=false;
    var r = height/5;
    context.translate(height/0.9,height/0.9);
    function convertToCanvas(x,y){
        return [(x*height)/5, (-y*height)/5];
    }
    drawCoords();
    drawLines();
    drawRect();
    drawTriangle();
    drawQuart();
    function redraw(){
        let inpField = document.getElementById("data:ch_r");
        let rad = height/5*(inpField.value);
        console.log(rad);
        context.clearRect(-width/0.9,height/0.9,width/0.9,-height/0.9);
        context.clearRect(width/0.9,-height/0.9,-width/0.9,height/0.9);
        context.clearRect(-width/0.9,-height/0.9,width/0.9,height/0.9);
        context.clearRect(width/0.9,height/0.9,-width/0.9,-height/0.9);
        context.clearRect(0, 0, graph.width, graph.height);
        drawCoords();
        drawLines();
        drawRect(rad);
        drawQuart(rad);
        drawTriangle(rad);
        // console.log("redrawn");
        drawPoints();
        // requestAnimationFrame(animate);
    }
// var r = document.getElementById("ch_r").value
    function drawCoords(){
        context.strokeStyle='black';
        context.lineWidth=2;
        context.beginPath();
        context.moveTo(0,-height);
        context.lineTo(0,height);
        context.stroke();
        context.beginPath();
        context.moveTo(-width,0);
        context.lineTo(width,0);
        context.stroke();
    }
    function drawLines(){
        context.strokeStyle='black';
        context.fillStyle='black'
        context.beginPath();
        context.fillText("-1",0, height/5);
        context.moveTo(5,height/5);
        context.lineTo(-5,height/5);
        context.stroke();

        context.beginPath();
        context.fillText("-2",0, 2*height/5);
        context.moveTo(5,2*height/5);
        context.lineTo(-5,2*height/5);
        context.stroke();

        context.beginPath();
        context.fillText("-3",0, 3*height/5);
        context.moveTo(5,3*height/5);
        context.lineTo(-5,3*height/5);
        context.stroke();

        context.beginPath();
        context.fillText("-4",0, 4*height/5);
        context.moveTo(5,4*height/5);
        context.lineTo(-5,4*height/5);
        context.stroke();

        context.beginPath();
        context.fillText("-5",0, height);
        context.moveTo(5,height);
        context.lineTo(-5,height);
        context.stroke();

        context.beginPath();
        context.fillText("1",0, -height/5);
        context.moveTo(5,-height/5);
        context.lineTo(-5,-height/5);
        context.stroke();

        context.beginPath();
        context.fillText("2",0, -2*height/5);
        context.moveTo(5,-2*height/5);
        context.lineTo(-5,-2*height/5);
        context.stroke();

        context.beginPath();
        context.fillText("3",0, -3*height/5);
        context.moveTo(5,-3*height/5);
        context.lineTo(-5,-3*height/5);
        context.stroke();

        context.beginPath();
        context.fillText("4",0, -4*height/5);
        context.moveTo(5,-4*height/5);
        context.lineTo(-5,-4*height/5);
        context.stroke();

        context.beginPath();
        context.fillText("5",0, -height);
        context.moveTo(5,-height);
        context.lineTo(-5,-height);
        context.stroke();

        context.beginPath();
        context.fillText("1",height/5, 0);
        context.moveTo(height/5,5)
        context.lineTo(height/5,-5);
        context.stroke();

        context.beginPath();
        context.fillText("2",2*height/5, 0);
        context.moveTo(2*height/5,5)
        context.lineTo(2*height/5,-5);
        context.stroke();

        context.beginPath();
        context.fillText("3",3*height/5, 0);
        context.moveTo(3*height/5,5)
        context.lineTo(3*height/5,-5);
        context.stroke();

        context.beginPath();
        context.fillText("4",4*height/5, 0);
        context.moveTo(4*height/5,5)
        context.lineTo(4*height/5,-5);
        context.stroke();

        context.beginPath();
        context.fillText("5",height, 0);
        context.moveTo(height,5)
        context.lineTo(height,-5);
        context.stroke();

        context.beginPath();
        context.fillText("-1",-height/5, 0);
        context.moveTo(-height/5,5)
        context.lineTo(-height/5,-5);
        context.stroke();

        context.beginPath();
        context.fillText("-2",-2*height/5, 0);
        context.moveTo(-2*height/5,5)
        context.lineTo(-2*height/5,-5);
        context.stroke();

        context.beginPath();
        context.fillText("-3",-3*height/5, 0);
        context.moveTo(-3*height/5,5)
        context.lineTo(-3*height/5,-5);
        context.stroke();

        context.beginPath();
        context.fillText("-4",-4*height/5, 0);
        context.moveTo(-4*height/5,5)
        context.lineTo(-4*height/5,-5);
        context.stroke();

        context.beginPath();
        context.fillText("-5",-height, 0);
        context.moveTo(-height,5)
        context.lineTo(-height,-5);
        context.stroke();
    }

    function drawRect(r){
        context.strokeStyle='rgb(20, 50, 150, 0.7)';
        context.fillStyle='rgb(20, 50, 100, 0.4)';
        context.strokeRect(-r/2,0,r/2,-r);
        context.fillRect(-r/2,0,r/2,-r);
        // console.log("in rect")
    }
    function drawTriangle(r){
        context.strokeStyle='rgb(20, 50, 150, 0.7)';
        context.fillStyle='rgb(20, 50, 100, 0.4)';
        context.beginPath();
        context.moveTo(0,0);
        context.lineTo(r,0);
        context.lineTo(0,-r/2);
        context.stroke();
        context.fill();
    }
    function drawQuart(r){
        context.strokeStyle='rgb(20, 50, 150, 0.7)';
        context.fillStyle='rgb(20, 50, 100, 0.4)';
        context.beginPath();
        context.moveTo(0,0);
        context.lineTo(0,r);
        context.bezierCurveTo(0,r,-r,r,-r,0);
        context.moveTo(0,0);
        context.stroke();
        context.fill();
    }
    function drawPoints(){
        let table = document.getElementById("table");
        let rows = table.getElementsByTagName('tr');
        for(let i = 0; i<rows.length;i++){
            let cells = rows[i].getElementsByTagName('td');
            if (cells[0] != null && cells[1] != null && r!==0) {
                let x = cells[0].innerText;
                let y = cells[1].innerText;
                if(y===""){
                    continue;}
                let ptCoords = convertToCanvas(x, y);
                console.log(ptCoords[0],ptCoords[1]);
                if(i===rows.length-1){
                    if(cells[3].innerText==='true'){
                        context.strokeStyle='green';
                        context.fillStyle='green';
                    }else{
                        context.strokeStyle='red';
                        context.fillStyle='red';
                    }
                }
                else{
                    context.strokeStyle='grey';
                    context.fillStyle='grey'
                }
                context.beginPath();
                context.arc(ptCoords[0], ptCoords[1], 3, 0, 2 * Math.PI);
                context.fill();
                // context.stroke();
                console.log("dots drawn")
            }
        }
    }
    function handleClick(){

    }
    return (
            <div className="graphDiv">
                <svg  xmlns="http://www.w3.org/2000/svg" onMouseDown={handleClick} version="1.1" width="24" height="24" viewBox="0 0 24 24">

                </svg>
            </div>
    )
}