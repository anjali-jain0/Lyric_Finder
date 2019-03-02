import React from 'react';
import {Link} from 'react-router-dom';

export class SingleTrack extends React.Component {
  
  render() {
    return (
    	<div className='col-md-6'>
    		<div className='card mb-4 shadow-sm'>
    			<div className='card-body'>
    			<h5>{this.props.track.artist_name}</h5>
    			<Link to={"lyrics/track" + {track.track_id}} className="btn btn-dark btn-block"><i className='fas fa-chevron-right'></i>View lyrics
    			</Link>
    			</div>
    		</div>
    	</div>
    
    );
  }
};

