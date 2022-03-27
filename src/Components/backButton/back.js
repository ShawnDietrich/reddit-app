//import libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Component to render
export class BackButton extends React.Component {
  render() {
    return (
      <div>
        <button className='backbutton'>Back to Top</button>
      </div>
    )
  }
}

ReactDOM.render(<BackButton />, document.getElementById('backbutton'));