import React from 'react'
import '../../../styles/style.scss'
import {FaChevronRight} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import { Link } from 'react-router-dom';

export default function FmSpot() {
  return (
    <>
    <div className='fmSpot'> 
    <div className="CONTENT">
    <div className="fmSpot__title">
        <img id='title' srcSet="https://my.keirin.kdreams.jp/special/yahiko/image/title4.svg" alt="" />
    </div>
    <p>2020年に大規模リニューアルを行い、ファミ
リーも楽しめる場所へと生まれ変わった「弥彦競輪場」が注目を集めています。
秋には寬仁親王牌ＧⅠが開催決定！白熱するレースにきっと子どもたちの目も輝くはず。</p>
<div className="fmSpot__wrap">
        <div className="fmSpot__wrap__L">
            <img srcSet="https://my.keirin.kdreams.jp/special/yahiko/image/4-1.png" alt="" />
        </div>
        <div className="fmSpot__wrap__R">
            <img srcSet="https://my.keirin.kdreams.jp/special/yahiko/image/4-2.png" alt="" />
            <img srcSet="https://my.keirin.kdreams.jp/special/yahiko/image/4-3.png" alt="" />
        </div>
    </div>


    <div className="fmSpot__lText">
        <img srcSet="https://my.keirin.kdreams.jp/special/yahiko/image/4-5.svg" alt="" />
        <p>おいしいラーメンを食べたり、
広い施設内を散策したり…
遊び方は自由♪</p>
        <img srcSet="https://my.keirin.kdreams.jp/special/yahiko/image/4-5.svg" alt="" />
    </div>

    <Link className='seemore' to={"/miryoku/playing/*"} >
    詳しくみる
      <IconContext.Provider value={{ className:"myReact-icons"}}>
      <FaChevronRight/>
  </IconContext.Provider></Link>
    </div>
    </div>
    
    </>
  )
}
