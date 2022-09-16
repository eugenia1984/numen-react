import SwipeableTextMobileStepper from "./CarouselMUI";
import "./carousel.css";

const Carousel = () => {
  return (
    <div>
      
      <h2 className="h2carrusel">ALGUNOS TRABAJOS REALIZADOS POR NOSOTROS </h2>
      <div className="divCarousel">
        <SwipeableTextMobileStepper />
      </div>
    </div>
  );
};

export { Carousel };
