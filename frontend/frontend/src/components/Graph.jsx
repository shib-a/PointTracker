import React, {useEffect, useState, useRef} from 'react';
function Graph({radius, points}) {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const height = canvas.height/2*0.9;
        const width = canvas.width/2*0.9;
        context.save();
        context.translate(canvas.height/2,canvas.width/2);
        // function convertToCanvas(x,y){
        //     return [(x*height)/5, (-y*height)/5];
        // }
        redraw(radius, context, height, width);
        context.restore();
    }, [radius])
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const height = canvas.height/2*0.9;
        const width = canvas.width/2*0.9;
        context.save();
        context.translate(canvas.height/2,canvas.width/2);
        // function convertToCanvas(x,y){
        //     return [(x*height)/5, (-y*height)/5];
        // }
        redraw(radius, context, height, width);
        context.restore();
    })
    // var hasSubmitted=false;
    // var r = height/5;
    function convertToCanvas(x,y, height) {
        return [(x*height)/5, (-y*height)/5];
    }
    function redraw(r, context, height, width, convertToCanvas) {
        let rad = height/5*(r);
        context.clearRect(-width/0.9,height/0.9,width/0.9,-height/0.9);
        context.clearRect(width/0.9,-height/0.9,-width/0.9,height/0.9);
        context.clearRect(-width/0.9,-height/0.9,width/0.9,height/0.9);
        context.clearRect(width/0.9,height/0.9,-width/0.9,-height/0.9);
        context.clearRect(0, 0, canvasRef.current.width,  canvasRef.current.height);
        drawCoords(context, height, width);
        drawLines(context, height, width);
        drawRect(rad, context, height);
        drawQuart(rad, context, height);
        drawTriangle(rad,context, height);
        drawPoints(height, context);
    }
// var r = document.getElementById("ch_r").value
    function drawCoords(context, height, width) {
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
    function drawLines(context, height, width) {
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
        context.fillText("5",width, 0);
        context.moveTo(width,5)
        context.lineTo(width,-5);
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

    function drawRect(radius, context, height){
        const r = radius;
        context.strokeStyle='rgb(20, 50, 150, 0.7)';
        context.fillStyle='rgb(20, 50, 100, 0.4)';
        context.strokeRect(-r/2,0,r/2,-r);
        context.fillRect(-r/2,0,r/2,-r);
        // console.log("in rect")
    }
    function drawTriangle(radius, context, height){
        const r = radius;
        context.strokeStyle='rgb(20, 50, 150, 0.7)';
        context.fillStyle='rgb(20, 50, 100, 0.4)';
        context.beginPath();
        context.moveTo(0,0);
        context.lineTo(r,0);
        context.lineTo(0,-r/2);
        context.stroke();
        context.fill();
    }
    function drawQuart(radius, context, height){
        const r = radius;
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
    function drawPoints(height, context){
        console.log(points);
        points.forEach((point) => {
            // if (cells[0] != null && cells[1] != null && r!==0) {
                    let x = point.x;
                    let y = point.y;
                    let ptCoords = convertToCanvas(x, y, height);
                    console.log(ptCoords[0],ptCoords[1]);
                    if(point === points[points.length-1.]){
                        if(point.hit) {
                            context.strokeStyle = 'green';
                            context.fillStyle = 'green';
                        }else{
                            context.strokeStyle = "red";
                            context.fillStyle = 'red';
                        }
                    } else {
                        context.strokeStyle = 'grey';
                        context.fillStyle = 'grey';
                    }
                context.beginPath();
                context.arc(ptCoords[0], ptCoords[1], 3, 0, 2 * Math.PI);
                context.fill();
                context.stroke();
                console.log("dots drawn")
        })

        // let table = document.getElementById("table");
        // let rows = table.getElementsByTagName('tr');
        // for(let i = 0; i<rows.length;i++){
            // let cells = rows[i].getElementsByTagName('td');
            // if (cells[0] != null && cells[1] != null && r!==0) {
            //     let x = cells[0].innerText;
            //     let y = cells[1].innerText;
            //     if(y===""){
            //         continue;}
            //     let ptCoords = convertToCanvas(x, y, height);
            //     console.log(ptCoords[0],ptCoords[1]);
            //     if(i===rows.length-1){
            //         if(cells[3].innerText==='true'){
            //             context.strokeStyle='green';
            //             context.fillStyle='green';
            //         }else{
            //             context.strokeStyle='red';
            //             context.fillStyle='red';
            //         }
            //     }
            //     else{
            //         context.strokeStyle='grey';
            //         context.fillStyle='grey'
            //     }
            //     context.beginPath();
            //     context.arc(ptCoords[0], ptCoords[1], 3, 0, 2 * Math.PI);
            //     context.fill();
                // context.stroke();
                // console.log("dots drawn")
            // }
        // }
    }
    function handleClick(){

    }
    return (
            <div className="graphDiv">
                <canvas onMouseDown={handleClick} ref={canvasRef} width={400} height={400} >
                </canvas>
            </div>
    )
}
export default Graph;