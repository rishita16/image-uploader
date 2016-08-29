 import React from 'react';
 import DropzoneComponent from 'react-dropzone-component';
 import ReactDOM from 'react-dom';
 import ModalBox from './modal';
 
  const componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/upload'
  };

  const djsConfig = {
    maxFiles:10,
    paramName:'images',
    acceptedFiles: 'image/jpeg,image/png,image/gif',
    addRemoveLinks:true,
    dictDefaultMessage: 'Drop File(s) Here or Click to Upload Images'
  };

  const eventHandlers = {
    success: function(file,req,res) {
      console.log(req,res);
      console.log("success upload");
      this.setState({showModal:true})
    }
  };

  export default class DragDrop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    render() {
      console.log("response state", this.state);
      return (
          <div>
            {this.state.showModal ? <ModalBox /> : ''}           
            <DropzoneComponent config={componentConfig} eventHandlers={eventHandlers} djsConfig={djsConfig} />
          </div>
      );
    }
  }

