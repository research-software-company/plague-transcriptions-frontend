import React from "react";

const Content = class Content extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  }
};

export default Content;
