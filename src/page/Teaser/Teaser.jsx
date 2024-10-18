import React, { useState } from 'react'
import '../../styles/style.scss'
import { Helmet } from "react-helmet";
import HomeLink from '../Home/HomeLink/HomeLink';
import { Link } from 'react-router-dom';
import { useRef } from 'react'
import Warp2 from './Warp2';
import Warp1 from './Warp1';
import Vid from './Vid';
import Vid2 from './Vid2';


export default function Teaser() {
    const root1 = useRef(null);
    const root2 = useRef(null);
    const root3 = useRef(null);
    const root4 = useRef(null);
    const root5 = useRef(null);
    const ref = useRef(null);
    const ref2 = useRef(null);
  
    const tap1 = () => {
        ref2.current.classList.add("on-click")
        ref.current.classList.remove("on-click")

    }
    const tap2 = () => {
        ref.current.classList.add("on-click")
        ref2.current.classList.remove("on-click")

    }
    return (
        <React.Fragment>
            <Helmet>
                <title>トピックス | ぶらり旅。その村は、どこですか？「ムラナビ1/183」～新潟県弥彦村のおもてなし～</title>
        

            </Helmet>
            <div className='teaser'>
                <div className='MiryokuHead'>
                    <div className="RaceList__header">
                        <p>ABOUT</p>
                        <h3>寬仁親王牌について</h3>
                    </div>

                </div>



                <div className="bt_sp bt_sp1">
                    <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/555.png" alt="" />
                </div>
                <div className="bt_pc bt_pc1">
                    <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/bg.png" alt="" />
                </div>

                <div className="top-btn teaser-top-btn">
                    <div className="teaser__warp2 top-topics">
                        <ul>
                            <li>
                                <Link onClick={() => {
                                    ref2.current.classList.add("on-click")
                                    ref.current.classList.remove("on-click")
                                    root1.current?.scrollIntoView({ behavior: 'smooth' })
                                }} >
                                    <div className='top-btn__btn'>
                                        <p>寬仁親王牌<br />とは？</p>
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/Group%2060.svg" alt="" />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => {
                                    ref2.current.classList.add("on-click")
                                    ref.current.classList.remove("on-click")
                                    root2.current?.scrollIntoView({ behavior: 'smooth' })

                                }}>
                                    <div className='top-btn__btn'  >
                                        <p>歴代優勝者</p>
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/Group%2060.svg" alt="" />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => {
                                    ref2.current.classList.add("on-click")
                                    ref.current.classList.remove("on-click")
                                    root3.current?.scrollIntoView({ behavior: 'smooth' })
                                }}>
                                    <div className='top-btn__btn'>
                                        <p>出場選抜<br />基準</p>
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/Group%2060.svg" alt="" />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => {
                                    ref.current.classList.add("on-click")
                                    ref2.current.classList.remove("on-click")

                                }}
                                >
                                    <div className='top-btn__btn'  >
                                        <p>中野浩一<br />開催展望</p>
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/Group%2060.svg" alt="" />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => {
                                    ref.current.classList.add("on-click")
                                    ref2.current.classList.remove("on-click")
                                    root4.current?.scrollIntoView({ behavior: 'smooth' })
                                }}>
                                    <div className='top-btn__btn'  >
                                        <p>中野浩一<br />注目選手</p>
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/Group%2060.svg" alt="" />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => {
                                    ref.current.classList.add("on-click")
                                    ref2.current.classList.remove("on-click")
                                    root5.current?.scrollIntoView({ behavior: 'smooth' })
                                }}>
                                    <div className='top-btn__btn' >
                                        <p>発走時間<br />概定番組</p>
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/Group%2060.svg" alt="" />
                                    </div>
                                </Link>
                            </li>
                        </ul>


                    </div>


                </div>


                <div ref={ref}>
                    <div className="bt_sp bt-sp2">
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/bg-1.png" alt="" />
                    </div>
                    <div className="bt_pc bt-cp2">
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/bg11.png" alt="" />
                    </div>


                    <div className="teaser__warp" >

                        <div className="teaser__warp__content teaser-1">
                            <div className="infomationBtn">
                                <div className="infomationBtn__btn">
                                    <Link to={"/infomation"}>
                                        <p>有料席発売について＞</p>
                                    </Link>

                                </div>
                            </div>

                            <div className="teaser__warp__title" ref={root1}>
                                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/title.png" alt="" />
                            </div>
                            <p> 平成2年8月アジアで初めて開催された「世界選手権自転車競技大会」（グリーンドーム前橋）を記念し、同年5月に行なわれた「世界選手権自転車競技日本大会特別記念レース」がルーツとなっている。平成4年「世界選手権自転車競技大会」日本大会の名誉総裁をお務めになられた寬仁親王殿下（ともひとしんのうでんか）より“寬仁親王牌”が下賜されるとともに、それまでの1日開催から3日間開催のトーナメント戦となったため「世界選手権記念トーナメント（寬仁親王牌争奪）」と名称を改めて第1回が実施された。平成6年、特別競輪（現在のGⅠ相当）に格上げされ、『寬仁親王牌・世界選手権記念トーナメント』と名称変更された。</p>

                            <div className="teaser-title" ref={root2} id='ABC'>
                                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/Group%20654.svg" alt="" />
                            </div>

                            <div className="senshu">






                                <div className="senshu__wrap">
                                <div className="senshu__main">
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/2023-kosyo.png" alt="" />
                                        <p className='kaisai'>第32回 優勝者(弥彦)</p>
                                        <p className='name'>古性 優作</p>
                                        <p className='form'>（大阪/100期）</p>
                                        <br />
                                        <a href="https://keirin.kdreams.jp/yahiko/racedetail/2120231019040012/?pageType=result">レース結果＞</a><br />
                                        <a href="https://www.youtube.com/watch?v=JgWBaG5gHwc">レース振返り＞</a>
                                    </div>
                                    <div className="senshu__main">
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/2022-nitta.png" alt="" />
                                        <p className='kaisai'>第31回 優勝者(前橋)</p>
                                        <p className='name'>新田 祐大</p>
                                        <p className='form'>（福島/90期）</p>
                                        <br />
                                        <a href="https://keirin.kdreams.jp/maebashi/racedetail/2220221020040012/?pageType=result">レース結果＞</a><br />
                                        <a href="https://www.youtube.com/watch?v=KPenQzn3u7M">レース振返り＞</a>
                                    </div>
                                    <div className="senshu__main">
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/1.png" alt="" />
                                        <p className='kaisai'>第30回 優勝者(弥彦)</p>
                                        <p className='name'>平原康多</p>
                                        <p className='form'>（埼玉/87期）</p>
                                        <br />
                                        <a href="https://keirin.kdreams.jp/yahiko/racedetail/2120211021040012/?pageType=result">レース結果＞</a><br />
                                        <a href="https://www.youtube.com/watch?v=WFgzxYksrCQ">レース振返り＞</a>
                                    </div>
                                    <div className="senshu__main">
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/2.png" alt="" />
                                        <p className='kaisai'>第29回 優勝者(前橋)</p>
                                        <p className='name'>脇本雄太</p>
                                        <p className='form'>（福井/94期）</p>
                                        <br />
                                        <a href="https://keirin.kdreams.jp/maebashi/racedetail/2220201015040012/?pageType=result">レース結果＞</a><br />
                                        <a href="https://www.youtube.com/watch?v=h0zYLNDClwQ">レース振返り＞</a>
                                    </div>
                                    <div className="senshu__main">
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/Mask%20group3.png" alt="" />
                                        <p className='kaisai'>第28回 優勝者(前橋)</p>
                                        <p className='name'>村上博幸</p>
                                        <p className='form'>（京都/86期）</p>
                                        <br />
                                        <a href="https://keirin.kdreams.jp/maebashi/racedetail/2220191011050012/?pageType=result">レース結果＞</a><br />
                                        <a href="https://www.youtube.com/watch?v=OzlTTgwsFvc">レース振返り＞</a>
                                    </div>
                                    <div className="senshu__main">
                                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/Mask%20group4.png" alt="" />
                                        <p className='kaisai'>第27回 優勝者(前橋)</p>
                                        <p className='name'>脇本雄太</p>
                                        <p className='form'>（福井/94期）</p>
                                        <br />
                                        <a href="https://keirin.kdreams.jp/maebashi/racedetail/2220181005040012/?pageType=result">レース結果＞</a><br />
                                        <a href="https://www.youtube.com/watch?v=lKJ14INNWxc">レース振返り＞</a>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="teser-time">
                            <a href="https://media.graphassets.com/QiKHb5rHS7SXlZWKpW7N" target='blank'>
                                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/rekidai-win.jpg" alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="bt_sp margin-top10">
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/aaaa.png" alt="" />
                    </div>
                    <div className="bt_pc">
                        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/Group%20615.png" alt="" />
                    </div>

                    <div className="teaser__warp2" ref={root3}>
                        <div className="teaser__warp2__content">
                            <div className="teaser__warp2__title more-margin">
                                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/title2.png" alt="" />
                            </div>
                            <p>・参加選手数／108名、補欠／8名 </p>
 <br/>

                            <p>▼選考期間≫ </p>

                            <p>①平均競走得点 </p>

                            <p>2024年2月～2024年7月（6ヶ月） </p>

                            <p>②国際大会 </p>

                            <p>2023年8月～2023年7月（12ヶ月） </p>

 
 
                            <br/>
                            <p>▼開催時S級在籍≫ </p>

                            <p>(1) 開催時S級S班在籍者 </p>
                            <p>(2) 寛仁親王牌・世界選手権記念トーナメントで3回以上優勝した者（開催時S級1班在籍） </p>
                            <p>(3) パリオリンピック自転車競技トラック種目代表選手 </p>
                            <p>(4) 選考期間において2か月以上JCFトラック種目強化指定（S）に所属した者（開催時S級1班在籍） </p>
                            <p>(5) 選考期間における世界選トラック競技出場者 </p>
                            <p>(6) 選考期間における世界選に準ずる国際大会トラック競技の1～3位 </p>
                            <p>(7) 選考期間におけるアジア選ケイリン及びスプリント1位 </p>
                            <p>(8) 過去のオリンピック自転車競技トラック種目メダリスト </p>
                            <p>　　（全プロトラック競技出場かつ開催時S級1班在籍） </p>
                            <p>(9) 2024年度全プロトラック種目出場者で各種目の1～3位 </p>
                            <p>　　（ただし、ケイリン競走においては決勝出場者全員） </p>
                            <p>(10) 2024年度全プロトラック競技出場者で選考期間における平均競走得点上位者 </p>
                            <p>　　（同点の場合は選考期間における選考用賞金獲得額上位者） </p>
                            <p>(11) (1)～(10)で108名に達しない場合は2023年度地区プロトラック競技出場者から選考期間における平均競走得点を勘案し選手選考委員会が推薦した者 </p>
                            <br/>

                            <p>▼〔理事長杯：1R〕（9名） </p>

                            <p>(ｱ) パリオリンピック自転車競技トラック個人種目メダル獲得者 </p>
                            <p>(ｲ) 選考期間における世界選ケイリンまたはスプリント1位～3位 </p>
                            <p>(ｳ) ①2024年度全プロケイリン１位、②同スプリント1位、③同1kmT.T.1位 </p>
                            <p>(ｴ) 開催時S級S班在籍の全プロ出場者のうち選考期間における平均競走得点上位者 </p>
                            <p>(ｵ) 開催時S級S班在籍者のうち選考期間における平均競走得点上位者 </p>
                            <p>(ｶ) 開催時S級1班在籍者のうち選考期間における平均競走得点上位者 </p>
                            <br/>

                            <p>▼〔特選：2R〕（18名） </p>

                            <p>(ｱ) 選考期間におけるネーションズカップ、アジア選のケイリンまたはスプリント1位 </p>
                            <p>(ｲ) KEIRINグランプリ2023優勝者（理事長杯に選抜されない場合） </p>
                            <p>(ｳ) ①2024年度全プロケイリン決勝競走出場者 </p>
                            <p>　　　（ただし理事長杯(ｳ)①で選抜された者及び決勝競走で失格となった者を除く） </p>
                            <p>　　②同スプリント2～3位、③同1kmT.T.2～3位、④同チームスプリント1位 </p>
                            <p>(ｴ) 開催時S級S班在籍の全プロ出場者のうち選考期間における平均競走得点上位者 </p>
                            <p>(ｵ) 開催時S級S班在籍者のうち選考期間における平均競走得点上位者 </p>
                            <p>(ｶ) 開催時S級1班在籍者のうち選考期間における平均競走得点上位者 </p>
 
                            <br/>
                            <p>▼備考 </p>

                            <p>・選考期間内における国際大会（世界選手権自転車競技大会・アジア自転車競技選手権大会ネーションズカップ等）を選考の対象とし、複数回開催された場合は全て対象とする。 </p>
                            <p>・選考期間内において上記国際大会が開催されない場合は、選考の対象としない。 </p>
                            
                        </div>
                    </div>
                </div>
                <div className='on-click' ref={ref2} >
                    <div className="teaser__warp2" >
                        <div className="teaser__warp2__content content-teaser2">
                            <div className="teaser__warp2__title no-margintop" >
                                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/Group%20629.svg" alt="" />
                            </div>
                            
                            <Warp1/>
                            <Vid/>



                            <div className="teaser__warp2__title no-margintop" ref={root4}>
                                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/Group%20651.svg" alt="" />
                            </div>


                            <Warp2/>
                            <Vid2/>
                            {/* <div className="senshu sec-2">
                                <div className="senshu__main sec-2">
                                    <img src="https://media.graphassets.com/PQeRMCJwS9aIozJ2DahQ" alt="" />
                                    <br />
                                    <br />
                                    <p className='name'>新山響平</p>
                                    <p className='form'>（107期/青森）</p>
                                    <br />
                                    <div className="senshu__main__text">
                                    <p>来月２日で30歳。まくりにも威力があるのに、あくまで先行基本の組み立て。豊橋記念８着（９月28日～10月１日）、地区プロのケイリン３着と１㎞TT２着（４日）、熊本記念７着（６日～９日）。過密な競走日程が心配か。</p>
                                    </div>
                                </div>
                                <div className="senshu__main sec-2">
                                    <img src="https://media.graphassets.com/v2cfIUJGSVGZP9R9xcdb" alt="" />
                                    <br />
                                    <br />
                                    <p className='name'>佐藤慎太郎</p>
                                    <p className='form'>（78期/福島）</p>
                                    <br />
                                    <div className="senshu__main__text">
                                    <p>来月７日で47歳。今年はまだ優勝こそないが、GⅠはダービー３着、高松宮記念杯は準優勝。GⅢは準優勝３回と抜群の安定感。ところが直線が長い当所の寬仁親王牌は５回出場してまだ決勝に乗っていない。</p>
                                    </div>
                                </div>
                                <div className="senshu__main sec-2">
                                    <img src="https://media.graphassets.com/449Nr43kS4QYqolzmYzw" alt="" />
                                    <br />
                                    <br />
                                    <p className='name'>新田祐大</p>
                                    <p className='form'>（90期/福島）</p>
                                    <br />
                                    <div className="senshu__main__text">
                                    <p>オールスターのシャイニングスター賞で落車してから、いまひとつのレースが続いていたが、４日の地区プロ１㎞TTを１分３秒591で大会３連覇。脚の方はもう問題ない。</p>
                                    </div>
                                </div>
                                <div className="senshu__main sec-2">
                                    <img src="https://media.graphassets.com/Pgrs4Hc1S9RNX0VbJxHA" alt="" />
                                    <br />
                                    <br />
                                    <p className='name'>古性優作</p>
                                    <p className='form'>（100期/大阪）</p>
                                    <br />
                                    <div className="senshu__main__text">
                                    <p>熊本記念は決勝を外した。準決は一列棒状の８番手という苦しい展開ながら、無理やりホームからの仕掛けて４着。体が重そうで反応は悪かったが、この強い気持ちがあれば、中８日の調整で仕上げてくるはず。</p>
                                    </div>
                                </div>
                                <div className="senshu__main sec-2">
                                    <img src="https://media.graphassets.com/eXbhyRN3SUqdrnmtScRY" alt="" />
                                    <br />
                                    <br />
                                    <p className='name'>松浦悠士</p>
                                    <p className='form'>（98期/広島）</p>
                                    <br />
                                    <div className="senshu__main__text">
                                    <p>オールスターの落車で左の肩甲骨と鎖骨を骨折。８割の状態で参加した熊本記念は二次予選こそ番手まくりで１着だったが、自力のレースでは苦戦続き。すぐれた競輪脳でどこまで補ってくるか。</p>
                                    </div>
                                </div>
                                <div className="senshu__main sec-2">
                                    <img src="https://media.graphassets.com/4fTrZPs9Tv6JRqWQpTyN" alt="" />
                                    <br />
                                    <br />
                                    <p className='name'>平原康多</p>
                                    <p className='form'>（87期/埼玉）</p>
                                    <br />
                                    <div className="senshu__main__text">
                                    <p>９月の立川記念は優勝した森田優弥の番手を回りながら後ろに抜かれて３着。前回の共同通信社杯は初日に逃げて８着に沈んで途中欠場。これが今の実力なのか。当所は５回連続で途中欠場していた時期があったが、ここ３年は記念、GⅠ、記念で連続優勝。</p>
                                    </div>
                                </div>
                                <div className="senshu__main sec-2">
                                    <img src="https://media.graphassets.com/sUIoWbssSGiHbNi5yZ6X" alt="" />
                                    <br />
                                    <br />
                                    <p className='name'>眞杉匠</p>
                                    <p className='form'>（113期/栃木）</p>
                                    <br />
                                    <div className="senshu__main__text">
                                    <p>新山と並ぶ東日本の大砲。ただオールスターを番手まくりで制してからは低迷が続く。前回の９月松戸は根田空史の先行を６番手からまくっていくが、車が進まず６着。どう立て直してくるか。</p>
                                    </div>
                                </div>
                                <div className="senshu__main sec-2">
                                    <img src="https://media.graphassets.com/WgrqQOvUSKq0XHRb6Ecn" alt="" />
                                    <br />
                                    <br />
                                    <p className='name'>山口拳矢</p>
                                    <p className='form'>（117期/岐阜）</p>
                                    <br />
                                    <div className="senshu__main__text">
                                    <p>2021年の寬仁親王牌は１⑨①②。二次予選こそ先行して９着と敗れたが、あとはまくりで連対。7月の名古屋記念を制したあとはいまひとつだったが、前回の川崎で番手まくりの取鳥雄吾を３番手から11秒1の脚で追い込んで優勝。状態は上向き。</p>
                                    </div>
                                </div>
                                <div className="senshu__main sec-2">
                                    <img src="https://media.graphassets.com/QFChwrq6QIWV6IUKRLFt" alt="" />
                                    <br />
                                    <br />
                                    <p className='name'>犬伏湧也</p>
                                    <p className='form'>（119期/徳島）</p>
                                    <br />
                                    <div className="senshu__main__text">
                                    <p>３月の大垣記念は単騎ながら、ホームカマシで後続を５車身ぶっち切って優勝。まだ展開に注文がつくが、ホームカマシは松浦でも千切れるほどの破壊力を誇る。当所は初出場。</p>
                                    </div>
                                </div>

                                <div className="senshu__main sec-2">
                                    <img src="https://media.graphassets.com/hRtdPZGS2mI7wCliwj1Q" alt="" />
                                    <br />
                                    <br />
                                    <p className='name'>嘉永泰斗</p>
                                    <p className='form'>（113期/熊本）</p>
                                    <br />
                                    <div className="senshu__main__text">
                                    <p>山口拳矢、眞杉匠に続いてタイトルを狙える力がついてきた。熊本記念の初日に落車して右半身を打撲擦過。決勝まで気持ちで走り切って準優勝を果たしたが、その反動が少し心配。</p>
                                    </div>
                                </div>
                                <div className="senshu__main sec-2">
                                    <img src="https://media.graphassets.com/ldQ2qIQQr6SVgwsWpH2Q" alt="" />
                                    <br />
                                    <br />
                                    <p className='name'>中野慎詞</p>
                                    <p className='form'>（121期/岩手）</p>
                                    <br />
                                    <div className="senshu__main__text">
                                    <p>８月にイギリスで行われた世界選のケイリンで銅メダル。ポテンシャルは誰もが認めるところ。今年は3月の小田原と８月のオールスターしか競輪を走っていない。この２回ともいいところがなく、競輪競走のレース勘はちょっと心配。</p>
                                    </div>
                                </div>
                                <div className="senshu__main sec-2">
                                    <img src="https://media.graphassets.com/93Qi3LWXRv29EBvZUivU" alt="" />
                                    <br />
                                    <br />
                                    <p className='name'>太田海也</p>
                                    <p className='form'>（121期/岡山）</p>
                                    <br />
                                    <div className="senshu__main__text">
                                    <p>オールスターの準決は新山をたたいたものの、吉田拓矢にまくられて４着と敗れたが、あとの４走はすべて先行して３勝、２着１回。タイトルを獲る勢いだった。競技だけでなく、９車立ての競輪でも結果を出している。９月末のアジア大会はスプリント、チームスプリントで優勝。</p>
                                    </div>
                                </div>
                                

                            </div> */}




                            <br />

                            <br />
                            <div className="pdf-link">
                                <a href="https://media.graphassets.com/XGod2vwSStWojwzP1gPM">出場予定選手</a>
                            </div>
                            <div className="pdf-link">
                                <a href="https://media.graphassets.com/FxiTzKZESsm1r33o18Zc">出場予定選手（理事長杯及び特別選抜</a>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div className="teaser__warp2__title" ref={root5} >
                                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/Group%20652.svg" alt="" />
                            </div>
                            <br />
                            <br />
                            <a href="https://media.graphassets.com/No2M1ZYrSvWc23Eo8XCm">
                                <img src="https://media.graphassets.com/TWffuN6TcakFCPnA0wI2" alt="" />
                            </a>
                            <br />
                            <br />
                            <br />
                            <div className="teaser__warp2__title">
                                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/Group%20653.svg" alt="" />
                            </div>
                            <br />
                            <br />
                            <a href="https://media.graphassets.com/KGSaBLWSh2GWW9691fZ8">
                                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/Frame%20660.png" alt="" />
                            </a>
                            <br />
                            <br />
                            <a href="https://media.graphassets.com/acbK9uLR7ybQhY49YacR">
                                <img src="https://my.keirin.kdreams.jp/special/yahiko/image/teaser/Frame%20661.png" alt="" />
                            </a>
                            <br />
                            <br />
                            {/* <div className="pdf-link">
                                <a href="https://keirin.jp/pc/dfw/portal/guest/data/prize/2023/syokin/2023_syokin_5M1C93_SW3.pdf">出場予定選手</a>
                            </div> */}
                        </div>


                    </div>
                </div>
            </div>
            <div className="TSpage">
                <HomeLink />
            </div>

        </React.Fragment>
    )
}
