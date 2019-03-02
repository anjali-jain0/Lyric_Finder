import React from 'react';
import Axios from 'axios';

class Search extends React.Component {
	constructor(){
		super();
		this.state={
			tracktitle:'',
		}
	}

	handleChange(e){
		this.setState({[e.target.name]:e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();

		Axios.get('https://musicdemons.com/api/v1/song/37/artists')
	    .then((response) => {
	      console.log(response.data);
	      this.props.song(response.data);
	     
	    })
	    .catch((err) => {
	      console.log(err);
	    });
	  }


  render() {
    return (

    	<React.Fragment>
    		<div className='card card-body mb-4 p-4'>
    			<h1 className='display-4 text-center'>
    			<i className='fas fa-music'></i>Search For A Song
    			</h1>
    			<p className='lead text-center'>Get the lyrics for any song</p>
    			<form onSubmit={this.handleSubmit.bind(this)} >
    				<div className='form-group'>
    				<input 
    				type="text"
    				className='form-control form-control-lg'
    				placeholder='Song title...'
    				name='tracktitle'
    				value={this.state.tracktitle}
    				onChange={this.handleChange.bind(this)}
    				/>
    				</div>
    				<button className='btn btn-primary btn-lg btn-block mb-5'
    				type='submit'>Get Track Lyrics</button>
    			</form>
    		</div>
    	</React.Fragment>
      
    );
  }
};

export default Search;