import React from 'react'

import '../../styles/style.scss'
import { Link } from 'react-router-dom';
export default function MirokuNav() {
  return (
    <div className='MiryokuNav'>
     <div className="container">
            <Link to={"/miryoku/Eat"} >
              <div className="miryoku-box">
              <div className='miryoku-btn eat' >
               <img src="https://media.graphassets.com/8iByX9MSn6seizblDtOQ" alt="" />
               
                </div>
              
                </div>
            </Link>
            <Link to={"/miryoku/Stay"} >
              <div className="miryoku-box">
              <div className='miryoku-btn stay' >
               <img src="https://media.graphassets.com/RvsylygGRMK8NFbGBIjO" alt="" />
               
                </div>
          
                </div>
            </Link>
            <Link to={"/miryoku/Playing"} >
              <div className="miryoku-box">
              <div className='miryoku-btn play' >
               <img src="https://media.graphassets.com/WWL5KsMSveYtTngII7sA" alt="" />
               
                </div>
     
                </div>
            </Link>
            <Link to={"/miryoku/Learn"} >
              <div className="miryoku-box">
              <div className='miryoku-btn learn' >
               <img src="https://media.graphassets.com/JK2KkVcQaK7msbK9AjCo" alt="" />
               
                </div>
         
                </div>
            </Link>
            <Link to={"/miryoku/Spot"} >
              <div className="miryoku-box">
              <div className='miryoku-btn spot' >
               <img src="https://media.graphassets.com/ssYJlKQxSizUh6ghOmto" alt="" />
               
                </div>
          
                </div>
            </Link>
            </div>
    </div>
  )
}
