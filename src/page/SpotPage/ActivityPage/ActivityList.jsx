import React from 'react'
import MirokuNav from '../MirokuNav'
import MiryokuHead from '../MiryokuHead'

import ReactPlayer from 'react-player'
import '../../../styles/style.scss'
import {FaChevronRight} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import Slider from 'react-slick'
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function ActivityList() {
  return (
    <div className='StayPage play'>
    <MiryokuHead />
    <MirokuNav />
    <div className='EatPage__topimg'>
        <div className="EatPage__topimg__wrap">
            <img src="https://media.graphassets.com/Kxg8fp9HTreSVsy7iHgc" alt="" />
            <img src="https://media.graphassets.com/W6lFymoGQ26f7n3adK0b" alt="" />
            <img src="https://media.graphassets.com/Fna1B50qTPC7NVStiNNH" alt="" />
        </div>
    </div>
    <div className="EatPage__title">
        <img id='title' src="https://media.graphassets.com/vCfp8tXPQTiR1TBwMu7s" alt="" />
    </div>
    <div className="CuponPage__container">

        <Slider {...settings} >

            <div className="CuponPage__item">


                <img src="https://media.graphassets.com/ViWCHUXFRwSjvRXyz5b3" alt="" />
                <div className='CuponPage__item__btn'>
                    <a>
                        <p>弥彦競輪場</p>
                    </a>
                </div>
                <p>約30年ぶりにバンクを
                    全面改修！弥彦競輪サイクルチーム「クラブスピリッツ」では初心者・子ども向けのフレンドリークラスを開催。さらに、2023年10月に開催する「寬仁親牌GⅠ」では、全国からトップ中のトップの競輪選手が集まり、頂点を目指し熱く競います！</p>
            </div>

            <div className="CuponPage__item">
                <img src="https://media.graphassets.com/NktGC9SlREeVooMBTE3j" alt="" />
                <div className='CuponPage__item__btn'>
                    <a>
                        <p>弥彦競輪場</p>
                    </a>
                </div>
                <p>元競輪選手が作るおいしいラーメンでランチ♪あっさりからガッツリ系までそろって
                    いるので、パパも満足必至。アツアツのラーメンでおなかを満たそう。</p>
            </div>
            <div className="CuponPage__item">
                <img src="https://media.graphassets.com/veIsBQ81QrObbzJblic2" alt="" />
                <div className='CuponPage__item__btn'>
                    <a>
                        <p>弥彦競輪場</p>
                    </a>
                </div>
                <p>空調が効いた有料の「ロイヤルルーム」。室内で車券を購入した
                    り、大型モニターで各地のレースを観戦することができる。大きな
                    窓から弥彦の景色を一望することも。</p>
            </div>
        </Slider>
        <div className="CuponPage__section__wrap">








        </div>


        <div className="EatPage__title accese">
            <img id='title' src="https://media.graphassets.com/HiGyT5TSROjPgnaVTjrl" alt="" />
        </div>
        <div className="HomeAc__Maps iframe ">
            <iframe loading="lazy" src="https://www.google.com/maps/d/u/2/embed?mid=1NHIYkT8xu6k3grbn6obypd5WLEBAnI0&ehbc=2E312F" width="640" height="480"></iframe>
        </div>


    </div>
</div>
  )
}
