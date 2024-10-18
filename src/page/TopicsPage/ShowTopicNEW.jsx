import React, { lazy, Suspense } from 'react'
import { gql, useQuery } from "@apollo/client"
import '../../styles/style.scss'
import RaceListbgtop from '../RacePage/RaceListbgtop';
import RaceListbgbottom from '../RacePage/RaceListbgbottom';





const ReactPlayer = lazy(() => import('react-player'));


const today = new Date();
const month = today.getMonth() + 2;


const TOPICNEW = gql`{

    topicActiveMonts {
        jun
        jul
        nov
        oct
        sep
        aug
        dec
      }
      topics (orderBy: date_DESC,last: 50,where: {year2024: true}){
        date
        id
        group
        month
        slug
        title
        year2024
        vidurl
        desc {
          html
        }
      }
}


`;

export default function ShowTopicNEW() {
    const { data, loading, error } = useQuery(TOPICNEW);
    if (loading) return null;
    if (error) return null;


    const resalt = data.topics.reduce(function (r, a) {
        r[a.month] = r[a.month] || [];
        r[a.month].push(a);
        return r
    }, Object.create(null))

    const renderLoader = () => <p>Loading</p>;
    if (data) return (
        <>
            {data?.topicActiveMonts?.map((act) => (

                <div key="idx">



                    {(act.dec === true) && (
                        <div className='RaceContainer two'>
<br/>
<br/>
<br/>
                            <div className="RaceList__content__one">
                            <div className="CuponPage__container">
                                        <div className="TopicPage__title">
                                            <img src="https://media.graphassets.com/BIoVNEXiSLKLKzys4OnR" alt="" />
                                        </div>
                                        <div className="CuponPage__section__wrap">
                                            {resalt?.juunigatu?.map((tp) => (


                                                <div className="CuponPage__item" key={tp.id}>
                                                    <div className="homeTopic__vidwrap">
                                                        <Suspense fallback={renderLoader()}>
                                                            <ReactPlayer url={tp.vidurl} />
                                                        </Suspense>
                                                    </div>
                                                    <h4>{tp.title}</h4>
                                                    <p>{tp.date}</p>
                                                    <div dangerouslySetInnerHTML={{ __html: tp.desc.html }} />
                                                </div>



                                            ))}
                                        </div>
                                    </div>
                            </div>

                        </div>
                    )}
                    {/* ーーーーーーーーーー11月ーーーーーーーーーーーー */}
                    {(act.nov === true) && (
                        <div className='RaceContainer'>
                            <RaceListbgtop />
                            <div className="RaceList__content__one">
                            <div className="CuponPage__container green">
                                        <div className="TopicPage__title">
                                            <img src="https://media.graphassets.com/NFlwfErfQ7KTonUUaeWg" alt="" />
                                        </div>
                                        <div className="CuponPage__section__wrap">
                                            {resalt?.juuichigatu?.map((tp) => (


                                                <div className="CuponPage__item" key={tp.id}>
                                                    <div className="homeTopic__vidwrap">
                                                        <Suspense fallback={renderLoader()}>
                                                            <ReactPlayer url={tp.vidurl} />
                                                        </Suspense>
                                                    </div>
                                                    <h4>{tp.title}</h4>
                                                    <p>{tp.date}</p>
                                                    <div dangerouslySetInnerHTML={{ __html: tp.desc.html }} />
                                                </div>



                                            ))}
                                        </div>
                                    </div>
                            </div>
                            <RaceListbgbottom />
                        </div>
                    )}


                    {/* ーーーーーーーーーー10月ーーーーーーーーーーーー */}
                    {(act.oct === true) && (
                        <div className='RaceContainer two'>

                            <div className="RaceList__content__one">
                            <div className="CuponPage__container">
                                        <div className="TopicPage__title">
                                            <img src="https://media.graphassets.com/yPQrtWe0TIO58xaSSgzt" alt="" />
                                        </div>
                                        <div className="CuponPage__section__wrap">
                                            {resalt?.juugatu?.map((tp) => (


                                                <div className="CuponPage__item" key={tp.id}>
                                                    <div className="homeTopic__vidwrap">
                                                        <Suspense fallback={renderLoader()}>
                                                            <ReactPlayer url={tp.vidurl} />
                                                        </Suspense>
                                                    </div>
                                                    <h4>{tp.title}</h4>
                                                    <p>{tp.date}</p>
                                                    <div dangerouslySetInnerHTML={{ __html: tp.desc.html }} />
                                                </div>



                                            ))}
                                        </div>
                                    </div>
                            </div>

                        </div>
                    )}





                    {/* ーーーーーーーーーー9月ーーーーーーーーーーーー */}
                    {(act.sep === true) && (
                        <div className='RaceContainer'>
                            <RaceListbgtop />
                            <div className="RaceList__content__one">
                            <div className="CuponPage__container green">
                                        <div className="TopicPage__title">
                                            <img src="https://media.graphassets.com/Kl01P7QQS6ENqgsanANs" alt="" />
                                        </div>
                                        <div className="CuponPage__section__wrap">
                                            {resalt?.kugatu?.map((tp) => (


                                                <div className="CuponPage__item" key={tp.id}>
                                                    <div className="homeTopic__vidwrap">
                                                        <Suspense fallback={renderLoader()}>
                                                            <ReactPlayer url={tp.vidurl} />
                                                        </Suspense>
                                                    </div>
                                                    <h4>{tp.title}</h4>
                                                    <p>{tp.date}</p>
                                                    <div dangerouslySetInnerHTML={{ __html: tp.desc.html }} />
                                                </div>



                                            ))}
                                        </div>
                                    </div>
                            </div>
                   
                        </div>
                    )}

                    {/* ーーーーーーーーーー8月ーーーーーーーーーーーー */}
                    {(act.aug === true) && (
                        <div className='RaceContainer two'>

                            <div className="RaceList__content__one">
                            <div className="CuponPage__container">
                                        <div className="TopicPage__title">
                                            <img src="https://media.graphassets.com/3oLxSCoSmKglXWkhh3Jl" alt="" />
                                        </div>
                                        <div className="CuponPage__section__wrap">
                                            {resalt?.hachigatu?.map((tp) => (


                                                <div className="CuponPage__item" key={tp.id}>
                                                    <div className="homeTopic__vidwrap">
                                                        <Suspense fallback={renderLoader()}>
                                                            <ReactPlayer url={tp.vidurl} />
                                                        </Suspense>
                                                    </div>
                                                    <h4>{tp.title}</h4>
                                                    <p>{tp.date}</p>
                                                    <div dangerouslySetInnerHTML={{ __html: tp.desc.html }} />
                                                </div>



                                            ))}
                                        </div>
                                    </div>
                            </div>

                        </div>
                    )}



                    {/* ーーーーーーーーーー7月ーーーーーーーーーーーー */}
                    {(act.jul === true) &&
                        (
                            <div className='RaceContainer'>
                                <RaceListbgtop />
                                <div className="RaceList__content__one">
                                <div className="CuponPage__container green">
                                        <div className="TopicPage__title">
                                            <img src="https://media.graphassets.com/7oPhnM4kTSiP7R8Vl2t8" alt="" />
                                        </div>
                                        <div className="CuponPage__section__wrap">
                                            {resalt?.shichigatu?.map((tp) => (


                                                <div className="CuponPage__item" key={tp.id}>
                                                    <div className="homeTopic__vidwrap">
                                                        <Suspense fallback={renderLoader()}>
                                                            <ReactPlayer url={tp.vidurl} />
                                                        </Suspense>
                                                    </div>
                                                    <h4>{tp.title}</h4>
                                                    <p>{tp.date}</p>
                                                    <div dangerouslySetInnerHTML={{ __html: tp.desc.html }} />
                                                </div>



                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <RaceListbgbottom />
                            </div>

                        )
                    }





                    {/* ーーーーーーーーーー6月ーーーーーーーーーーーー */}
                    {(act.jun === true) &&
                        (
                            <div className='RaceContainer two'>

                                <div className="RaceList__content__one">
                                    <div className="CuponPage__container">
                                        <div className="TopicPage__title">
                                            <img src="https://media.graphassets.com/n4mXxZ6TTzy1GUL72h7d" alt="" />
                                        </div>
                                        <div className="CuponPage__section__wrap">
                                            {resalt?.rokugatu?.map((tp) => (


                                                <div className="CuponPage__item" key={tp.id}>
                                                    <div className="homeTopic__vidwrap">
                                                        <Suspense fallback={renderLoader()}>
                                                            <ReactPlayer url={tp.vidurl} />
                                                        </Suspense>
                                                    </div>
                                                    <h4>{tp.title}</h4>
                                                    <p>{tp.date}</p>
                                                    <div dangerouslySetInnerHTML={{ __html: tp.desc.html }} />
                                                </div>



                                            ))}
                                        </div>
                                    </div>


                                </div>

                            </div>
                        )
                    }

                </div>
                //                 <div key="idx">




                //                     {/* ---------12月------------------------------------ */}
                //                     {(act.dec === true) && (
                //                         <div>
                //                             <div className="CuponPage__container">
                //                                 <div className="TopicPage__title">
                //                                     <img src="https://media.graphassets.com/BIoVNEXiSLKLKzys4OnR" alt="" />
                //                                 </div>
                //                                 <div className="CuponPage__section__wrap">
                //                                     {resalt?.juunigatu?.map((tp) => (


                //                                         <div className="CuponPage__item" key={tp.id}>
                //                                             <div className="homeTopic__vidwrap">
                //                                                 <Suspense fallback={renderLoader()}>
                //                                                     <ReactPlayer url={tp.vidurl} />
                //                                                 </Suspense>
                //                                             </div>
                //                                             <h4>{tp.title}</h4>
                //                                             <p>{tp.date}</p>
                //                                             <div dangerouslySetInnerHTML={{ __html: tp.desc.html }} />
                //                                         </div>



                //                                     ))}
                //                                 </div>
                //                             </div>


                //                         </div>
                //                     )}


                //                     {/* ---------11月------------------------------------ */}
                //                     {(act.nov === true) && (
                //                         <>
                //                         <TopImage/>
                //                         <div className='topic__two'>

                //                             <div className="CuponPage__container">
                //                                 <div className="TopicPage__title">
                //                                     <img src="https://media.graphassets.com/NFlwfErfQ7KTonUUaeWg" alt="" />
                //                                 </div>
                //                                 <div className="CuponPage__section__wrap">
                //                                     {resalt?.juuichigatu?.map((tp) => (


                //                                         <div className="CuponPage__item" key={tp.id}>
                //                                             <div className="homeTopic__vidwrap">
                //                                                 <Suspense fallback={renderLoader()}>
                //                                                     <ReactPlayer url={tp.vidurl} />
                //                                                 </Suspense>
                //                                             </div>
                //                                             <h4>{tp.title}</h4>
                //                                             <p>{tp.date}</p>
                //                                             <div dangerouslySetInnerHTML={{ __html: tp.desc.html }} />
                //                                         </div>



                //                                     ))}
                //                                 </div>
                //                             </div>

                // <BottomImage/>
                //                         </div>
                //                         </>
                //                     )}


                //                     {/* ---------10月------------------------------------ */}
                //                     {(act.oct === true) && (
                //                         <div>

                //                             <div className="CuponPage__container">
                //                                 <div className="TopicPage__title">
                //                                     <img src="https://media.graphassets.com/yPQrtWe0TIO58xaSSgzt" alt="" />
                //                                 </div>
                //                                 <div className="CuponPage__section__wrap">
                //                                     {resalt?.juugatu?.map((tp) => (


                //                                         <div className="CuponPage__item" key={tp.id}>
                //                                             <div className="homeTopic__vidwrap">
                //                                                 <Suspense fallback={renderLoader()}>
                //                                                     <ReactPlayer url={tp.vidurl} />
                //                                                 </Suspense>
                //                                             </div>
                //                                             <h4>{tp.title}</h4>
                //                                             <p>{tp.date}</p>
                //                                             <div dangerouslySetInnerHTML={{ __html: tp.desc.html }} />
                //                                         </div>



                //                                     ))}
                //                                 </div>
                //                             </div>


                //                         </div>
                //                     )}


                //                     {/* ---------9月------------------------------------ */}
                //                     {(act.sep === true) && (
                //                         <>
                //                         <TopImage/>
                //                         <div className='topic__two'>

                //                             <div className="CuponPage__container">
                //                                 <div className="TopicPage__title">
                //                                     <img src="https://media.graphassets.com/Kl01P7QQS6ENqgsanANs" alt="" />
                //                                 </div>
                //                                 <div className="CuponPage__section__wrap">
                //                                     {resalt?.kugatu?.map((tp) => (


                //                                         <div className="CuponPage__item" key={tp.id}>
                //                                             <div className="homeTopic__vidwrap">
                //                                                 <Suspense fallback={renderLoader()}>
                //                                                     <ReactPlayer url={tp.vidurl} />
                //                                                 </Suspense>
                //                                             </div>
                //                                             <h4>{tp.title}</h4>
                //                                             <p>{tp.date}</p>
                //                                             <div dangerouslySetInnerHTML={{ __html: tp.desc.html }} />
                //                                         </div>



                //                                     ))}
                //                                 </div>
                //                             </div>


                //                         </div>
                //                         <BottomImage/>
                //                         </>
                //                     )}

                //                     {/* ---------8月------------------------------------ */}
                //                     {(act.aug === true) && (
                //                         <div>
                //                             <div className='RaceList__topimg'>
                //                                 <div className="RaceList__topimg__wrap">
                //                                     <img src="https://media.graphassets.com/LbUfoRRySSKFqHlvR95W" alt="" />

                //                                     <img src="https://media.graphassets.com/Obb2QL11SXSESGGO496M" alt="" />
                //                                 </div>
                //                             </div>
                //                             <div className="CuponPage__container">
                //                                 <div className="TopicPage__title">
                //                                     <img src="https://media.graphassets.com/3oLxSCoSmKglXWkhh3Jl" alt="" />
                //                                 </div>
                //                                 <div className="CuponPage__section__wrap">
                //                                     {resalt?.hachigatu?.map((tp) => (


                //                                         <div className="CuponPage__item" key={tp.id}>
                //                                             <div className="homeTopic__vidwrap">
                //                                                 <Suspense fallback={renderLoader()}>
                //                                                     <ReactPlayer url={tp.vidurl} />
                //                                                 </Suspense>
                //                                             </div>
                //                                             <h4>{tp.title}</h4>
                //                                             <p>{tp.date}</p>
                //                                             <div dangerouslySetInnerHTML={{ __html: tp.desc.html }} />
                //                                         </div>



                //                                     ))}
                //                                 </div>
                //                             </div>
                //                             <div className='RaceList__topimg bottom'>
                //                                 <div className="RaceList__topimg__wrap bottom__wrap">
                //                                     <img src="https://media.graphassets.com/LbUfoRRySSKFqHlvR95W" alt="" />

                //                                     <img src="https://media.graphassets.com/Obb2QL11SXSESGGO496M" alt="" />
                //                                 </div>
                //                             </div>

                //                         </div>
                //                     )}





                //                     {/* ---------7月------------------------------------ */}
                //                     {(act.jul === true) && (
                //                         <div>

                //                             <div className="CuponPage__container">
                //                                 <div className="TopicPage__title">
                //                                     <img src="https://media.graphassets.com/7oPhnM4kTSiP7R8Vl2t8" alt="" />
                //                                 </div>
                //                                 <div className="CuponPage__section__wrap">
                //                                     {resalt?.shichigatu?.map((tp) => (


                //                                         <div className="CuponPage__item" key={tp.id}>
                //                                             <div className="homeTopic__vidwrap">
                //                                                 <Suspense fallback={renderLoader()}>
                //                                                     <ReactPlayer url={tp.vidurl} />
                //                                                 </Suspense>
                //                                             </div>
                //                                             <h4>{tp.title}</h4>
                //                                             <p>{tp.date}</p>
                //                                             <div dangerouslySetInnerHTML={{ __html: tp.desc.html }} />
                //                                         </div>



                //                                     ))}
                //                                 </div>
                //                             </div>


                //                         </div>
                //                     )}




                //                     {/* ---------6月------------------------------------ */}
                //                     {(act.jun === true) && (
                //                         <div>
                //                             <div className='RaceList__topimg'>
                //                                 <div className="RaceList__topimg__wrap">
                //                                     <img src="https://media.graphassets.com/LbUfoRRySSKFqHlvR95W" alt="" />

                //                                     <img src="https://media.graphassets.com/Obb2QL11SXSESGGO496M" alt="" />
                //                                 </div>
                //                             </div>
                //                             <div className="CuponPage__container rokugatu">
                //                                 <div className="TopicPage__title">
                //                                     <img src="https://media.graphassets.com/n4mXxZ6TTzy1GUL72h7d" alt="" />
                //                                 </div>
                //                                 <div className="CuponPage__section__wrap">
                //                                 <div className="ComingSoon">
                //             <img src="https://media.graphassets.com/P0O5fycvRDGXmSoBkNyw" alt="" />
                // </div>
                //                                     {/* {resalt?.rokugatu?.map((tp) => (


                //                                         <div className="CuponPage__item" key={tp.id}>
                //                                             <div className="homeTopic__vidwrap">
                //                                                 <Suspense fallback={renderLoader()}>
                //                                                     <ReactPlayer url={tp.vidurl} />
                //                                                 </Suspense>
                //                                             </div>
                //                                             <h4>{tp.title}</h4>
                //                                             <p>{tp.date}</p>
                //                                             <div dangerouslySetInnerHTML={{ __html: tp.desc.html }} />
                //                                         </div>



                //                                     ))} */}
                //                                 </div>
                //                             </div>


                //                         </div>
                //                     )}















                //                 </div>
            ))}
        </>
    )





}