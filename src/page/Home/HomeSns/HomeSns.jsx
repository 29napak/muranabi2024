import React from 'react'
import '../../../styles/style.scss'
import { Timeline } from 'react-twitter-widgets';
import HomeAccess from './HomeAccess';
import HomeLink from '../HomeLink/HomeLink';
import { eagerLoadTwitterLibrary } from "react-twitter-widgets";
eagerLoadTwitterLibrary();
import { TwitterTimelineEmbed } from 'react-twitter-embed';


export default function HomeSns() {
    const md = { matches: window.matchMedia("(min-width: 440px)").matches };

  return (
    <>
    <div className='HomeSns'>
        <div className="HomeSns__title">
            <img id='title' src="https://my.keirin.kdreams.jp/special/yahiko/image/title.svg" alt="" />
        </div>
        <div className="HomeSns__SNS">
     
        <a href='https://x.com/yahiko_muranavi' target='blank'>
          <img  src="https://my.keirin.kdreams.jp/special/yahiko/image/bnr_yahiko_x.png" alt="" />
        </a>
          </div>

    </div>
    <HomeAccess/>
    <HomeLink/>
    </>
  )
}
