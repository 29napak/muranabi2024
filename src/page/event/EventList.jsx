import React from 'react'
import '../../styles/style.scss'
import { FaChevronRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import ShowEventList from './ShowEventList'
import ShowServiceList from './ShowServiceList'
import HomeLink from '../Home/HomeLink/HomeLink'
export default function EventList() {
  return (
<>


    <div className='teaser event'>
      <div className='MiryokuHead'>
        <div className="RaceList__header">
          <p>EVENT</p>
          <h3 className='smaller'>イベント・ファンサービス</h3>
        </div>
      </div>

      <div className="bt_sp">
        <img src="https://media.graphassets.com/bTJDFW63Q2qXhcSuQ4xP" alt="" />
      </div>
      <div className="bt_pc bt_pc1">
        <img src="https://media.graphassets.com/AnDsSN5zTXiFEx312p5F" alt="" />
      </div>
      <div className="teaser__warp2" >
        <div className="teaser__warp2__content event-wrap">
          <div className="teaser-title"  >
            <img src="https://media.graphassets.com/yjU4Kme5RR6wp6rCVy4p" alt="" />
          </div>
          {/* <div className="coming-soon"> */}
              {/* <p>comimg soon</p> */}
              {/* <img src="https://media.graphassets.com/E94EFTRaSFqgxiMp4V2S" alt="" /> */}
{/* 
            </div> */}
          <ShowEventList/>


          <br/>
          <br/>
          <div className="teaser-title less-margin"  >
            <img src="https://media.graphassets.com/EBg6YJKcSfGsSqtRCHm6" alt="" />
          </div>
    
          <ShowServiceList/>
        </div>
      </div>
      <br/>
      <br/>
      

    </div>
    <HomeLink/>
    </>
  )
}
