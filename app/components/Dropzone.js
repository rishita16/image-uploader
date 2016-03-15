 import React from 'react';
 import DropzoneComponent from 'react-dropzone-component';
 const path = require('path');

  const componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/upload'
  };

  const djsConfig = {
    paramName: "file",
    method:"post",
    maxFiles:10,
    acceptedFiles: 'image/jpeg,image/png,image/gif',
    uploadMultiple:true,
    addRemoveLinks:true,
    dictDefaultMessage: 'Drop File(s) Here or Click to Upload Images'
  };

  const eventHandlers = {
 
    successmultiple: function(file,req,res){
      var string = req.file.path
        alert(req.file.path);
        console.log(req.file.path);
    }
  };

  export default class DragDrop extends React.Component {
    render() {
      return (
          <div>
            <DropzoneComponent config={componentConfig} eventHandlers={eventHandlers} djsConfig={djsConfig} />
          </div>
      )
    }
  }
