import React from 'react'

import {FaChevronRight} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import { Link } from 'react-router-dom'
import '../../styles/style.scss'
import ShowDate from '../Home/Cupon/ShowDate'
import ShowTerm from '../Home/Cupon/ShowTerm'
import ShowPDF1 from '../Home/Cupon/ShowPDF1'
import ShowPDF2 from '../Home/Cupon/ShowPDF2'
import ShowLink from '../Home/Cupon/ShowLink'
import Cupon from './Cupon'

export default function CouponList() {
  return (
    <div className='CuponPage'>
      <div className="CuponPage__container">
        <div className="CuponPage__title">
          <img src="https://media.graphassets.com/2ilGwMTyTxK2XVc1ZvNv" alt="" />
        </div>
     
      <div className="CuponPage__taishou">
        <p>対象<span>7</span>施設</p>
      </div>
      <div className="CuponPage__notice space">
      <p>獲得後、楽天トラベルのページにリンクします。</p>
    </div>

        <Cupon/>
        
  
    <div className="CuponPage__notice">
       <ShowTerm/> 

    </div>


    <div className="CuponPage__section">
      <div className="CuponPage__section__title">
        <h4>対象施設</h4>
        <p>楽天トラベルクーポンの使い方は<a href="https://travel.rakuten.co.jp/coupon/help.html">こちら</a></p>
      </div>

<div className="CuponPage__section__wrap">
      <div className="CuponPage__item">
        <img src="https://media.graphassets.com/SQGlllbmQcQ5esTYWq0S" alt="" />
        <div className='CuponPage__item__btn'>
        <a href="https://travel.rakuten.co.jp/HOTEL/5284/5284.html" target='blank'>
          <p>四季の宿 みのや</p>
          <IconContext.Provider value={{ className:"get-icon-two"}}>
              <FaChevronRight/>
         </IconContext.Provider>
          </a>
          </div>
        <p>彌彦神社の門前に宿を構えて約300年。料理長が食材のおいしさを生かした調理法で提供する逸品が揃う</p>
      </div>

      <div className="CuponPage__item">
        <img src="https://media.graphassets.com/i1qR7HB4TiC0R2O0rFrC" alt="" />
        <div className='CuponPage__item__btn'>
        <a href="https://travel.rakuten.co.jp/HOTEL/38990/38990.html" target='blank'>
          <p>ホテルヴァイス</p>
          <IconContext.Provider value={{ className:"get-icon-two"}}>
              <FaChevronRight/>
         </IconContext.Provider></a>
         </div>
        <p>フレンチ×温泉の組み合わせが女性に大人気。弥彦産を中心に、県内食材を使用したフレンチをご堪能あれ！</p>
      </div>

      <div className="CuponPage__item">
        <img src="https://media.graphassets.com/jIJCPVQTR9iKE6HgfMbH" alt="" />
        <div className='CuponPage__item__btn'>
        <a href="https://travel.rakuten.co.jp/HOTEL/69313/69313.html" target='blank'>
          <p>割烹の宿 櫻家</p>
          <IconContext.Provider value={{ className:"get-icon-two"}}>
              <FaChevronRight/>
         </IconContext.Provider>
          </a>
          </div>
        <p>大浴場と貸切家族風呂で湯神社温泉が満喫できる。バスチェアなどもあり赤ちゃん連れにも優しいお宿。</p>
      </div>

      <div className="CuponPage__item">
        <img src="https://media.graphassets.com/ayxENFHRdKyS5Nd5gUlJ" alt="" />
        <div className='CuponPage__item__btn'>
        <a href="https://travel.rakuten.co.jp/HOTEL/5035/5035.html" target='blank'>
          <p>名代家</p>
          <IconContext.Provider value={{ className:"get-icon-two"}}>
              <FaChevronRight/>
         </IconContext.Provider>
          </a>
          </div>
        <p>貸切露天風呂「天」空では、弥彦村ののどかな景色を眺めながら、ゆっくりと入浴すこるとができる。</p>
      </div>

      <div className="CuponPage__item">
        <img src="https://media.graphassets.com/UEPOAx6TEq1N9HNd4glq" alt="" />
        <div className='CuponPage__item__btn'>
        <a href="https://travel.rakuten.co.jp/HOTEL/69239/69239.html" target='blank'>
          <p>お宿だいろく</p>
          <IconContext.Provider value={{ className:"get-icon-two"}}>
              <FaChevronRight/>
         </IconContext.Provider>
          </a>
          </div>
        <p>幻想的な雰囲気に包まれる露天風呂は、円形の湯舟が印象的。大切な人と記憶に残る時間を過ごすことができる。</p>
      </div>

      <div className="CuponPage__item">
        <img src="https://media.graphassets.com/g1kWGTtQH6QeNvRPL0eh" alt="" />
        <div className='CuponPage__item__btn'>
        <a href="https://travel.rakuten.co.jp/HOTEL/1979/1979.html" target='blank'>
          <p>上州苑</p>
          <IconContext.Provider value={{ className:"get-icon-two"}}>
              <FaChevronRight/>
         </IconContext.Provider>
          </a>
          </div>
        <p>愛犬と一緒に宿泊、食事をすることが可能。宿の前にはミニドッグランを設置。愛犬用ハンバーグも好評！</p>
      </div>

      <div className="CuponPage__item">
        <img src="https://media.graphassets.com/aZpcuoZTbaDfQdTpMQ7U" alt="" />
        <div className='CuponPage__item__btn'>
        <a href="https://travel.rakuten.co.jp/HOTEL/69268/69268.html" target='blank'>
          <p>旅館 清水屋</p>
          <IconContext.Provider value={{ className:"get-icon-two"}}>
              <FaChevronRight/>
         </IconContext.Provider>
          </a>
          </div>
        <p>彌彦神社の一の鳥居まで目と鼻の先に位置する。神社側の部屋からは一の鳥居や高くそびえる木々を望むことができる。</p>
      </div>


      </div>
      
    </div>
    </div>

    {/* <div className="CuponPage__container two">
        <div className="CuponPage__title">
          <img src="https://media.graphassets.com/5jn2ioEQuimYAhNJ7lAk" alt="" />
        </div>
     
      <div className="CuponPage__taishou">
        <p>2施設<span>限定</span></p>
      </div>

      <div className="CuponPage__rb">
        <img src="https://media.graphassets.com/CSLt9cTBT0OChoYb18hX" alt="" />
        <img src="https://media.graphassets.com/NMwiwBRQSYy49d3JPNZm" alt="" />
      </div>



      <div className="CuponPage__section">
      <div className="CuponPage__section__title">
        <h4>対象施設</h4>
      </div>

      <div className="CuponPage__section__wrap">
      <div className="CuponPage__item">
      <div className="Cupon-sec1">
        <img src="https://media.graphassets.com/Q0JhcIn7SXSIdeuuXEpG" alt="" />
        <div className='CuponPage__item__btn'>
        <a href='https://www.yamamotokan.info/' target='blank' >
          <p>山本館</p>
          <IconContext.Provider value={{ className:"get-icon-two"}}>
              <FaChevronRight/>
         </IconContext.Provider>
          </a>
          </div>
        <p>料理自慢のお宿としても評判。弥彦公園まで徒歩1分という好立地で、朝の散歩に出かけるお客さんも多い。</p>
      
        </div>
      <div className="Cupon-sec2">
      <p>以下よりPDFを印刷してお持ちください</p>
      <div className="Cupon-sec2__red">
        <p>※先着順の利用制限がございますので、宿泊のご予約の際に「ムラナビクーポン」が使用可能かを必ず<br/><span>山本館</span>へご確認ください。</p>
      </div>
      <div className='Cupon Cp2'>
            <div className="Cupon__wrap">
            <div className="Cupon__top">
               <p>先着利用5室</p>
                <p>※「山本館」でのみ使用可</p>
            </div>
            <img src="https://media.graphassets.com/KEnu4qUgSs62jUOyrMmt" alt="" />
        
            </div>
      </div>
  
    <a  href="https://media.graphassets.com/Uu8foek1QHaBS57JTb4n" target='blank'>PDFをダウンロードする</a>
    <div className="CuponPage__notice">
    <p >利用条件：1部屋あたり2万円(税込)以上のご宿泊料金/1名様以上で利用可能／2023年10月2日~2023年12月31日までの宿泊が対象/併用可</p>
   
    </div>
      </div>
      </div>


      <div className="CuponPage__item ">
      <div className="Cupon-sec1">
        <img src="https://media.graphassets.com/xrPrEfD7QCys5olO0DAL" alt="" />
        <div className='CuponPage__item__btn'>
        <a href='http://www.yahiko-powerspot.com/power_spa/myougaya.html' target='blank'>
          <p>弥彦館 冥加屋</p>
          <IconContext.Provider value={{ className:"get-icon-two"}}>
              <FaChevronRight/>
         </IconContext.Provider>
          </a>
          </div>
        <p>湯神社温泉が楽しめる展望風呂が自慢。併設する茶屋では、開運そばが味わえる日帰り温泉付きのセットを用意。</p>
      </div>
      <div className="Cupon-sec2">
      <p>以下よりPDFを印刷してお持ちください</p>
      <div className="Cupon-sec2__red">
        <p>※先着順の利用制限がございますので、宿泊のご予約の際に「ムラナビクーポン」が使用可能かを必ず<br/><span>弥彦館 冥加屋</span>へご確認ください。</p>
      </div>
      <div className='Cupon Cp2'>
            <div className="Cupon__wrap blue">
            <div className="Cupon__top">
               <p>先着利用5室</p>
                <p>※「弥彦館冥加屋」でのみ使用可</p>
            </div>
            <img src="https://media.graphassets.com/KEnu4qUgSs62jUOyrMmt" alt="" />
        
            </div>
      </div>
  
    <a  href="https://media.graphassets.com/L8QbbXLhSNCtvUSoSfO8" target='blank'>PDFをダウンロードする</a>
    <div className="CuponPage__notice">
    <p >利用条件：1部屋あたり2万円(税込)以上のご宿泊料金/1名様以上で利用可能／2023年10月2日~2023年12月31日までの宿泊が対象/併用可</p>
 
    </div>
      </div>
      </div>



      </div>
      </div>
      </div> */}

    </div>
  )
}
