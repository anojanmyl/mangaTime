import React, { Component } from "react";

import "../styles/modal.css";
import OneManga from "./OneManga";

class Modal extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.show && (
          <div className="modal">
            <OneManga />
            <button onClick={this.props.onHide}>Close</button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
