import React from 'react';
import {NavLink} from 'react-router-dom';

class Track2 extends React.Component {

	  render() {

	  		return (

	  			<React.Fragment>
               <div className='col-md-6'>
               <div className='card mb shadow-sm'>
               <div className='card-body'>
               <h5>{this.props.track.name}</h5>
               <p className='card-text'>
                <strong><i className='fas fa-play'>  </i>Track</strong>: {this.props.track.text}
                <br/>
                <strong><i className='fas fa-compact-disc'></i>Duration</strong>: {this.props.track.year_started}
               </p>
                <NavLink className='btn btn-dark btn-block' to={'/lyrics/track/' + this.props.track.id} >
                <i className='fas fa-chevron-right'></i>View Lyrics</NavLink>
               </div>
               </div>
               </div>
          </React.Fragment>

	  			);
	
	}
}

export default Track2;
