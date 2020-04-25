import React from "react";
import Carousel from "react-material-ui-carousel";
import store from "../../Store";
import { observer } from "mobx-react";
import HeaderCarouselItem from "../HeaderCarouselItem";

const HeaderCarousel = observer(
  class HeaderCarousel extends React.Component {
    constructor() {
      super();
    }

    render() {
      const manuscripts = store.state.manuscripts;
      // get random 3

      const randomManuscripts = manuscripts.length
        ? [manuscripts[0], manuscripts[2], manuscripts[7]]
        : [];

      const items = randomManuscripts.length
        ? randomManuscripts.map((manuscript, i) => {
            
            return manuscript ? <HeaderCarouselItem item={manuscript} key={i} />: null;
          })
        : null;

      return (
        <Carousel interval={10000} indicators={false} className="header-carousel">
          {items}
        </Carousel>
      );
    }
  }
);

export default HeaderCarousel;
