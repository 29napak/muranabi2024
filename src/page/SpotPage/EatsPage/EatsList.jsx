import React from 'react';
import { useRef } from 'react';


import '../../../styles/style.scss'
import {IconContext} from 'react-icons'
import {FaChevronCircleDown} from 'react-icons/fa'

import MirokuNav from '../MirokuNav'
import MiryokuHead from '../MiryokuHead';
import {FaChevronRight} from 'react-icons/fa'



export default function EatsList() {
  const tap2 = useRef(null);
  const tap3 = useRef(null);
  const tap1 = useRef(null);
  return (
    <>
    <div className='EatPage'>
  <MiryokuHead/>
  <MirokuNav/>

    <div className='EatPage__topimg'>
      <div className="EatPage__topimg__wrap">
      <img src="https://media.graphassets.com/Kxg8fp9HTreSVsy7iHgc" alt="" />
      <img src="https://media.graphassets.com/MZcam02YQSvTs0DypTSk" alt="" />
      <img src="https://media.graphassets.com/Fna1B50qTPC7NVStiNNH" alt="" />
      </div>
    </div>
    <div className="EatPage__title">
      <img id='title' src="https://media.graphassets.com/C26d9poTySBFt9dgoFBX" alt="" />
    </div>

    <div className='Tap'>
          <div className="Tap__item">
            <a onClick={()=>{
              tap1.current?.scrollIntoView({behavior: 'smooth'})
            }}>
                <div className="Tap__item__warp">
                  <img src="https://media.graphassets.com/LkgxNzsSrKQ9nN1eePNE" alt="" />
                  <IconContext.Provider value={{ className:"tap-icon"}}>
                  <FaChevronCircleDown color='#fff'/>
                  </IconContext.Provider>
                </div>
            </a>
          </div>
          <div className="Tap__item">
            <a onClick={()=>{
              tap2.current?.scrollIntoView({behavior: 'smooth'})
            }}>
                <div className="Tap__item__warp">
                  <img src="https://media.graphassets.com/Lf4bpvMgRTYKv7cXaYb9" alt="" />
                  <IconContext.Provider value={{ className:"tap-icon"}}>
                  <FaChevronCircleDown color='#fff'/>
                  </IconContext.Provider>
                </div>
            </a>
          </div>
          <div className="Tap__item">
            <a onClick={()=>{
              tabp.current?.scrollIntoView({behavior: 'smooth'})
            }}>
                <div className="Tap__item__warp">
                  <img src="https://media.graphassets.com/GZe6htEIQEKlPai9TLpO" alt="" />
                  <IconContext.Provider value={{ className:"tap-icon"}}>
                  <FaChevronCircleDown color='#fff'/>
                  </IconContext.Provider>
                </div>
            </a>
          </div>
          </div>
          <div className="CuponPage__container">
          <div className="HomeAc__root" ref={tap1} >
            <div className="HomeAc__root__title">
                <p>お食事</p>
            </div>
    <div className="CuponPage__section__wrap">
      <div className="CuponPage__item">
        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/1.png" alt="" />
        <div className='CuponPage__item__btn'>
        <a>
          <p>旅空Cafe-YAHIKO-</p>
          </a>
          </div>
        <p>弥彦村の農家さんが作った野菜や伊彌彦米を使ったカレーを食べれるお店「旅空Cafe」。イートイン、テイクアウトどちらもOK！テラス席ではペットもOK！</p>
      </div>
      
      <div className="CuponPage__item">
        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/2.png" alt="" />
        <div className='CuponPage__item__btn'>
        <a>
          <p>BOSCAIOLO</p>
          </a>
          </div>
        <p>大間口のモデルハウスの窓から弥彦山を一望できるイタリア料理店。本場･イタリアの各地で学んだ料理を、旬の食材を使用してパスタや石窯ピッツァなどのメニューで提供。また、イタリアワインのソムリエ資格を持つオーナー厳選のワインも楽しめる。</p>
      </div>
      <div className="CuponPage__item">
        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/3.png" alt="" />
        <div className='CuponPage__item__btn'>
        <a>
          <p>吉田屋</p>
          </a>
          </div>
        <p>提供されるのは確かな目で厳選した魚介を使った和食。名物は鮭とイクラの風味が豊かな『わっぱ飯』。ボリュームも満点です。</p>
      </div>
      <div className="CuponPage__item">
        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/4.png" alt="" />
        <div className='CuponPage__item__btn'>
        <a>
          <p>千魚万来</p>
          </a>
          </div>
        <p>ご主人の釣り好きが高じてオープンした、フィッシュバーガーの専門店。
        多くの人にいろいろな魚を食べてもらいたいと、近海でとれる地魚をメインに、釣った魚の買い取りも行っている。</p>
      </div>
      </div>
      

            

      <div className="HomeAc__root" ref={tap2} >
            <div className="HomeAc__root__title">
                <p>カフェ</p>
            </div>
      </div>
      <div className="CuponPage__section__wrap">
      <div className="CuponPage__item">
        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/6.png" alt="" />
        <div className='CuponPage__item__btn'>
        <a>
          <p>CREPESHOP ３o’clock</p>
          </a>
          </div>
        <p>季節のフルーツサンド、タピオカドリンクをテイクアウトおよびイートインにて販売しております。おもてなし広場内にはもう1店舗、クレープ専門店もございます。</p>
      </div>
      
      <div className="CuponPage__item">
        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/7.png" alt="" />
        <div className='CuponPage__item__btn'>
        <a>
          <p>甘味処鎌倉</p>
          </a>
          </div>
        <p>弥彦神社前の通りにある、わらび餅専門店。上品な味わいのお抹茶もおすすめ。イートインも可能ですが席に限りがあるので、足を運ぶ前に店舗に確認してみてください。</p>
      </div>

      <div className="CuponPage__item">
        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/8.png" alt="" />
        <div className='CuponPage__item__btn'>
        <a>
          <p>弥彦うめもと屋</p>
          </a>
          </div>
        <p>弥彦の観光拠点･おもてなし広場内にあるクリームソーダ専門店。写真映えするカラフルなビジュアルが評判で、多くの観光客から注目を集めている。季節によって限定メニューが登場するので、訪れるたびに新たな味に出会えるのも魅力。</p>
      </div>

      <div className="CuponPage__item">
        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/9.png" alt="" />
        <div className='CuponPage__item__btn'>
        <a>
          <p>社彩庵/ひらしお</p>
          </a>
          </div>
        <p>「ひらしお」の２階にある「社彩庵」。彌彦神社、一の鳥居の目の前にある和カフェ。宇治の高級抹茶や丹羽大納言小豆など、厳選素材を使った上品な甘味が人気です。</p>
      </div>

      <div className="CuponPage__item">
        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/11.png" alt="" />
        <div className='CuponPage__item__btn'>
        <a>
          <p>Le･Lapin</p>
          </a>
          </div>
        <p>湯種と「弥彦酒造」の酒かす酵母を使ったしっとりもちもちの食パンに定評があるベーカリー。店内には、地元でとれる季節の野菜やフルーツを駆使した多彩なパンが並ぶ。魅力的なラインアップにきっと、どれにしようか目移りするはず。</p>
      </div>

      <div className="CuponPage__item">
        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/12.png" alt="" />
        <div className='CuponPage__item__btn'>
        <a>
          <p>パレドールワタナベ</p>
          </a>
          </div>
        <p>100種類以上の豊富な品揃え！全てシェフの渾身の手作り。厳選された材料を使用し、シェフこだわりのレシピで作られたスイーツを販売。ケーキ、和菓子などバラエティ豊かで、カフェスペースもある。</p>
      </div>
      </div>


      <div className="HomeAc__root" ref={tap3} >
            <div className="HomeAc__root__title">
                <p>お土産</p>
            </div>
      </div>
      <div className="CuponPage__section__wrap">
        <div className="CuponPage__item">
          <img src="https://my.keirin.kdreams.jp/special/yahiko/image/13.png" alt="" />
          <div className='CuponPage__item__btn'>
          <a>
            <p>分水堂菓子舗</p>
            </a>
            </div>
          <p>2010年に開催されたニッポン全国物産展でグランプリを受賞した、『白パンダ焼き弥彦むすめ（枝豆）餡』が自慢です。</p>
        </div>
        <div className="CuponPage__item">
          <img src="https://my.keirin.kdreams.jp/special/yahiko/image/14.png" alt="" />
          <div className='CuponPage__item__btn'>
          <a>
            <p>三笠屋製菓</p>
            </a>
            </div>
          <p>温泉饅頭・味噌饅頭・玉子饅頭・しそ饅頭・うぐいす饅頭・田舎饅頭の計６種類。 弥彦へお越しの際は、是非どうぞ。 ニンジン・ゴボウの『きんぴらだんご』やミルク味・黒砂糖味の『いや比古』（サブレ）も人気商品です。</p>
        </div>
      </div>


        </div>

        <div className="EatPage__title accese">
      <img id='title' src="https://media.graphassets.com/HiGyT5TSROjPgnaVTjrl" alt="" />
    </div>
    <div className="HomeAc__Maps iframe ">
    <iframe loading="lazy" src="https://www.google.com/maps/d/u/2/embed?mid=1ILSJuULK_5c-9tPEPOFMI_RoWOd9cJI&ehbc=2E312F" width="640" height="480"></iframe>
    </div>
        </div>
    </div>
    </>
  )
}
