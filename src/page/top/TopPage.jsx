import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom';
import '../../styles/style.scss'
import TopInfo from './TopInfo';
import TopTopics from './TopTopics';
import TopPvs from './TopPvs';
import HomeCP from '../Home/HomeCP/HomeCP';
import TopCP from './TopCP';
import TopEvent from './TopEvent';
import TopMiryokuVid from './TopMiryokuVid';
import Miryoku from '../Home/TrSopt/Miryoku';
import { FaChevronRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import TopAccece from './TopAccece';
import { Timeline } from 'react-twitter-widgets';
import HomeLink from '../Home/HomeLink/HomeLink';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { FaChevronCircleRight } from 'react-icons/fa'
import TopHero from './TopHero';
import TopBtn from './TopBtn';


const ReactPlayer = lazy(() => import('react-player'));




export default function TopPage() {
    const md = { matches: window.matchMedia("(min-width: 440px)").matches };
    const renderLoader = () => <p>Loading</p>;

    
    return (
        <div className='toppage'>
            <Suspense fallback={<div>Loading...</div>}>
                <TopHero />
            </Suspense>

           <TopBtn/>


           <div className="toppage__info">
                <div className="teaser__warp__content">
                    <div className="title">
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/title1.svg" alt="" />
                    </div>
                    <TopInfo />
                </div>
            </div>

            <div className="bt_sp">
                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/aaaa.png" alt="" />
            </div>
            <div className="bt_pc">
                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/Group%20615.png" alt="" />
            </div>
            <div className="teaser__warp2 top-topics">
                <div className="title">
                    <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/title2.svg" alt="" />
                </div>
                <div className="teaser__warp__content">
                    <TopTopics />
                </div>
            </div>
            <div className="top_sp">
                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/Mask%20group.png" alt="" />
            </div>
            <div className="top_pc">
                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/bg.png" alt="" />
            </div>

            <div className="toppage__info top-pv">
            
                <div className="teaser__warp__content">
               
                    <div className="title">
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/title3.svg" alt="" />
                        <p>寬仁親王牌･世界選手権記念トーナメント</p>
                    </div>
                    <TopPvs />
                </div>
            </div>



            <div className="bt_sp">
                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/aaaa.png" alt="" />
            </div>
            <div className="bt_pc">
                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/Group%20615.png" alt="" />
            </div>


            <div className="teaser__warp2 top-cp">
                <div className="title top-miryoku">
                    <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/title6.svg" alt="" />
                </div>
                <div className="teaser__warp__content top-miryoku">
                    <Link className='seemore' to={"/muranavi"} >
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/Group%20660.png" alt="" />
                    </Link>
                 
                    <div className="title">
                        <p>5つの魅力</p>
                    </div>
                    <div className='miryoku'>

                        <div className="container">
                            <Link to={"/miryoku/eat"} >
                                <div className="miryoku-box">
                                    <div className='miryoku-btn eat' >
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/eat.svg" alt="" />

                                    </div>
                                    <IconContext.Provider value={{ className: "CircleRight" }}>
                                        <FaChevronCircleRight />
                                    </IconContext.Provider>
                                </div>
                            </Link>
                            <Link to={"/miryoku/stay"} >
                                <div className="miryoku-box">
                                    <div className='miryoku-btn stay' >
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/stay.svg" alt="" />

                                    </div>
                                    <IconContext.Provider value={{ className: "CircleRight" }}>
                                        <FaChevronCircleRight />
                                    </IconContext.Provider>
                                </div>
                            </Link>
                            <Link to={"/miryoku/playing"} >
                                <div className="miryoku-box">
                                    <div className='miryoku-btn play' >
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/play.svg" alt="" />

                                    </div>
                                    <IconContext.Provider value={{ className: "CircleRight" }}>
                                        <FaChevronCircleRight />
                                    </IconContext.Provider>
                                </div>
                            </Link>
                            <Link to={"/miryoku/learn"} >
                                <div className="miryoku-box">
                                    <div className='miryoku-btn learn' >
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/learn.svg" alt="" />

                                    </div>
                                    <IconContext.Provider value={{ className: "CircleRight" }}>
                                        <FaChevronCircleRight />
                                    </IconContext.Provider>
                                </div>
                            </Link>
                            <Link to={"/miryoku/spot"} >
                                <div className="miryoku-box">
                                    <div className='miryoku-btn spot' >
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/spot.svg" alt="" />

                                    </div>
                                    <IconContext.Provider value={{ className: "CircleRight" }}>
                                        <FaChevronCircleRight />
                                    </IconContext.Provider>
                                </div>
                            </Link>
                        </div>


                    </div>
                    <Link className='seemore' to={"/miryoku/eat"} >
                        一覧をみる
                        <IconContext.Provider value={{ className: "myReact-icons" }}>
                            <FaChevronRight />
                        </IconContext.Provider>
                    </Link>
                </div>

            </div>


            <div className="top_sp">
                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/Mask%20group.png" alt="" />
            </div>
            <div className="top_pc">
                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/bg.png" alt="" />
            </div>


            <div className="toppage__info top-pv">
                <div className="teaser__warp__content">
                    <div className="title">
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/title7.svg" alt="" />

                    </div>
                    <TopAccece />
                    <div className="box">
                        <p>新潟県西蒲原郡弥彦村弥彦2621</p>
                        <p>・北陸自動車道 三条燕IC(巻潟東IC)から30分</p>
                        <p>・上越新幹線 燕三条駅から弥彦線に乗り換え弥彦駅下車 徒歩15分</p>
                        <p>・ 無料バス JR燕三条駅からタクシーで約30分</p>
                        <a href="https://media.graphassets.com/9qCnNnYRKynxerN31EVA" target='blank'>三条燕ICより （PDFファイル）</a><br />
                        <a href="https://media.graphassets.com/6TgisEgQnmBhpgEiuz1O" target='blank'>巻潟東ICより （PDFファイル）</a>


                        <div className="box__link">
                            <a href='https://media.graphassets.com/H9RKTx6Toa0tBXyfIQkw' target='blank'>
                                <p>ファンバス運行情報＞</p>
                            </a>
                        </div>
                        <div className="box__link">
                            <a href='https://media.graphassets.com/FxWkwBpMRFRyXKNXK9v3' target='blank'>
                                <p>弥彦村内巡回無料バス＞</p>
                            </a>
                        </div>
                        <div className="box__link">
                            <Link to={"/infomation"}>
                                <p>ご来場される皆様へ＞</p>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>

            <div className="bt_sp">
                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/aaaa.png" alt="" />
            </div>
            <div className="bt_pc">
                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/Group%20615.png" alt="" />
            </div>

            <div className="teaser__warp2 top-cp top-twitter">
                <div className="teaser__warp__content">
                    <div className="title">
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/title8.svg" alt="" />
                    </div>

                    <div className='homeTopic__vid vid-yahiko' >

                        <div className="homeTopic__vidwrap">
                            <Suspense fallback={renderLoader()}>
                                <ReactPlayer url="https://www.youtube.com/watch?v=0i09VOQgS74" width="100%" height="100%" />
                            </Suspense>
                        </div>

                    </div>
                    
                    <a href="https://x.com/yahikokeirin?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3Ayahikokeirin%7Ctwcon%5Es2" target='blank'>
                        <div className="yahiko-x">
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/bnr_yahikokeirin_x.jpg" alt="" />
                        </div>
                    </a>

                    <a href="https://www.yahikokeirin.com/" target='blank'>
                        <div className="box__link link-top">
                            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/yahikokeirin.svg" alt="" />
                        </div>
                    </a>

                </div>
            </div>

            <HomeLink />

        </div>
    )
}
