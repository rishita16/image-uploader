import React, {Component} from 'react';
import {render} from 'react-dom';
import ImageUploader from './components/ImageUploader'
import Dropzone from './components/Dropzone'


class App extends Component {

  render() {
    return (
      <div>
        <h1>
          Welcome to the react starter.
        </h1>
       <ImageUploader/>
       <Dropzone/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
