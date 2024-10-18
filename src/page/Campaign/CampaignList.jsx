import React from 'react'
import '../../styles/style.scss'
import { FaChevronRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import ShowYahikoCPList from './ShowYahikoCPList'
import ShowOtherCPList from './ShowOtherCPList'
import HomeLink from '../Home/HomeLink/HomeLink'
export default function CampaignList() {
  return (
    <>
      <div className='teaser event'>
        <div className='MiryokuHead'>
          <div className="RaceList__header">
            <p>CAMPAIGN</p>
            <h3>キャンペーン</h3>
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
            {/* <div className="teaser-title"  >
              <img src="https://media.graphassets.com/cCzjYvgrQhS2mpSuQvrl" alt="" />
            </div> */}

      
             
     


            
            <ShowYahikoCPList/>


   
            {/* <div className="teaser-title cp-title2"  >
              <img src="https://media.graphassets.com/NNLsoaweRtCDFD0spmvN" alt="" />
            </div> */}
           
            {/* <ShowOtherCPList /> */}


            </div>
            
          </div>
        </div>
     


      
      <HomeLink />
    </>
  )
}
