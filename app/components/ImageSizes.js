import React, {PropTypes} from 'react';
import '../styles/filepicker.css';

export default class ImageSize extends React.Component {

  validate() {  //test function
    var small = this.Small;
    var medium = this.Medium;
    var large = this.Large;
    if (( small.checked == false ) &&
        ( medium.checked == false ) &&
        ( large.checked == false )) {
      alert ( "select an image size " ); 
      return false;
    } 
    else return true;
  }

  radio() {
    var small = this.Small;
    var medium = this.Medium;
    var large = this.Large;
    if(small.checked){
      var imgsize = small.value;
    }
    else if(medium.checked){
      var imgsize = medium.value;
    }
    else if(large.checked){
      var imgsize = large.value; 
    }
    return imgsize;
  }

  handleSize() {
    var result = this.validate();
    var size = this.radio();
      if(result === true) {
        this.props.handleSize(size);
      }
  }

  render() {
    return (
      <div id ="radioGroup">
        <label>
          <input type="radio" name="fb" ref={(ref) => this.Small = ref} value="small"  onChange={this.handleSize.bind(this)} /> 
          <img src="https://s3-eu-west-1.amazonaws.com/testing.images.public%2Fcd2325%2Ftailles_web121%20%28another%20copy%29/original.png" />
        </label>
        <label>
           <input type="radio" name="fb" ref={(ref) => this.Medium = ref} value="medium" onChange={this.handleSize.bind(this)}/>
          <img src="https://s3-eu-west-1.amazonaws.com/testing.images.public%2Fcfbb00%2Ftailles_web121%20%283rd%20copy%29/original.png" />
        </label> 
        <label>       
           <input type="radio" name="fb" ref={(ref) => this.Large = ref} value="large"  onChange={this.handleSize.bind(this)}/>
          <img src="https://s3-eu-west-1.amazonaws.com/testing.images.public%2Fdf437a%2Ftailles_web121/original.png" />
        </label>
      </div>
    ); 
  }
}
