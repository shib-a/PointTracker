import {useState} from "react";
import {getValue} from "@testing-library/user-event/dist/utils";

function Main(){
    class Point{
        constructor(x,y,r,hit) {
            // this.id=id;
            this.x=x;
            this.y=y;
            this.r=r;
            this.hit=hit;
        }
    }
    const [points, setPoints] = useState([]);
    const [point, setPoint] = useState(new Point());
    const [buttonClicked, setButtonClicked] = useState(false);
    const [x_val, setX_val] = useState(0);
    const [y_val, setY_val] = useState(0);
    const [r_val, setR_val] = useState(0);
    const [hit_val, setHit_val] = useState(false);
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
                    <slider id="x_slider" for="ch_x" minValue="-5.0" maxValue="5.0" step="1" onChange={(e)=>setX_val(getValue())}/>
                    <inputText id="ch_x" value={x_val}>
                    </inputText>
                </div>
                <div className="q_entry">
                    <div><label>Изменение Y</label></div>
                    <inputText type="text" name="ch_y" placeholder="-5..5" id="data_ch_y" value="#{pointBean.y}">
                    </inputText>
                </div>
                <div className="q_entry" id='r_choice'>
                    <div>
                        <label>Изменение R</label>
                    </div>
                    <slider id="ch_r_slider" onSlideEnd="redraw()" for="ch_r" minValue="1" maxValue="4" step="0.25">
                    </slider>
                    <inputText id="ch_r" value="#{pointBean.r}">
                    </inputText>
                </div>
                <commandButton id="submit_button" value="Submit" action="#{pointListBean.handle()}">

                </commandButton>
                <commandButton id="clean_button" value="Clean" action="#{pointListBean.clean()}">

                </commandButton>
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
);}
export default Main;