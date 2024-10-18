import React from 'react'
import MirokuNav from '../MirokuNav'
import MiryokuHead from '../MiryokuHead'
import ReactPlayer from 'react-player'
import { FaChevronRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import '../../../styles/style.scss'
import { Timeline } from 'react-twitter-widgets';


export default function SeeList() {
  const md = { matches: window.matchMedia("(min-width: 440px)").matches };
  return (
    <div className='StayPage see'>
      <MiryokuHead />
      <MirokuNav />
      <div className='EatPage__topimg'>
        <div className="EatPage__topimg__wrap">
          <img src="https://media.graphassets.com/Kxg8fp9HTreSVsy7iHgc" alt="" />
          <img src="https://media.graphassets.com/x8xO2Cu9Rc2kBfPbXl9w" alt="" />
          <img src="https://media.graphassets.com/Fna1B50qTPC7NVStiNNH" alt="" />
        </div>
      </div>
      <div className="EatPage__title">
        <img id='title' src="https://media.graphassets.com/h4ocztriQX5M2AzPvuhw" alt="" />
      </div>
      <div className="CuponPage__container">


        <div className="CuponPage__section__wrap">

          <div className="CuponPage__item">


            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/Maskgroup2.png" alt="" />
            <div className='CuponPage__item__btn'>
              <a>
                <p>弥彦山ロープウェイ</p>
              </a>
            </div>
            <p>弥彦に来たなら絶景もマストで見ておきたい! 四季のパノラマを楽しむなら、弥彦山ロープウェイで弥彦山山頂へ。そこには、日本海や佐渡島、越後平野など360度の絶景が待ち受けています。アトラクション感覚でグングン上昇するロープウェイに、子どもたちもきっと喜ぶはず♪</p>
          </div>




        </div>

        <div className="EatPage__title accese">
          <img id='title' src="https://media.graphassets.com/TWSIijsuQva6QahqXAko" alt="" />
        </div>
        <div className="HomeSns__SNS">
     
     <Timeline
       dataSource={{
         sourceType: 'profile',
         screenName: 'yahikoropeway' // アカウント名
       }}
       options={{
         height:`${md.matches ? "1000" :"650"}`,
       }}
       />
       </div>
        <div className="EatPage__title accese">
          <img id='title' src="https://media.graphassets.com/HiGyT5TSROjPgnaVTjrl" alt="" />
        </div>
        <div className="HomeAc__Maps iframe ">
        <iframe src="https://www.google.com/maps/d/u/2/embed?mid=143hY1OTwmlkYzRwT4W8OdkizSAl0BaI&ehbc=2E312F" width="640" height="480"></iframe>
        </div>
      </div>
    </div>
  )
}
