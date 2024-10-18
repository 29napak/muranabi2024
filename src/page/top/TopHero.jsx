import React from 'react';
import Slider from "react-slick";
import { gql, useQuery } from "@apollo/client";
import '../../styles/style.scss';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
};

const VID = gql`{
     heroimgs(last: 10, where: {year2024: true}) {
    id
    img {
      url
    }
  }
}`;

export default function TopHero() {
    const { data, loading, error } = useQuery(VID);

    if (loading) return null;
    if (error) return <div>Error: {error.message}</div>;

    const heroImages = data.heroimgs;

    return (
        <div>
            {heroImages.length > 1 ? (
                <Slider {...settings}>
                    {heroImages.map((img) => (
                        <div key={img.id}>
                            <div className='slide-item'>
                                <div className='slide-img'>
                                    <img className='img1' src={img.img.url} width={375} height={211} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <div className='single-image'>
                    {heroImages.length === 1 ? (
                        <div className='slide-item'>
                            <div className='slide-img'>
                                <img className='img1' src={heroImages[0].img.url} width={375} height={211} alt="" />
                            </div>
                        </div>
                    ) : (
                        <div className='slide-img'>
                            <img className='img1' src="https://my.keirin.kdreams.jp/special/yahiko/image/top/main-yahiko-2024a1.png" width={375} height={211} alt="" />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
