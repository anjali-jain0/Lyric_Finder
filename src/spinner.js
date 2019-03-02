import React from 'react';
import spinner from './spinner.gif';

export class Spinner extends React.Component {
  
  render() {
    return (
     
     <div>
      <img src={spinner} alt="Loading..." style={{width:200,margin:'40px auto',display:'block'}} />
     </div>
    
    );
  }
};

