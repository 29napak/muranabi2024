import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEvent } from './useEvent'
import HomeLink from '../Home/HomeLink/HomeLink';

export default function Event() {



    return (

        <>


            <div className='teaser event'>
                <div className='MiryokuHead'>
                    <div className="RaceList__header">
                        <p>EVENT</p>
                        <h3 className='smaller'>イベント・ファンサービス</h3>
                    </div>
                </div>

                <div className="bt_sp">
                    <img src="https://media.graphassets.com/bTJDFW63Q2qXhcSuQ4xP" alt="" />
                </div>
                <div className="bt_pc bt_pc1">
                    <img src="https://media.graphassets.com/AnDsSN5zTXiFEx312p5F" alt="" />
                </div>
                <div className="teaser__warp2" >
                    <div className="teaser__warp2__content event-wrap">
                        <div className='event-data'>
                            <div className="">

                                <div className="">
                                    <img src="https://media.graphassets.com/9XWbJhXlQuG0XWc3uxHH" alt="" />
                                </div>
                                <p className='event-title'>★10月19日（木）イベント情報</p>
                                <div className='content'>

                                    <p>【実施予定内容】</p>
                                    <div className="event-yellow"><p>●先着プレゼント</p> </div>
                                    <p>4日間入場口で日替わりのオリジナルグッズを先着1,000名様にプレゼントします。 （日替わりでオリジナルパッケージ米菓、オリジナルボールペン、オリジナルサコッシュ、オリジナルミニタオル）</p>
                                    <div className="event-yellow"><p>●早朝指定練習公開見学 </p> </div>
                                    <p>4日間開門～9：00、バンク内にて実施の指定練習を公開します。 ※雨天の場合は中止です。</p>
                                    <div className="event-yellow"><p>●TSUNEIさんによるライブステージ </p> </div>
                                    <p>バンク内特設ステージで新潟県出身のシンガーソングライターTSUNEIさんによるライブステージを実施いたします。 ※TSUNEIさんは開会式での国歌独唱も担当いたします。皆様、お楽しみください。</p>
                                    <div className="event-yellow"><p>●きむちゃんねるLIVE【お願い！青山先生】公開生配信</p> </div>
                                    <p>場内イベントステージで、各レース発売中に人気パチスロライター木村魚拓さん、松本バッチさん、青山りょうさんによるYouTubeチャンネル きむちゃんねるLIVE【お願い！青山先生】の公開生配信を実施いたします。皆様、お楽しみください。</p>
                                    <div className="event-yellow"><p>●本気の競輪TV 公開生配信</p> </div>
                                    <p>弥彦村の観光商業施設「おもてなし広場」 近くのヤホールにて、本気の競輪ＴＶ公開 収録を行います。出演はお馴染みの中野さん、 後閑さん、吉岡さんです。 お近くをお通りの際は、ぜひご覧ください。 開催中各日10:00～16:45まで</p>
                                </div>
                                <a href='' target='blank'>
                                    <div className='event-link'>
                                        <p>＞ 詳細はコチラ</p>
                                    </div>
                                </a>

                                {/* {data.event.pdf ? <a href={data.event.pdf.url} target='blank'>
                                    <div className='event-link'>
                                        <p>＞ 詳細はコチラ</p>
                                    </div>
                                </a> : <></>} */}

                            </div>
                        </div>


                    </div>
                </div>
                <br />
                <br />


            </div>
            <HomeLink />
        </>
    )
}
