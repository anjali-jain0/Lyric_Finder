import React from 'react';
import Axios from 'axios';
import {Spinner} from './spinner';
import {Link} from 'react-router-dom';

class Lyrics extends React.Component {

	constructor(props){
		super(props);
		this.state={
			id:this.props.match.params.id,
			lyric:'',
			track_list:''
		}
	}
   
    componentWillMount(){
        Axios.get('https://musicdemons.com/api/v1/song/' + this.state.id + '/artists')
	    .then((response) => {
	      console.log(response.data);
	      this.setState({track_list:response.data[0]});
	    })
	    .catch((err) => {
	      console.log(err);
	    });

	    Axios.get('https://musicdemons.com/api/v1/song/' + this.state.id + '/lyrics')
	    .then((response) => {
	      console.log(response.data);
	      this.setState({lyric:response.data});
	    })
	    .catch((err) => {
	      console.log(err);
	    });
}

  render() {

    	const track=this.state.track_list;
    	const lyric=this.state.lyric;
    	if(track===undefined || lyric===undefined || track.length===0 || lyric===null){
    		return <Spinner />;
    	}
   		else{
    return (
      <React.Fragment>
      <Link to='/' className='btn btn-dark btn-sm mb-4'>Go Back</Link>
      <div className='card'>
      <h5 className='card-header'>
      	By <span className='text-secondary'>{track.name} </span>
      </h5>
      <div className='card-body'>
      	<p className='card-text'>{lyric}</p>
      </div>
      </div>

      <ul className='list-group mt-3'>
      	<li className='list-group-item'>
      		<strong>Artist Id</strong>:{track.id}
      	</li>
      	<li className='list-group-item'>
      		<strong>Artist Started On</strong>:{track.year_started}
      	</li>
      	<li className='list-group-item'>
      		<strong>Quit On</strong>:{track.year_quit}
      	</li>
      </ul>
      </React.Fragment>
    );
  }}
};

export default Lyrics;