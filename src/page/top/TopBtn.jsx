import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

export default function TopBtn() {
    const activeClassName = "nav-active"
    const ref = useRef(null)
    const icon = useRef(null)

    const showDropdown = () => {
        ref.current?.classList?.toggle("show-drop")
        icon.current?.classList?.toggle("icon-active")

    }
    const showNavbar = () => {
        navRef.current.classList.toggle("res-nav")
        btnRef.current.classList.toggle("close-nav")
    }
  return (
    <div className="top-btn">
    <br />
    <div className="teaser__warp__content margin10">
        <ul>
            <li>
                <Link to={"/topics"}>
                    <div className='top-btn__btn'>
                        <p>トピックス</p>
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/down-arrow.svg" alt="" />
                    </div>
                </Link>
            </li>
            <li>
                <Link to={"/about"}>
                    <div className='top-btn__btn'>
                        <p>開催情報</p>
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/down-arrow.svg" alt="" />
                    </div>
                </Link>
            </li>
            <li>
                <Link to={"/campaign"}>
                    <div className='top-btn__btn'>
                        <p>キャンペーン</p>
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/down-arrow.svg" alt="" />
                    </div>
                </Link>
            </li>
            <li>
                <Link to={"/event"}>
                    <div className='top-btn__btn'>
                        <p>イベント</p>
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/down-arrow.svg" alt="" />
                    </div>
                </Link>
            </li>
            <li>
                <Link to={"/broadcast"}>
                    <div className='top-btn__btn'>
                        <p>各種放送</p>
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/down-arrow.svg" alt="" />
                    </div>
                </Link>
            </li>
            <li>
                {/* <Link to={"/infomation"}>
                    <div className='top-btn__btn'>
                        <p>有料席案内</p>
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/down-arrow.svg" alt="" />
                    </div>
                </Link> */}
                <div className='dropmenu toppage' onClick={showDropdown}>
                    <a>
                        <div className='top-btn__btn hidebd'>
                            <p>重要なご案内</p>
                            <div ref={icon} className="dropicon">
                                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/down-arrow.svg" alt="" />
                            </div>
                        </div>
                    </a>
                    <div className='drop' ref={ref}>
                        <NavLink onClick={showNavbar} end to="/display" className={({ isActive }) => isActive ? activeClassName : undefined}>横断幕の掲出について</NavLink>
                        <NavLink onClick={showNavbar} to="/infomation" className={({ isActive }) => isActive ? activeClassName : undefined}>有料席発売について</NavLink>
                    </div>
                </div>
            </li>
        </ul>

        <Link className='seemore' to={"/muranavi"} >
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/Group%20660.png" alt="" />
        </Link>
    </div>

</div>
  )
}
