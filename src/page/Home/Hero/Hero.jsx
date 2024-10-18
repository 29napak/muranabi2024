import React from 'react'
import '../../../styles/style.scss'
import { gql, useQuery } from "@apollo/client"
import ReactPlayer from 'react-player'
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const VID = gql`{

    heroVideos {
      id,
      url
    }
    heroimgs {
      img {
        id,
        url
      }
      pcimg{
        url
      }
      link
      id
    }
  }
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function Hero() {
  const {data,loading,error} = useQuery(VID);
  if(loading)return null;
  if(error)return  null;




  return (
    <div>

      <Slider {...settings} >

        <div className='slide-item'>

          <div className='slide-item__copy'>
            <div className="slide-item__copy__1">
              <img srcSet="https://media.graphassets.com/a9zqrQnWQwq1k70w1xH5" alt="" />
            </div>
            <div className="slide-item__copy__2">
              <img srcSet="https://media.graphassets.com/PqrD0YLYRsihEv2k8GFe" alt="" />
            </div>
          </div>

          <div className='slide-img'>
            <div className='herovideo'>
              <div className='herovideo'>
                <video muted autoPlay loop playsInline width={375} height={211}>
                  <source src="https://media.graphassets.com/BRxOPx3eRNWSJSF7PMho" type='video/mp4' />
                </video>
              </div>


            </div>

          </div>
        </div>

        <div className='slide-item'>
          <div className='slide-img'>
            <picture>

              <img srcSet="https://media.graphassets.com/gavRNdrTwinKn2tQoKFg" width={375} height={211} alt="" />
            </picture>

          </div>
        </div>








      </Slider>


    </div>
  )
}
