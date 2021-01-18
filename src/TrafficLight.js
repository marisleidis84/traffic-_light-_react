import React, { useState } from 'react'
import './TrafficLight.css';

const TrafficLight = () => {
    let [ color, setColor] = useState("");

    let red_selected = "";
            if (color === 'red') red_selected = 'selected';
    let yellow_selected = "";
        if (color === 'yellow') yellow_selected = 'selected';
    let green_selected = "";
        if (color === 'green') green_selected = 'selected';


    return (

        <>
            <div className='row1'>
                <div className='col-md-12'>
                    <div className='col1 bg-dark'></div>
                </div>
            </div>
            <div className='row2'>
                <div className='col-md-12'>
                    <div className='col2 bg-dark'>
                        <input className={'input rounded-circle bg-danger' + red_selected} type='button' onClick={()=>setColor(color='red')}  />
                        <input className={'input rounded-circle bg-warning' + yellow_selected} type='button' onClick={()=>setColor(color = 'yellow')}  />
                        <input className={'input rounded-circle bg-success' + green_selected} type='button' onClick={()=>setColor(color = 'green')} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrafficLight;