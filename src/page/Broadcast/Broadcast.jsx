import React from 'react'
import HomeLink from '../Home/HomeLink/HomeLink'
import ShowTv from './ShowTv'
import ShowInternet from './ShowInternet'

export default function Broadcast() {
  return (
    <>
    <div className='teaser event'>
      <div className='MiryokuHead'>
        <div className="RaceList__header">
          <p>BROADCAST INFORMATION</p>
          <h3>各種放送案内</h3>
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
            <img src="https://media.graphassets.com/vM98hGzMQ0a1f83DowiL" alt="" />
          </div>
       

      <ShowTv/>

      <div className="teaser-title"  >
            <img src="https://media.graphassets.com/GjPi0HLTmAuKvEoNRqKQ" alt="" />
          </div>

          <ShowInternet/>
        </div>
      </div>
      <br/>
      <br/>
      

    </div>
    <HomeLink/>
    </>
  )
}
