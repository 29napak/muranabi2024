import React from 'react'
import '../../../styles/style.scss'
import ReactPlayer from 'react-player'

import { gql,useQuery } from "@apollo/client"
import Miryoku from './Miryoku';


const TRVIDEO = gql`{
    touristspoTviedos {
        id
        url
      }
    }
    
    `;

export default function TrSpot() {
    // const {data,loading,error} = useQuery(TRVIDEO);
    // if(loading)return null;
    // if(error)return null;
  return (
    <div className='trspot'>
       <div className="CONTENT">
        <img  id='title' src="https://media.graphassets.com/GrVOHGIYRwqrDMVxbM6V" alt="" />
        {/* <p>今月のおすすめ</p>
        {data.touristspoTviedos.map((touristspoTviedo) =>(
            <div className='homeTopic__vid'  key={touristspoTviedo.id}>
           <div className="homeTopic__vidwrap">
           <ReactPlayer url={touristspoTviedo.url}  width="100%"  height="100%"/>
           </div>
          </div>
        ))} */}
        <p>5つの魅力</p>
        <Miryoku/>
    </div>
    </div>
  )
}
