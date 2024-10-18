import React from 'react'
import '../../../styles/style.scss'
import { Link } from 'react-router-dom';
import { gql,useQuery } from "@apollo/client"
import {FaChevronCircleRight} from 'react-icons/fa'
import {IconContext} from 'react-icons'

const TRVIDEO = gql`{
    touristspoTviedos {
        id
        url
      }
    }
    
    `;

export default function Miryoku() {
    // const {data,loading,error} = useQuery(TRVIDEO);
    // if(loading)return null;
    // if(error)return null;
  return (
    <div className='miryoku'>
        
        <div className="container">
            <Link to={"/miryoku/eat"} >
              <div className="miryoku-box">
              <div className='miryoku-btn eat' >
               <img src="https://my.keirin.kdreams.jp/special/yahiko/image/eat.svg" alt="" />
               
                </div>
                <IconContext.Provider value={{ className:"CircleRight"}}>
                    <FaChevronCircleRight/>
                </IconContext.Provider>
                </div>
            </Link>
            <Link to={"/miryoku/stay"} >
              <div className="miryoku-box">
              <div className='miryoku-btn stay' >
               <img src="https://my.keirin.kdreams.jp/special/yahiko/image/stay.svg" alt="" />
               
                </div>
                <IconContext.Provider value={{ className:"CircleRight"}}>
                    <FaChevronCircleRight/>
                </IconContext.Provider>
                </div>
            </Link>
            <Link to={"/miryoku/playing"} >
              <div className="miryoku-box">
              <div className='miryoku-btn play' >
               <img src="https://my.keirin.kdreams.jp/special/yahiko/image/play.svg" alt="" />
               
                </div>
                <IconContext.Provider value={{ className:"CircleRight"}}>
                    <FaChevronCircleRight/>
                </IconContext.Provider>
                </div>
            </Link>
            <Link to={"/miryoku/learn"} >
              <div className="miryoku-box">
              <div className='miryoku-btn learn' >
               <img src="https://my.keirin.kdreams.jp/special/yahiko/image/learn.svg" alt="" />
               
                </div>
                <IconContext.Provider value={{ className:"CircleRight"}}>
                    <FaChevronCircleRight/>
                </IconContext.Provider>
                </div>
            </Link>
            <Link to={"/miryoku/spot"} >
              <div className="miryoku-box">
              <div className='miryoku-btn spot' >
               <img src="https://media.graphassets.com/ssYJlKQxSizUh6ghOmto" alt="" />
               
                </div>
                <IconContext.Provider value={{ className:"CircleRight"}}>
                    <FaChevronCircleRight/>
                </IconContext.Provider>
                </div>
            </Link>
            </div>


    </div>
  )
}
