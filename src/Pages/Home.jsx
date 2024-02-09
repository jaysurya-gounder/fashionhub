import Footers from "../Sections/Footers"
import Header from "../Sections/Header"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { carousel } from "../Data/Index";
import Trending from "../Components/Trending";
import Bestseller from "../Components/Bestseller";
import { Link } from "react-router-dom";
import PopBox from "../Components/PopBox";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
  };
  return (
    <div>
      <Header />
      <section className="w-full h-fit mb-20">
        <Slider {...settings} className="w-full h-[450px] cursor-grab max-md:h-64">
          {carousel.map((poster) => (
            <div key={poster.id} className="relative w-full h-[500px] max-md:h-72">
              <img src={poster.src} className="w-full h-full object-cover" />
              <div className={`absolute w-4/5 h-full top-0 left-[10%] flex flex-col max-md:left-[5%] max-md:w-[90%] justify-center ${poster.align}`}>
                <div className="text-2xl max-md:text-lg">{poster.content}</div>
                <div className="text-6xl font-bold max-md:text-2xl">{poster.mainContent}</div>
                <button className="w-[12%] h-10 mt-3 bg-black text-white font-medium max-md:w-1/3 max-md:text-sm">{poster.button}</button>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <section className="container h-[600px] mb-32 max-md:w-[90%]">
        <div className="w-full h-full flex justify-between max-md:flex-col">
          <div className="w-1/2 h-full flex flex-col justify-between max-md:w-full max-md:h-1/2">
            <div className="relative w-full h-[47%] max-md:h-[47%]">
              <img src="Images/Products/Mens/362700-63-2.webp" className="w-full h-full object-cover" />
              <Link to='/mens' className="absolute bottom-5 left-[40%] text-center pt-2 w-1/4 h-10 bg-white font-medium">Mens</Link>
            </div>
            <div className="relative w-full h-[47%] max-md:h-[47%]">
              <img src="Images/Cover/1_2a9471ff-024d-40f7-a4b3-a15a058ff334_2022-03-24.webp" className="w-full h-full object-cover" />
              <Link to='/womens' className="absolute bottom-5 left-[40%] text-center pt-2 w-1/4 h-10 bg-white font-medium">Womens</Link>
            </div>
          </div>
          <div className="w-[22%] h-full flex flex-col justify-between max-md:w-full max-md:h-2/5 max-md:items-center max-md:flex-row">
            <div className="relative w-full h-[47%] max-md:w-[48%] max-md:h-[85%]">
              <img src="Images/Cover/2_2022-03-02.avif" className="w-full h-full object-cover" />
              <Link to='/accessories' className="absolute bottom-5 left-[25%] text-center pt-2 w-1/2 h-10 bg-white font-medium">Accessories</Link>
            </div>
            <div className="relative w-full h-[47%] max-md:w-[48%] max-md:h-[85%]">
              <img src="Images/Cover/3_2022-03-02.jpg" className="w-full h-full object-cover" />
              <Link to='/footwears' className="absolute bottom-5 left-[25%] text-center pt-2 w-1/2 h-10 bg-white font-medium">Footwear</Link>
            </div>
          </div>
          <div className="relative w-[22%] h-full max-md:w-full max-md:h-[30%]">
            <img src="Images/Cover/4_f8612457-70c3-4a0f-b808-0f322a71741c_2022-03-02.webp" className="w-full h-full object-cover" />
            <Link to='/watches' className="absolute bottom-5 left-[25%] text-center pt-2 w-1/2 h-10 bg-white font-medium">Watches</Link>
          </div>
        </div>
      </section>
      <Trending />
      <Bestseller />
      <Footers />
      <PopBox />
    </div>
  )
}

export default Home
