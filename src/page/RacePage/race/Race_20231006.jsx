import React from 'react'
import { useLocation } from 'react-router-dom';
// import { useRace} from './useRace';
import RaceListbgtop from '../RaceListbgtop';
import RaceListbgbottom from '../RaceListbgbottom';
import {FaChevronLeft} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import { Link } from 'react-router-dom';


export default function Race_20231006() {
  return (
       <>

    <div className='RaceContainer getRace'>
    <RaceListbgtop/>
    <div className="RaceList__content__one">
    
    <div className="RaceList__container">
    
        
        <div className='RaceCard' >
            <div className="RaceCard__title">

                <div className="RaceCard__grad"  style={{backgroundColor:`#FFDC61`}}>
                    <img src="https://media.graphassets.com/xSTSEU1NQO2TMQjJV8mw" alt="" />
                </div>
                <div className="RaceCard__head">
                    <p>弥彦王冠記念・ 報知新聞賞</p>
                    <p>10月6日～10月8日</p>
                </div>
                {/* <img src={data.raceSchedule.timelogo} alt="" /> */}
            </div>
          <div className="RaceCard__content">
          <div className='RaceCard__content__list'>
          <p>10月6日(金)<a href='https://keirin.kdreams.jp/yahiko/racecard/21202310060100/'>出走表</a>|<a href='https://keirin.kdreams.jp/yahiko/raceresult/21202310060100/'>結果一覧</a></p>
          <p>10月7日(土)<a href='https://keirin.kdreams.jp/yahiko/racecard/21202310060200/'>出走表</a>|<a href='https://keirin.kdreams.jp/yahiko/raceresult/21202310060200/'>結果一覧</a></p>
          <p>10月8日(日)<a href='https://keirin.kdreams.jp/yahiko/racecard/21202310060300/'>出走表</a>|<a href='https://keirin.kdreams.jp/yahiko/raceresult/21202310060300/'>結果一覧</a></p>


            </div>   
       
            <div className="RaceCard__content__banner">
                <a href="https://www.youtube.com/playlist?list=PLB-wWyRtVw4Z6JPf8aWOex0d25eFpejim">
                    <img src="https://media.graphassets.com/kXoykNXTZOZDyJn7yHIT" alt="" />
                </a>
          
         
            </div>
          </div>


        
        </div>

        <div className="backtolist">
    <Link className='seemore' to={"/race"} >
       
      <IconContext.Provider value={{ className:"myReact-icons"}}>
      <FaChevronLeft/>
  </IconContext.Provider>
  一覧をみる
  </Link>
  </div>

        </div>
        </div>

  </div>
  </>
  )
}


// export default function Race_20231028() {
// //   const location =useLocation();
// //   const {id} =location.state;
 
// //   const {data,loading,error} =useRace(id)
// //   if(loading)return null;
// //   if(error)return null;
// //   console.log(data)
  
//   return (
//     <>
//     <h1>husahdkhasuhduahou</h1>
//     <div className='RaceContainer getRace'>
//     <RaceListbgtop/>
//     <div className="RaceList__content__one">
    
//     <div className="RaceList__container">
    
        
//         <div className='RaceCard' >
//             <div className="RaceCard__title">

//                 <div className="RaceCard__grad"  style={{backgroundColor:"2BAE7"}}>
//                     <img src="https://media.graphassets.com/tvHakrgaSLaFcNI8Trfy" alt="" />
//                 </div>
//                 <div className="RaceCard__head">
//                     <p>日本トーター賞</p>
//                     <p>9月3日～9月5日</p>
//                 </div>
//                 {/* <img src={data.raceSchedule.timelogo} alt="" /> */}
//             </div>
//           <div className="RaceCard__content">
//           <div className='RaceCard__content__list'>
//           <p>9月28日(木)<a href=''>出走表</a>|<a href=''>結果一覧</a></p>
// {/* 9月29日(金)出走表|結果一覧
// 9月30日(土)出走表|結果一覧 */}

//             </div>   
       
//             {/* <div className="RaceCard__content__banner">
//                 <a href={data.raceSchedule.bannerlink1}>
//                     <img src={data.raceSchedule.bannerImg1} alt="" />
//                 </a>
//                 <a href={data.raceSchedule.bannerlink2}>
//                     <img src={data.raceSchedule.bannerImg2}  alt="" />
//                 </a>
//                 <a href={data.raceSchedule.bannerlink1}>
//                     <img src={data.raceSchedule.bannerImg3}  alt="" />
//                 </a>
         
//             </div> */}
//           </div>


        
//         </div>

//         <div className="backtolist">
//     <Link className='seemore' to={"/race"} >
       
//       <IconContext.Provider value={{ className:"myReact-icons"}}>
//       <FaChevronLeft/>
//   </IconContext.Provider>
//   一覧をみる
//   </Link>
//   </div>

//         </div>
//         </div>

//   </div>
//   </>
//   )
// }
