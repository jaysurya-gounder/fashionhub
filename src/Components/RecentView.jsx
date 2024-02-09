import React from 'react'
import Slider from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';

const PrevArrow = (props) => {
    return (
        <div
            className="custom-prev-arrow"
            onClick={props.onClick}
        >
            <GrPrevious />
        </div>
    );
};

const NextArrow = (props) => {
    return (
        <div
            className="custom-next-arrow"
            onClick={props.onClick}
        >
            <GrNext />
        </div>
    );
};

const RecentView = ({ products }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                },
            },
        ],
    };
    return (
        <div className='w-full h-fit flex flex-col justify-center'>
            <div className='w-full h-fit text-3xl font-bold text-center py-5 mb-5'>Recently viewed products</div>
            <Slider {...settings}>
                {products.map((trend) => (
                    <div key={trend.id} className='max-md:pe-3'>
                        <Card products={trend} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default RecentView