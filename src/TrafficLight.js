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
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='col1 bg-dark'></div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='col2 bg-dark'>
                        <div className={red_selected}>
                            <input className='input rounded-circle bg-danger' type='button' onClick={() => setColor(color = 'red')} />
                        </div>
                        <div className={yellow_selected}>
                            <input className='input rounded-circle bg-warning' type='button' onClick={() => setColor(color = 'yellow')} />
                        </div>
                        <div className={green_selected}>
                            <input className='input rounded-circle bg-success' type='button' onClick={() => setColor(color = 'green')} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrafficLight;