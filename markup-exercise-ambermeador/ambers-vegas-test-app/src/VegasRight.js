import React from 'react';
import './App.css';
import TopInfo from './TopInfo';
import PageAndNav from './PageAndNav';


function VegasRight(props) {

    // console.log('vegas right', props.info)

    return(
        <div>
            <div>
                <TopInfo 
                name={props.info.name}
                stars={props.info.starRating}
                phone={props.info.phoneNumber}
                price={props.info.price}
                location={props.info.location}
                />
            </div>
            <div>
                <PageAndNav hotelinfo={props.info} />
            </div>
        </div>
    )


  
}

export default VegasRight;
