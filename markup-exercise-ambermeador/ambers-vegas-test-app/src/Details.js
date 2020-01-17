import React from 'react';
import './App.css';
import AnimateHeight from 'react-animate-height';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'


class Details extends React.Component {
    state = {
      height: 200,
    };
  
    toggleHeight = () => {
      const { height } = this.state;
  
      this.setState({
        height: height === 200 ? 'auto' : 200,
      });
    };
  
    render() {
      const { height } = this.state;
  
      return (
        <div>
            
          <AnimateHeight
            duration={ 500 }
            height={ height } 
          >
              <div className="content2" >
                {this.props.deets.map( info => {
                return (
                    <div className="breakdown">
                        <h1>{info.label}:</h1>
                        <p>{info.value}</p>
                    </div>
                )
                })}
        
            </div>
            
          </AnimateHeight>

          <button className="expBut" onClick={ this.toggleHeight }>
            { height === 200 ? <p> <FontAwesomeIcon icon={faChevronCircleDown} /> VIEW MORE TEXT</p> : <p><FontAwesomeIcon icon={faChevronCircleUp} /> VIEW LESS TEXT</p> }
          </button>
        </div>
      );
    }
  }

export default Details;