import React from 'react'
import MirokuNav from '../MirokuNav'
import MiryokuHead from '../MiryokuHead'
import '../../../styles/style.scss'
import ReactPlayer from 'react-player'
import {FaChevronRight} from 'react-icons/fa'
import {IconContext} from 'react-icons'


export default function LearnList() {
  return (
    <div className='StayPage learn'>
    <MiryokuHead/>
    <MirokuNav/>
    <div className='EatPage__topimg'>
    <div className="EatPage__topimg__wrap">
    <img src="https://media.graphassets.com/Kxg8fp9HTreSVsy7iHgc" alt="" />
    <img src="https://media.graphassets.com/x4xdX3wcRFmZFoqQ5jNc" alt="" />
    <img src="https://media.graphassets.com/Fna1B50qTPC7NVStiNNH" alt="" />
    </div>
  </div>
  <div className="EatPage__title">
    <img id='title' src="https://media.graphassets.com/kle8R9uVTYYz7KEDlRiD" alt="" />
  </div>
  <div className="CuponPage__container">
 

  <div className="CuponPage__section__wrap">

  <div className="CuponPage__item">


<img src="https://my.keirin.kdreams.jp/special/yahiko/image/Maskgroup.png" alt="" />
<div className='CuponPage__item__btn'>
    <a href='https://www.yahiko-jinjya.or.jp/' target='_blank'>
        <p>彌彦神社</p>
    </a>
</div>
<p>県内で参拝者数トップを誇る越後一宮･彌彦神社。仕事運アップや縁結びの御利益があると評判で、弥彦に来たら必ず訪れたい強運スポットです。境内には、持ち上げることができれば願い事が叶うといわれている「重軽の石」も。見どころ満載の彌彦神社をめぐって、心身ともにリフレッシュしてください。</p>
</div>

<div className="CuponPage__item">


<img src="https://my.keirin.kdreams.jp/special/yahiko/image/learn2-img.png" alt="" />
<div className='CuponPage__item__btn'>
    <a href='https://www.vill.yahiko.niigata.jp/raiwayahiko/' target='_blank'>
        <p>らいわ弥彦</p>
    </a>
</div>
<p>弥彦村図書館は「世代を超えてつながる村」「読書で健康長寿」「非認知能力を伸ばす教育による教育立村」をコンセプトに、 新しい地域交流拠点として開館しました。天然木の家具を多用した落ち着いた空間で、ゆったりと読書が楽しめます。 1階にカフェも併設されており、軽食やコーヒーも読書のお供にご一緒にどうぞ。</p>
</div>




   </div>
   <div className="EatPage__title accese">
            <img id='title' src="https://media.graphassets.com/HiGyT5TSROjPgnaVTjrl" alt="" />
        </div>
   <div className="HomeAc__Maps iframe ">
   <iframe src="https://www.google.com/maps/d/u/2/embed?mid=155E7cY3Jnc6um_8lGxSEebWePLIc3KQ&ehbc=2E312F" width="640" height="480"></iframe>
        </div>
   </div>
   </div>
  )
}
