import React from 'react'
import '../../../styles/style.scss'

import {IconContext} from 'react-icons'
import {FaChevronCircleDown} from 'react-icons/fa'
import { useRef } from 'react';

import TopAccece from '../../top/TopAccece';
import { Link } from 'react-router-dom';


export default function HomeAccess() {
    const root1 = useRef(null);
    const root2 = useRef(null);
    const root3 = useRef(null);
  return (
    <>
    <div className="HomeAc__topimg">
        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/acrb.png" alt="" />
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/acimg2.svg" alt="" />
        </div>
    <div className='HomeAc'>
    <div className="HomeAc__root">
                <div >
                    <div className="title">
                        <img src="https://media.graphassets.com/Tz1Xx9efRXCqddFWOQjU" alt="" />

                    </div>
                    <TopAccece />
                    <div className="box">
                        <p>新潟県西蒲原郡弥彦村弥彦2621</p>
                        <p>・北陸自動車道 三条燕IC(巻潟東IC)から30分</p>
                        <p>・上越新幹線 燕三条駅から弥彦線に乗り換え弥彦駅下車 徒歩15分</p>
                        <p>・ 無料バス JR燕三条駅からタクシーで約30分</p>
                        <a href="https://media.graphassets.com/9qCnNnYRKynxerN31EVA" target='blank'>三条燕ICより （PDFファイル）</a><br />
                        <a href="https://media.graphassets.com/6TgisEgQnmBhpgEiuz1O" target='blank'>巻潟東ICより （PDFファイル）</a>


                        <div className="box__link">
                            <a href='https://media.graphassets.com/H9RKTx6Toa0tBXyfIQkw' target='blank'>
                                <p>ファンバス運行情報＞</p>
                            </a>
                        </div>
                        <div className="box__link">
                            <a href='https://media.graphassets.com/FxWkwBpMRFRyXKNXK9v3' target='blank'>
                                <p>弥彦村内巡回無料バス＞</p>
                            </a>
                        </div>
                        <div className="box__link">
                            <Link to={"/infomation"}>
                                <p>ご来場される皆様へ＞</p>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        
        <div className="HomeAc__title">
            <img id='title' src="https://my.keirin.kdreams.jp/special/yahiko/image/titleac.svg" alt="" />
        </div>
  
        <div className='Tap'>
          <div className="Tap__item">
            <a onClick={()=>{
              root1.current?.scrollIntoView({behavior: 'smooth'})
            }}>
                <div className="Tap__item__warp">
                  <img src="https://my.keirin.kdreams.jp/special/yahiko/image/car.svg" alt="" />
                  <IconContext.Provider value={{ className:"tap-icon"}}>
                  <FaChevronCircleDown color='#fff'/>
                  </IconContext.Provider>
                </div>
            </a>
          </div>
          <div className="Tap__item">
            <a onClick={()=>{
              root2.current?.scrollIntoView({behavior: 'smooth'})
            }}>
                <div className="Tap__item__warp">
                  <img src="https://my.keirin.kdreams.jp/special/yahiko/image/train.svg" alt="" />
                  <IconContext.Provider value={{ className:"tap-icon"}}>
                  <FaChevronCircleDown color='#fff'/>
                  </IconContext.Provider>
                </div>
            </a>
          </div>
          <div className="Tap__item">
            <a onClick={()=>{
              root3.current?.scrollIntoView({behavior: 'smooth'})
            }}>
                <div className="Tap__item__warp">
                  <img src="https://my.keirin.kdreams.jp/special/yahiko/image/plain.svg" alt="" />
                  <IconContext.Provider value={{ className:"tap-icon"}}>
                  <FaChevronCircleDown color='#fff'/>
                  </IconContext.Provider>
                </div>
            </a>
          </div>
          </div>
          <div className="HomeAc__Maps">
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/map1.png" alt="" />
            <iframe loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50518.13621977414!2d138.83826105!3d37.6871913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff4e59d928c380f%3A0xaa8e26a6a6bbb5f4!2z5paw5r2f55yM6KW_6JKy5Y6f6YOh5byl5b2m5p2R!5e0!3m2!1sja!2sjp!4v1684995925537!5m2!1sja!2sjp" >
            
            </iframe>
        </div>
        
        <div className="HomeAc__root"ref={root1}>
            <div className="HomeAc__root__title">
                <p>お車でお越しの方</p>
            </div>
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/Group 134.png" alt="" />
        </div>
        <div className="HomeAc__root" ref={root2}>
            <div className="HomeAc__root__title">
                <p>電車でお越しの方</p>
            </div>
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/root2.png" alt="" />
        </div>
        <div className="HomeAc__root" ref={root3} >
            <div className="HomeAc__root__title">
                <p>飛行機でお越しの方</p>
            </div>
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/root3.png" alt="" />
            <p>※新潟空港より電車利用にてお越しの場合</p>
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/Group 137.png" alt="" />
        </div>
    </div>
    </>
  )
}

