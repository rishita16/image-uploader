import React from 'react';
import DropzoneComponent from 'react-dropzone-component';

const componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/upload'
};

const djsConfig = {
    maxFiles:10,
    acceptedFiles: 'image/jpeg,image/png,image/gif',
    uploadMultiple:true,
    addRemoveLinks:true,
    dictDefaultMessage: 'Drop File(s) Here or Click to Upload Images'
};

export default class DragDrop extends React.Component {

  render() {
    return (
      <div>
        <DropzoneComponent config={componentConfig} djsConfig={djsConfig} />
      </div>
    )
  }
}
