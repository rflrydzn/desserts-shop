import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselPic1 from '../assets/carousel-1.jpg';
import CarouselPic2 from '../assets/carousel-2.jpg';
import CarouselPic3 from '../assets/carousel-3.jpg';
import CarouselPic4 from '../assets/carousel-4.jpg';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Carousel() {
  return (
    <MultiCarousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="w-full"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass="mx-0.5"
      keyBoardControl
      minimumTouchDrag={80}
      partialVisible
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={true}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <div><img src={CarouselPic1} style={{ height: "600px", width: "100%" }} /></div>
      <div><img src={CarouselPic2} style={{ height: "600px", width: "100%" }} /></div>
      <div><img src={CarouselPic3} style={{ height: "600px", width: "100%" }} /></div>
      <div><img src={CarouselPic4} style={{ height: "600px", width: "100%" }} /></div>
    </MultiCarousel>
  );
}
