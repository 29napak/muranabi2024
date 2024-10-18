import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import {IoIosArrowUp} from 'react-icons/Io'
import '../../styles/style.scss'
import { Link } from 'react-router-dom';

export default function Footer() {
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

  return (
    <>
    <ScrollToTop smooth top={20} id='btntop' component={
    <div className='btntop'>
        <IoIosArrowUp/>
        <p>TOP</p>
    </div>}/>
    <img className='Footer-topcv' src="https://my.keirin.kdreams.jp/special/yahiko/image/curve-red.png" alt="" />
    <div className="Footer">
     
      <div className="Footer__wrap">
      {/* <Link to={"/"}>
      <img src="https://media.graphassets.com/YawrnjheRLOoQ54Lf3wL" alt="" />
      </Link>
      <img src="https://media.graphassets.com/mE2TKRRTIW86QJbog6DV" alt="" /> */}
      <Link to={"/"}>
      <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/footerlogo-yahiko2024.png" alt="" />
      </Link>


      
      <a className='Footer__totop' onClick={goToTop}>TOPへ戻る</a>
      <div className="Footer__line"></div>
      <div className="Footer__link">
        <a href="https://keirin.kdreams.jp/info/sitepolicy/"> サイトの利用条件</a>
        <p>│</p>
        <a href="https://keirin.kdreams.jp/info/corporation/">運営者概要</a>
      </div>
      <br></br>
      <div className="Footer__copy">
      <p >競輪とオートレースの売上の一部は、社会貢献活動に役立てられています。車券の購入は20歳になってから。競輪・オートレースは適度に楽しみましょう。</p>
     
      </div>
      <div className="Footer__copy__small">
        <small>Copyright©2024 Yahikokeirin×Kdreams. All Rights Reserved.</small>
      </div>
      </div>
    </div>

    </>
  )
}
