import { Carousel } from "antd";

const CarouselComp = () => {
  return (
    <div id="MyCarousel">
      <div className="intro text-center">
        <h1 >The New Way to Design Your Home</h1>
        <p>Get Inspired. Shop Products. Find Pros.</p>
        <button className="my-btn">Get Started</button>
      </div>
      <Carousel autoplay>
        <div className="img">
          <img src="/images/house1.jpg" alt="house1" />
        </div>
        <div className="img">
          <img src="/images/house2.jpg" alt="house1" />
        </div>
        <div className="img">
          <img src="/images/house3.jpg" alt="house1" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
