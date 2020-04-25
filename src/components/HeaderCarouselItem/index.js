import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const HeaderCarouselItem = class HeaderCarouselItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    let backgroundStyle = {
      flex: 3,
    };

    const backgroundImage =
      this.props.item &&
      this.props.item.pages &&
      this.props.item.pages.length &&
      `${this.props.item.pages[1].iiif_url}/full/,280/0/default.jpg)`;
    if (backgroundImage) {
      backgroundStyle.backgroundSize = "cover";
      backgroundStyle.backgroundRepeat = "no-repeat";
    }

    return (
      <div
        className="header-carousel-item"
        style={{ display: "flex", height: "100%" }}
      >
        <div style={backgroundStyle}></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            flex: 1,
            padding: "5px",
            backgroundColor: "#c59696",
          }}
        >
          <div
            style={{
              padding: "5px",
              color: "white",
              textAlign: "center",
            }}
          >
            <h2>
              {this.props.item &&
                (this.props.item.heb_name || this.props.item.eng_name)}
            </h2>
            <p>{this.props.item && this.props.item.notes}</p>
          </div>
          <Button
            href={`/transcribe/${this.props.item.pages[0].id}`}
            variant="contained"
            color="primary"
            className="CheckButton"
            style={{ width: "100%" }}
          >
            צאו לדרך
          </Button>
        </div>
      </div>
    );
  }
};

export default HeaderCarouselItem;
