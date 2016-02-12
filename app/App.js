import React, {Component} from 'react';
import {render} from 'react-dom';
import ImageUploader from './components/ImageUploader'

class App extends Component {

  onDrop(files) {
      console.log('Received files: ', files);
  }

  render() {
    return (
      <div>
        <h1>
          Welcome to the react starter.
        </h1>
        <ImageUploader/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
