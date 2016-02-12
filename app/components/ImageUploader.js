import React from 'react';
import Dropzone from 'react-dropzone';

export default class ImageUploader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
    }
  }

  onDrop(files) {
    this.setState({
     files: files
    });
   }

  onOpenClick() {
      this.refs.dropzone.open();
  }

  render() {
    return (
      <div>
        <Dropzone ref="dropzone" onDrop={this.onDrop.bind(this)}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <button type="button" onClick={this.onOpenClick.bind(this)}>
          Open Dropzone
        </button>
        {this.state.files.length > 0 ? 
          <div>
            <h2>Uploading {this.state.files.length} files...</h2>
            <div>
              {this.state.files.map((file) => <img src={file.preview} /> )}
            </div>
          </div> : null
        }
      </div>
    );
  }
}
