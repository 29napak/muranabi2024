import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom';
import ShowHomeRace from './ShowHomeRace';



export default function HomeRace() {


  return (
    <>
      <div className="homerace">
        <div className="CONTENT">
          <div className="homerace__title">
            <img id='title' src="https://my.keirin.kdreams.jp/special/yahiko/image/title5.svg" alt="" />
          </div>
          <p>\注目レースが盛りだくさん!!!!/</p>
          <ShowHomeRace/>
      
          <Link className='seemore' to={"/race"} >
            一覧をみる
            <IconContext.Provider value={{ className: "myReact-icons" }}>
              <FaChevronRight />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
    </>
  )
}

