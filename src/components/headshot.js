import React from 'react';
import { Image } from 'react-bootstrap';

export const Headshot = ({width, height, photo, color}) => {
    return (
        <div style={{position:"relative",width: width+25,height: height+25}}>
            <Image src={photo} className="me-img" alt="Headshot" style={{width:width,height:height}} />
            <div className="me-img-behind" style={{border:`solid ${color} 1px`,width:width,height:height}}>
            </div>
        </div>
    )
};