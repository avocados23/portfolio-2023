import React from 'react';
import { Image } from 'react-bootstrap';

export const Headshot = ({width, height, photo, color, md}) => {
    return (
        <div style={{position:"relative",width: md ? width : width+25,height: md ? height: height+25}}>
            <Image src={photo} className="me-img" alt="Headshot" style={{width:md ? width - 50  : width,height:md ? height - 50 : height}} />
            <div className="me-img-behind" style={{border:`solid ${color} 1px`,width:md ? width - 50 : width,height:md ? height - 50 : height}}>
            </div>
        </div>
    )
};