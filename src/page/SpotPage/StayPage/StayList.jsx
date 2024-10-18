import React, { lazy, Suspense } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import Cupon from '../../Home/Cupon/CuponHome'
import { useNavigate } from "react-router-dom";
import ShowDate from '../../Home/Cupon/ShowDate'

import '../../../styles/style.scss'
import MiryokuHead from '../MiryokuHead'
import MirokuNav from '../MirokuNav'

const ReactPlayer = lazy(() => import('react-player'));
const renderLoader = () => <p>Loading</p>;
export default function StayList() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/CouponList");
  }

  return (
    <div className='StayPage'>
      <MiryokuHead />
      <MirokuNav />
      <div className='EatPage__topimg'>
        <div className="EatPage__topimg__wrap">
          <img src="https://media.graphassets.com/Kxg8fp9HTreSVsy7iHgc" alt="" />
          <img src="https://media.graphassets.com/gW6G0FRbiLDcjiIeiUWA" alt="" />
          <img src="https://media.graphassets.com/Fna1B50qTPC7NVStiNNH" alt="" />
        </div>
      </div>
      <div className="EatPage__title">
        <img id='title' src="https://media.graphassets.com/LhjzEKzLRWy7TbYxVBLF" alt="" />
      </div>
      <div className="CuponPage__container">

        <div className="cupon">
          <div className="cupon__header__title">
            <img id='title' src="https://media.graphassets.com/47qs1shBQuNmy2PKkHnQ" alt="" />
          </div>
          <div className="cupon__item">

            <div className="cupon__item" onClick={handleClick}>
              <Cupon/>
            </div>

          </div>

        </div>

        <div className="CuponPage__section__wrap">
          <div className="CuponPage__item">
            <div className="Miryoku__vidwrap">
              <Suspense fallback={renderLoader()}>
                <ReactPlayer url="https://youtu.be/bk0laQx9G0g" width="100%" height="100%" />
              </Suspense>
            </div>
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/cp1.png" alt="" />
            <div className='CuponPage__item__btn'>
              <a href="https://travel.rakuten.co.jp/HOTEL/5284/5284.html" target='blank'>
                <p>四季の宿 みのや</p>
                <IconContext.Provider value={{ className: "get-icon-two" }}>
                  <FaChevronRight />
                </IconContext.Provider>
              </a>
            </div>
            <p>彌彦神社の門前に宿を構えて約300年。料理長が食材のおいしさを生かした調理法で提供する逸品が揃う</p>
          </div>

          <div className="CuponPage__item">
            <div className="Miryoku__vidwrap">
              <Suspense fallback={renderLoader()}>
                <ReactPlayer url="https://youtu.be/GRXfK2pozZE" width="100%" height="100%" />
              </Suspense>
            </div>
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/cp2.png" alt="" />
            <div className='CuponPage__item__btn'>
              <a href="https://travel.rakuten.co.jp/HOTEL/38990/38990.html" target='blank'>
                <p>ホテルヴァイス</p>
                <IconContext.Provider value={{ className: "get-icon-two" }}>
                  <FaChevronRight />
                </IconContext.Provider>
              </a>
            </div>
            <p>フレンチ×温泉の組み合わせが女性に大人気。弥彦産を中心に、県内食材を使用したフレンチをご堪能あれ！</p>
          </div>

          <div className="CuponPage__item">
            <div className="Miryoku__vidwrap">
              <Suspense fallback={renderLoader()}>
                <ReactPlayer url="https://youtu.be/KCCK6_j1b_U" width="100%" height="100%" />
              </Suspense>
            </div>
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/cp3.png" alt="" />
            <div className='CuponPage__item__btn'>
            <a href="https://travel.rakuten.co.jp/HOTEL/69313/69313.html" target='blank'>
              <p>割烹の宿 櫻家</p>
              <IconContext.Provider value={{ className: "get-icon-two" }}>
                <FaChevronRight />
              </IconContext.Provider>
            </a>
            </div>
            <p>大浴場と貸切家族風呂で湯神社温泉が満喫できる。バスチェアなどもあり赤ちゃん連れにも優しいお宿。</p>
          </div>

          <div className="CuponPage__item">
            <div className="Miryoku__vidwrap">
              <Suspense fallback={renderLoader()}>
                <ReactPlayer url="https://youtu.be/bZ4p9zzYtdU" width="100%" height="100%" />
              </Suspense>
            </div>
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/cp4.png" alt="" />
            <div className='CuponPage__item__btn'>
            <a href="https://travel.rakuten.co.jp/HOTEL/5035/5035.html" target='blank'>
              <p>名代家</p>
              <IconContext.Provider value={{ className: "get-icon-two" }}>
                <FaChevronRight />
              </IconContext.Provider>
            </a>
            </div>
            <p>貸切露天風呂「天」空では、弥彦村ののどかな景色を眺めながら、ゆっくりと入浴すこるとができる。</p>
          </div>

          <div className="CuponPage__item">
            <div className="Miryoku__vidwrap">
              <Suspense fallback={renderLoader()}>
                <ReactPlayer url="https://youtu.be/kkg2B7HA6RI" width="100%" height="100%" />
              </Suspense>
            </div>
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/cp5.png" alt="" />
            <div className='CuponPage__item__btn'>
            <a href="https://travel.rakuten.co.jp/HOTEL/69239/69239.html" target='blank'>
              <p>お宿だいろく</p>
              <IconContext.Provider value={{ className: "get-icon-two" }}>
                <FaChevronRight />
              </IconContext.Provider>
            </a>
            </div>
            <p>幻想的な雰囲気に包まれる露天風呂は、円形の湯舟が印象的。大切な人と記憶に残る時間を過ごすことができる。</p>
          </div>

          <div className="CuponPage__item">
            <div className="Miryoku__vidwrap">
              <Suspense fallback={renderLoader()}>
                <ReactPlayer url="https://youtu.be/HkKUKf5GQw0" width="100%" height="100%" />
              </Suspense>
            </div>
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/cp6.png" alt="" />
            <div className='CuponPage__item__btn'>
            <a href="https://travel.rakuten.co.jp/HOTEL/1979/1979.html" target='blank'>
              <p>上州苑</p>
              <IconContext.Provider value={{ className: "get-icon-two" }}>
                <FaChevronRight />
              </IconContext.Provider>
            </a>
            </div>
            <p>愛犬と一緒に宿泊、食事をすることが可能。宿の前にはミニドッグランを設置。愛犬用ハンバーグも好評！</p>
          </div>

          <div className="CuponPage__item">
            <div className="Miryoku__vidwrap">
              <Suspense fallback={renderLoader()}>
                <ReactPlayer url="https://youtu.be/DPbi2Jhy8ic" width="100%" height="100%" />
              </Suspense>
            </div>
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/cp7.png" alt="" />
            <div className='CuponPage__item__btn'>
            <a href="https://travel.rakuten.co.jp/HOTEL/69268/69268.html" target='blank'>
              <p>旅館 清水屋</p>
              <IconContext.Provider value={{ className: "get-icon-two" }}>
                <FaChevronRight />
              </IconContext.Provider>
            </a>
            </div>
            <p>彌彦神社の一の鳥居まで目と鼻の先に位置する。神社側の部屋からは一の鳥居や高くそびえる木々を望むことができる。</p>
          </div>

          <div className="CuponPage__item">
            <div className="Miryoku__vidwrap">
              <Suspense fallback={renderLoader()}>
                <ReactPlayer url="https://youtu.be/1XG801ujrTI" width="100%" height="100%" />
              </Suspense>
            </div>
            <img src="https://media.graphassets.com/Q0JhcIn7SXSIdeuuXEpG" alt="" />
            <div className='CuponPage__item__btn'>
            <a href='https://www.yamamotokan.info/' target='blank'>
              <p>山本館</p>
              <IconContext.Provider value={{ className: "get-icon-two" }}>
                <FaChevronRight />
              </IconContext.Provider>
            </a>
            </div>
            <p>料理自慢のお宿としても評判。弥彦公園まで徒歩1分という好立地で、朝の散歩に出かけるお客さんも多い。</p>
          </div>


          <div className="CuponPage__item">
            <div className="Miryoku__vidwrap">
              <Suspense fallback={renderLoader()}>
                <ReactPlayer url="https://youtu.be/KY508QzZsW0" width="100%" height="100%" />
              </Suspense>
            </div>
            <img src="https://media.graphassets.com/xrPrEfD7QCys5olO0DAL" alt="" />
            <div className='CuponPage__item__btn'>
            <a href='http://www.yahiko-powerspot.com/power_spa/myougaya.html' target='blank'>
              <p>弥彦館 冥加屋</p>
              <IconContext.Provider value={{ className: "get-icon-two" }}>
                <FaChevronRight />
              </IconContext.Provider>
            </a>
            </div>
            <p>湯神社温泉が楽しめる展望風呂が自慢。併設する茶屋では、開運そばが味わえる日帰り温泉付きのセットを用意。</p>
          </div>



        </div>



        <div className="EatPage__title accese">
          <img id='title' src="https://media.graphassets.com/HiGyT5TSROjPgnaVTjrl" alt="" />
        </div>
        <div className="HomeAc__Maps iframe ">
          <iframe loading="lazy" src="https://www.google.com/maps/d/u/2/embed?mid=1Zel-FRXkhA5vk8lC10hOGt-j8GiseXk&ehbc=2E312F" width="640" height="480"></iframe>
        </div>


      </div>
    </div>
  )
}
