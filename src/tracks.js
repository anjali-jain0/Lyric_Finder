import React from 'react';
import Axios from 'axios';
import {Spinner} from './spinner';
import Track2 from './track2';
import Search from './search';

export class Tracks extends React.Component {

	constructor(){
    super();
    this.state={
      track_list:[],
      heading:'Top 10 Tracks'
     }
  }

  componentWillMount(){

    
    Axios.get('https://musicdemons.com/api/v1/artist')
    .then((response) => {
      console.log(response.data);
      this.setState({track_list:response.data});
    })
    .catch((err) => {
      console.log(err);
    });
  }

    handleChange(result){
      this.setState({track_list:result})
    }

	  render() {
       
      var track=this.state.track_list;

	  	if(track === undefined || track.length === 0){
	  		return <Spinner />;
	  	}
	  	else
	  	{
	  		return (

	  			<React.Fragment>
                <br/><Search song={this.handleChange.bind(this)} /><br/>
                <h3 className="text-center mb-4">{this.state.heading}</h3>
                <div className ='row'>
                {track.map(item =>
                  <Track2 key={item.id} track={item} />
                )}
                </div>
          </React.Fragment>

	  			);
	  	}
	}
	};

