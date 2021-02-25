import React, { useState } from 'react'
import './TrafficLight.css';

const TrafficLight = () => {
    let [color, setColor] = useState("");

    let red_selected = "";
    if (color === 'red') red_selected = 'selected';
    let yellow_selected = "";
    if (color === 'yellow') yellow_selected = 'selected';
    let green_selected = "";
    if (color === 'green') green_selected = 'selected';


    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-12'>
                    <div className='col1 bg-dark'></div>
                </div>
            </div>


            <div className="container"> 
                <div className='row' style={{"width": "170px"}}>
                    <div className='col-md-12 col2 bg-dark'>
                        <div className={red_selected}>
                            <div className='myClass rounded-circle bg-danger' onClick={() => setColor(color = 'red')}></div>
                        </div>
                        <div className={yellow_selected}>
                            <div className='myClass rounded-circle bg-warning' onClick={() => setColor(color = 'yellow')}></div>
                        </div>
                        <div className={green_selected}>
                            <div className='myClass rounded-circle bg-success' onClick={() => setColor(color = 'green')}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrafficLight;