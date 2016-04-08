 import React from 'react';
 import DropzoneComponent from 'react-dropzone-component';

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
    successmultiple: function(file,req,res){
      console.log("file uploaded successfully!!");
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