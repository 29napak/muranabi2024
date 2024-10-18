import React from 'react'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import '../../styles/style.scss'
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from 'react-icons/Io'




export default function Header() {
    const activeClassName = "nav-active"
    const backtoTop = useNavigate();
    const navRef = useRef();
    const btnRef = useRef();
    const ref = useRef();
    const icon = useRef();

    const showDropdown = () => {
        ref.current.classList.toggle("show-drop")
        icon.current.classList.toggle("icon-active")

    }
    const showNavbar = () => {
        navRef.current.classList.toggle("res-nav")
        btnRef.current.classList.toggle("close-nav")
    }
    function toTop() {
        backtoTop("/");
    }


    return (
        <>
            <div className="Header">
                <div className="Header__container">
                    <div className="Header__container__Logo" onClick={toTop}>
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/logo-yahiko2024.jpg" alt="" />
                    </div>
                    <div className="Header__nav">


                        <div className='navBtn' onClick={showNavbar}>
                            <ul>
                                <li className="line01"></li>
                                <li className="line02"></li>
                                <li className="line03"></li>
                            </ul>
                            <p>MENU</p>
                        </div>
                        <nav ref={navRef}  >
                            <NavLink onClick={showNavbar} end to="/" className={({ isActive }) => isActive ? activeClassName : undefined}>Top</NavLink>
                            <NavLink onClick={showNavbar} to="/about" className={({ isActive }) => isActive ? activeClassName : undefined}>開催情報</NavLink>
                            {/* <NavLink onClick={showNavbar} to="/topics/" className={({ isActive }) => isActive ? activeClassName : undefined}>トピックス</NavLink> */}

                            <NavLink onClick={showNavbar} to="/campaign" className={({ isActive }) => isActive ? activeClassName : undefined}>キャンペーン</NavLink>
                            <NavLink onClick={showNavbar} to="/event" className={({ isActive }) => isActive ? activeClassName : undefined}>イベント</NavLink>
                            <NavLink onClick={showNavbar} to="/broadcast" className={({ isActive }) => isActive ? activeClassName : undefined}>各種放送</NavLink>
                            {/* <NavLink onClick={showNavbar} to="/infomation" className={({isActive}) => isActive ? activeClassName : undefined}>有料席案内</NavLink> */}
                           
                         
                            {/* <NavLink onClick={showNavbar} to="/miryoku/stay/*" className={({ isActive }) => isActive ? activeClassName : undefined}>弥彦村の魅力</NavLink> */}
                            <div className='dropmenu' onClick={showDropdown}>
                                <a>
                                    <p>重要なご案内</p>
                                    <div ref={icon} className="dropicon">
                                        <IoIosArrowDown />
                                    </div>
                                </a>
                                <div className='drop' ref={ref}>
                                    <NavLink onClick={showNavbar} end to="/display" className={({ isActive }) => isActive ? activeClassName : undefined}>横断幕の掲出について</NavLink>
                                    <NavLink onClick={showNavbar} to="/infomation" className={({ isActive }) => isActive ? activeClassName : undefined}>有料席発売について</NavLink>
                                </div>
                            </div>
                            {/* <a href="https://www.yahikokeirin.com/" target='blank'>弥彦競輪場WEB</a>  */}
                            
                            <NavLink onClick={showNavbar} to="/muranavi" className={({ isActive }) => isActive ? activeClassName : undefined}>ムラナビ</NavLink>
                        </nav>

                        <div className='navBtn nav-close' ref={btnRef} onClick={showNavbar}>
                            <ul>
                                <li className="line01"></li>
                                <li className="line02"></li>
                                <li className="line03"></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}
