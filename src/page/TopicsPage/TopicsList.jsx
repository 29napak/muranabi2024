import React from 'react'
import '../../styles/style.scss'

import ShowTopicNEW from './ShowTopicNEW'
import HomeLink from '../Home/HomeLink/HomeLink'
export default function TopicsList() {
  return (
    <div className='TopicPage topic2024'>
          <div className='MiryokuHead'>
        <div className="RaceList__header">
          <p>TOPICS</p>
          <h3>トピックス一覧</h3>
        </div>
    </div>
    <div className="TopicPage__notice">
    <p>※定期的に公開しますので是非ご覧ください。</p>
    </div>



    <ShowTopicNEW/>
     














    </div>
  )
}
