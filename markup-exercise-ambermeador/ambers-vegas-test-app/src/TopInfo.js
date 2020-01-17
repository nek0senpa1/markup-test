import React from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMapMarker, faPhone, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import StarRatings from 'react-star-ratings';

function TopInfo(props) {

    // console.log('top info', props)
     
    if(props.name === undefined) {
        return(
            <p>Loading...</p>
        )
    } else {
        return(
            <div className="TopBar">
                
                <div className="TopBar1">
                    <div>
                        <h1>{props.name.toUpperCase()} <StarRatings rating={props.stars} numberOfStars={5} name='rating' starDimension="16px" starSpacing="2px" /></h1>
                        
                    </div>
                    <div className="InfoStrip">
                        
                        <p><FontAwesomeIcon icon={faMapMarker} />
                        {props.location.areaName}</p>
                    
                    
                        <p><FontAwesomeIcon icon={faPhone} />
                        {props.phone}</p>
                    
                    
                        <p><FontAwesomeIcon icon={faThumbsUp} />
                        Best Price Guarantee</p>
                        
                    </div>
                </div>

                <div className="TopBar2">
                    <h1>${props.price}</h1>
                    <p>HOTEL ROOMS FROM</p>
                </div>

            </div>
        )
    }

  
}

export default TopInfo;
