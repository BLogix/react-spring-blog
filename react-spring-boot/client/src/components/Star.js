import React from 'react';
import '../styles/index.css';

export const Star = (props) => (
    <div className={'star-wrapper'}>
        {props.grayscale
            ?
            <img className="pointer filter-grayscale" src={require('../resources/yellow-star.png')} alt={'star'}/>
            :
            <img className="pointer" src={require('../resources/yellow-star.png')} alt={'star'}/>
        }
    </div>
);