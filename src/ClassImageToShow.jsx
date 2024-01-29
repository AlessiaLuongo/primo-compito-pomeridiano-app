import { Component } from "react";

class ClassImageToShow extends Component {
  render() {
    return (
      <div className="App-logo">
        <img src={this.props.imageToShow} alt={this.props.alt} />
      </div>
    );
  }
}
export default ClassImageToShow;
