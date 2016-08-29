import React, {PropTypes} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import Title from './Title';
import ImageSizes from './ImageSizes';
import ImagePreview from './ImagePreview';
import Caption from './Caption';
import '../styles/filepicker.css';

export default class ModalBox extends React.Component {
  state = {
    isShowingModal: true,
    title: '',
    size: '',
    caption: ''
  }
    
  onOpenClick() {
    this.setState ({ 
      //isShowingModal: false,
      title:this.state.title,
      size:this.state.size,
      caption:this.state.caption
    })
  }
        
  handleClick() {
    this.setState({
      isShowingModal: true
    })
  }

  handleClose() {
    this.setState({
      isShowingModal: false
    });
  }

  handleTitleChange(titleValue) {
    this.setState({
      title:titleValue
    });
  }

  handleCaptionChange(captionValue) {
    this.setState({ 
      caption:captionValue
    });
  }

  handleSize(sizeValue) {
    this.setState({
      size:sizeValue
    })
  }
  
 
  render() {
    console.log("here",this.state);
    return <div onClick={this.handleClick.bind(this)}>
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={this.handleClose.bind(this)}>
          <ModalDialog onClose={this.handleClose.bind(this)}>
            <div id="main-wrap">
              <div id="left"> <ImagePreview /></div>
                <div id="right">
                  <div><Title handleTitleChange={this.handleTitleChange.bind(this)} /></div>
                  <div><ImageSizes handleSize={this.handleSize.bind(this)} /></div>
                  <div><Caption handleCaptionChange={this.handleCaptionChange.bind(this)} /></div>
                  <button type="button" onClick={this.onOpenClick.bind(this)} > Submit
                  </button>   
                </div>
            </div>
          </ModalDialog>
        </ModalContainer>
      }
    </div>;
  }
}