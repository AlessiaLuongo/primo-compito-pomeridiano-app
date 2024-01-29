import { Component } from "react";

class ClasseButtonComponent extends Component {
  render() {
    return (
      <div>
        <button className={this.props.textColor}>
          {this.props.textToShow}
        </button>
      </div>
    );
  }
}
export default ClasseButtonComponent;
