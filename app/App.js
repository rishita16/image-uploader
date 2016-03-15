import React, {Component} from 'react';
import {render} from 'react-dom';
import './styles/dropzone.min.css';
import './styles/filepicker.css';
import Dropzone from './components/Dropzone';
export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="navbar-brand">Home</span>
            </div>
          </div>
        </nav>
        <div className="page-header">
          <h3>Image uploader <small>with dropzone</small></h3>
        </div>
        <Dropzone/>
      </div>
    );
  }
}