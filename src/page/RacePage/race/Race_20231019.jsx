import React from 'react'
import { useLocation } from 'react-router-dom';
// import { useRace} from './useRace';
import RaceListbgtop from '../RaceListbgtop';
import RaceListbgbottom from '../RaceListbgbottom';
import {FaChevronLeft} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import { Link } from 'react-router-dom';



export default function Race_20231019() {
//   const location =useLocation();
//   const {id} =location.state;
 
//   const {data,loading,error} =useRace(id)
//   if(loading)return null;
//   if(error)return null;
//   console.log(data)
  
  return (
    <>

    <div className='RaceContainer getRace'>
    <RaceListbgtop/>
    <div className="RaceList__content__one">
    
    <div className="RaceList__container">
    
        
        <div className='RaceCard' >
            <div className="RaceCard__title">

                <div className="RaceCard__grad"  style={{backgroundColor:`#C8141D`}}>
                    <img src="https://media.graphassets.com/vgFEKMJNSSGMgDhdF5WD" alt="" />
                </div>
                <div className="RaceCard__head">
                    <p>寬仁親王牌・ 世界選手権記念トーナメント</p>
                    <p>10月19日～10月22日</p>
                </div>
                {/* <img src={data.raceSchedule.timelogo} alt="" /> */}
            </div>
          <div className="RaceCard__content">
          <div className='RaceCard__content__list'>
          <p>10月19日(木)<a href='https://keirin.kdreams.jp/yahiko/racecard/21202310190100/'>出走表</a>|<a href='https://keirin.kdreams.jp/yahiko/raceresult/21202310190100/'>結果一覧</a></p>
          <p>10月20日(金)<a href='https://keirin.kdreams.jp/yahiko/racecard/21202310190200/'>出走表</a>|<a href='https://keirin.kdreams.jp/yahiko/raceresult/21202310190200/'>結果一覧</a></p>
          <p>10月21日(土)<a href='https://keirin.kdreams.jp/yahiko/racecard/21202310190300/'>出走表</a>|<a href='https://keirin.kdreams.jp/yahiko/raceresult/21202310190300/'>結果一覧</a></p>
          <p>10月22日(日)<a href='https://keirin.kdreams.jp/yahiko/racecard/21202310190400/'>出走表</a>|<a href='https://keirin.kdreams.jp/yahiko/raceresult/21202310190400/'>結果一覧</a></p>


            </div>   
       
            <div className="RaceCard__content__banner">
                <a href="https://www.youtube.com/@rakutenkdreams/">
                    <img src="https://media.graphassets.com/8nRIDAa1QwK4ywys5WwS" alt="" />
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
