import React, {PropTypes} from 'react';
import '../styles/filepicker.css';

export default class input extends React.Component {

  validate() {    //test function
    var textbox=this.myTextInput.value;
    if(!textbox.match(/\S/)) {
      alert("title cannot be blank");
      return false;
    }
    return true;
  }

  handleClick() {
    var result = this.validate();
  }

  handleTitleChange() {
    if(this.validate() === true) {
      this.props.handleTitleChange(this.myTextInput.value);
    }
    return;
  }
  
  render() {
    return (
      <div>
        <span><input type="text" ref={(ref) => this.myTextInput = ref} value={this.props.value} onClick={this.handleClick.bind(this)} onChange={this.handleTitleChange.bind(this)} placeholder="title" /> </span><br/>
      </div>
    );
  }
}