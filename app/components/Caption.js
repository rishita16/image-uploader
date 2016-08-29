import React, {PropTypes} from 'react';

export default class input extends React.Component {

  validate() {
    var textarea=this.myTextInput.value;
    var flag1=0;
    if (textarea == "" || textarea == null) {     
      alert("Caption cannot be blank");
      return false;
    }
    return true;
  }

  handleClick() {
    this.validate();
  }

  handleCaptionChange() {
    if(this.validate() === true) {
      this.props.handleCaptionChange(this.myTextInput.value);
    }
  }

  render() {
    return (
      <div>
        <textarea name="description" ref={(ref) => this.myTextInput = ref} value={this.props.value} onClick={this.handleClick.bind(this)} onChange={this.handleCaptionChange.bind(this)} placeholder="enter a caption here" required ></textarea>
      </div>
    );
  }
}