import './styles/filepicker.css';
import './styles/font.css';
import '../node_modules/dropzone/dist/min/dropzone.min.css';
import React, {Component} from 'react';
import {render} from 'react-dom';
import Dropzone from './components/Dropzone';


class App extends Component {
  render() {
    return (
      <div>
        <h2>
         <center>
           IMAGE-UPLOADER
         </center>
        </h2>
       <Dropzone/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));