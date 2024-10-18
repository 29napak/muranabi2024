import React, { useEffect } from 'react'
import {FiChevronDown} from 'react-icons/fi'
import { useNavigate } from "react-router-dom";
import Hero from './Hero/Hero';
import { useRef } from 'react';
import '../../styles/style.scss'
import Hominfo from './HomeInfo/Hominfo';
import FmSpot from './FmSpot/fmSpot';
import HomeRace from './HomeRace/HomeRace';
import HomeTopic from './HomeTopic/HomeTopic';
import TrSpot from './TrSopt/TrSpot';
import HomeCP from './HomeCP/HomeCP';
import {IconContext} from 'react-icons'

import HomeSns from './HomeSns/HomeSns';
import {FaChevronRight} from 'react-icons/fa'
import CuponHome from './Cupon/CuponHome';





export default function Home() {
  const tap1 = useRef(null);
  const tap2 = useRef(null);
  const tap3 = useRef(null);
  const tap4 = useRef(null);

    const navigate = useNavigate();
    function handleClick() {
      navigate("/CouponList");
    }

  return (
    <>
  

    <Hero/>
    <div className="topNav">
    <div className="CONTENT">
        <div className='Tap'>
          <div className="Tap__item">
            <a onClick={()=>{
              tap1.current?.scrollIntoView({behavior: 'smooth'})
            }}>
              <p>競輪場情報</p>
                <div className="Tap__item__warp top">
                  <img src="https://my.keirin.kdreams.jp/special/yahiko/image/tap1.svg" alt="" />
                  <IconContext.Provider value={{ className:"tap-icon"}}>
                  <FiChevronDown color='#707E0D'/>
                  </IconContext.Provider>
                </div>
            </a>
          </div>
          <div className="Tap__item">
            <a   onClick={()=>{
              tap2.current?.scrollIntoView({behavior: 'smooth'})
            }}>
              <p>トピックス</p>
                <div className="Tap__item__warp top">
                  <img src="https://my.keirin.kdreams.jp/special/yahiko/image/tap2.svg" alt="" />
                  <IconContext.Provider value={{ className:"tap-icon"}}>
                  <FiChevronDown color='#707E0D'/>
                  </IconContext.Provider>
                </div>
            </a>
          </div>
          <div className="Tap__item">
            <a onClick={()=>{
              tap3.current?.scrollIntoView({behavior: 'smooth'})
            }}>
              <p>弥彦村の魅力</p>
                <div className="Tap__item__warp top">
                  <img src="https://my.keirin.kdreams.jp/special/yahiko/image/tap3.svg" alt="" />
                  <IconContext.Provider value={{ className:"tap-icon"}}>
                  <FiChevronDown color='#707E0D'/>
                  </IconContext.Provider>
                </div>
            </a>
          </div>
          {/* <div className="Tap__item">
            <a onClick={()=>{
              tap4.current?.scrollIntoView({behavior: 'smooth'})
            }}>
              <p>キャンペーン</p>
                <div className="Tap__item__warp top">
                  <img src="https://media.graphassets.com/ODwEBHslQbOZkSXqDOot" alt="" />
                  <IconContext.Provider value={{ className:"tap-icon"}}>
                  <FiChevronDown color='#707E0D'/>
                  </IconContext.Provider>
                </div>
            </a>
          </div> */}
        </div>
  
   
    </div>

</div>


    <div className="cupon">
    <div className="cupon__header__title">
      <img  id='title' src="https://media.graphassets.com/47qs1shBQuNmy2PKkHnQ" alt="" />
     </div>
     <div className="cupon__item" onClick={handleClick}>
    <CuponHome/>
    </div>
    </div>



    
    <img className='topNav__after' src="https://my.keirin.kdreams.jp/special/yahiko/image/Vector10.png" alt="" />
    <div className="ballon">
        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/ballon.svg" alt="" />
    </div>


    <div className="About">
    <div className="CONTENT">
      <div >
        <img  id='title' src="https://my.keirin.kdreams.jp/special/yahiko/image/abouthd.svg" alt="" />
        </div>
        <div className="About__SP">
        <p>新潟市から車で約1時間、弥彦山の麓に多彩な観光スポットが集結する弥彦エリア。パワースポットとして有名な「彌彦神社」をはじめ、お土産や最旬グルメが集まる「おもてなし広場」、レース観戦がで</p>
        <div className="About__warp">
            <p>きる「弥彦競輪場」、ゆっくり疲れを癒せる日帰り温泉など、家族で1日楽しめるスポットがずらり。お散歩感覚で街歩きを楽しんでください♪</p>
            <img className='location' src="https://my.keirin.kdreams.jp/special/yahiko/image/locaiton.png" alt="" />
        </div>
        </div>
        <div className="About__PC">
        <div className="About__warp">
            <p>新潟市から車で約1時間、弥彦山の麓に多彩な観光スポットが集結する弥彦エリア。パワースポットとして有名な「彌彦神社」をはじめ、お土産や最旬グルメが集まる「おもてなし広場」、レース観戦ができる「弥彦競輪場」、ゆっくり疲れを癒せる日帰り温泉など、家族で1日楽しめるスポットがずらり。お散歩感覚で街歩きを楽しんでください♪</p>
            <img className='location' src="https://my.keirin.kdreams.jp/special/yahiko/image/locaiton.png" alt="" />
        </div>
        </div>
        </div>
    </div>


<Hominfo />
<FmSpot/>
<div ref={tap1} >
<HomeRace />
</div>
<div ref={tap2} >
<HomeTopic/>
</div>
<div ref={tap3} >
<TrSpot/>
</div>
{/* <div ref={tap4} >
<HomeCP/>
</div> */}

<HomeSns/>



</>
  )
}
