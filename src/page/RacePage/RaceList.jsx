import React from 'react'

import '../../styles/style.scss'
import ShowRaceList from './ShowRaceList'


export default function RaceList() {
  return (
    <div>
         <div className="RaceList__header">
          <p>RACE SCHEDULE</p>
          <h3>開催情報</h3>
        </div>
        <div className="RaceList__notice">
          <p>※各出走表および結果一覧へのリンク先は楽天Kドリームス投票サイトに遷移します。 </p>
        </div>
      <div className="RaceList">
     
       
    <ShowRaceList/>
      </div>
  
    
    </div>
  )
}
