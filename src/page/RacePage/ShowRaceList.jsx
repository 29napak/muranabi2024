import React from 'react'
import { gql, useQuery } from "@apollo/client"
import RaceListbgtop from './RaceListbgtop';
import RaceListbgbottom from './RaceListbgbottom';


const today = new Date();

// true
const month = today.getMonth();

// test 
// const month = today.getMonth()+1;



const MONTH = gql`{
  activeMonthS2024 {
    jul
    jun
    nov
    oct
    sep
    dec
    aug
  }
  raceSchedules(orderBy: createdAt_ASC,where: {year2024: true}, last: 50){
    month
        date
        gcolor {
          hex
        }
        content {
          html
        }
        title
        slug
        id
        year2024
        timelogo
        group
        grade {
          url
        }
        bannerlink1
        bannerlink2
        bannerlink3
        bannerImg1 
        bannerImg2 
        bannerImg3 
        bannerimg {
          id
        } 
        schedule
      
    }
}


`;

export default function ShowRaceList() {

  const { data, loading, error } = useQuery(MONTH);
  if (loading) return null;
  if (error) return null;


  const resalt = data.raceSchedules.reduce(function (r, a) {
    r[a.month] = r[a.month] || [];
    r[a.month].push(a);
    return r
  }, Object.create(null))

  if (data) return <>

    {data?.activeMonthS2024?.map((act) => (

      <div key="idx">



        {(act.dec === true) && (
          <div className='RaceContainer two'>

            <div className="RaceList__content__one">
              <div className="RaceList__content__one__title" >
                <img id='title' src="https://media.graphassets.com/sDV5VHxwTwGri7CoS9XN" alt="" />
                <img id='title' src="https://media.graphassets.com/OPVtqV6FSuftKoe4qH5n" alt="" />
              </div>
              <div className="RaceList__container">
                {resalt?.juunigatu?.map((info) => (

                  <div className='RaceCard' key={info.id}>
                    <div className="RaceCard__title">
                      <div className="RaceCard__grad" style={{ backgroundColor: `${info.gcolor.hex}` }}>
                        <img src={info.grade.url} alt="" />
                      </div>
                      <div className="RaceCard__head">
                        <p>{info.schedule}</p>
                        <p>{info.title}</p>

                      </div>
                      <img src={info.timelogo} alt="" />
                    </div>
                    <div className="RaceCard__content">
                      <div className='RaceCard__content__list' dangerouslySetInnerHTML={{ __html: info.content.html }} />

                      <div className="RaceCard__content__banner">
                        <div className={`${info.bannerlink1 ? "show-banner" : "hide-banner"}`}>
                          <a href={info.bannerlink1} target='blank'>
                            <img src={info.bannerImg1} alt="" />
                          </a>
                        </div>
                        <div className={`${info.bannerlink2 ? "show-banner" : "hide-banner"}`}>
                          <a href={info.bannerlink2} target='blank'>
                            <img src={info.bannerImg2} alt="" />
                          </a>
                        </div>
                        <div className={`${info.bannerlink3 ? "show-banner" : "hide-banner"}`}>
                          <a href={info.bannerlink3} target='blank'>
                            <img src={info.bannerImg3} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>




                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
        {/* ーーーーーーーーーー11月ーーーーーーーーーーーー */}
        {(act.nov === true) && (
          <div className='RaceContainer'>
            <RaceListbgtop />
            <div className="RaceList__content__one">
              <div className="RaceList__content__one__title" >
                <img id='title' src="https://media.graphassets.com/nvqoBQ3G2ucsUe5fZQkL" alt="" />
                <img id='title' src="https://media.graphassets.com/l2Ors30vQ1G87RCGIfHO" alt="" />
              </div>
              <div className="RaceList__container">
                {resalt?.juuichigatu?.map((info) => (

                  <div className='RaceCard' key={info.id}>
                    <div className="RaceCard__title">
                      <div className="RaceCard__grad" style={{ backgroundColor: `${info.gcolor.hex}` }}>
                        <img src={info.grade.url} alt="" />
                      </div>
                      <div className="RaceCard__head">
                        <p>{info.schedule}</p>
                        <p>{info.title}</p>
                      </div>
                      <img src={info.timelogo} alt="" />
                    </div>
                    <div className="RaceCard__content">
                      <div className='RaceCard__content__list' dangerouslySetInnerHTML={{ __html: info.content.html }} />

                      <div className="RaceCard__content__banner">
                        <div className={`${info.bannerlink1 ? "show-banner" : "hide-banner"}`}>
                          <a href={info.bannerlink1} target='blank'>
                            <img src={info.bannerImg1} alt="" />
                          </a>
                        </div>
                        <div className={`${info.bannerlink2 ? "show-banner" : "hide-banner"}`}>
                          <a href={info.bannerlink2} target='blank'>
                            <img src={info.bannerImg2} alt="" />
                          </a>
                        </div>
                        <div className={`${info.bannerlink3 ? "show-banner" : "hide-banner"}`}>
                          <a href={info.bannerlink3} target='blank'>
                            <img src={info.bannerImg3} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>



                  </div>
                ))}
              </div>
            </div>
            <RaceListbgbottom />
          </div>
        )}


        {/* ーーーーーーーーーー10月ーーーーーーーーーーーー */}
        {(act.oct === true) && (
          <div className='RaceContainer two'>

            <div className="RaceList__content__one">
              <div className="RaceList__content__one__title" >
                <img id='title' src="https://media.graphassets.com/sDV5VHxwTwGri7CoS9XN" alt="" />
                <img id='title' src="https://media.graphassets.com/0FSbjWF1QKutzUI1h16T" alt="" />
              </div>
              <div className="RaceList__container">
                {resalt?.juugatu?.map((info) => (

                  <div className='RaceCard' key={info.id}>
                    <div className="RaceCard__title">
                      <div className="RaceCard__grad" style={{ backgroundColor: `${info.gcolor.hex}` }}>
                        <img src={info.grade.url} alt="" />
                      </div>
                      <div className="RaceCard__head">
                        <p>{info.schedule}</p>
                        <p>{info.title}</p>

                      </div>
                      <img src={info.timelogo} alt="" />
                    </div>
                    <div className="RaceCard__content">
                      <div className='RaceCard__content__list' dangerouslySetInnerHTML={{ __html: info.content.html }} />

                      <div className="RaceCard__content__banner">
                        <div className={`${info.bannerlink1 ? "show-banner" : "hide-banner"}`}>
                          <a href={info.bannerlink1} target='blank'>
                            <img src={info.bannerImg1} alt="" />
                          </a>
                        </div>
                        <div className={`${info.bannerlink2 ? "show-banner" : "hide-banner"}`}>
                          <a href={info.bannerlink2} target='blank'>
                            <img src={info.bannerImg2} alt="" />
                          </a>
                        </div>
                        <div className={`${info.bannerlink3 ? "show-banner" : "hide-banner"}`}>
                          <a href={info.bannerlink3} target='blank'>
                            <img src={info.bannerImg3} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>



                  </div>
                ))}
              </div>
            </div>

          </div>
        )}





        {/* ーーーーーーーーーー9月ーーーーーーーーーーーー */}
        {(act.sep === true) && (
          <div className='RaceContainer'>
            <RaceListbgtop />
            <div className="RaceList__content__one">
              <div className="RaceList__content__one__title" >
                <img id='title' src="https://media.graphassets.com/nvqoBQ3G2ucsUe5fZQkL" alt="" />
                <img id='title' src="https://media.graphassets.com/H47RdI8wSduaphIGIlz7" alt="" />
              </div>
              <div className="RaceList__container">
                {resalt?.kugatu?.map((info) => (

                  <div className='RaceCard' key={info.id}>
                    <div className="RaceCard__title">
                      <div className="RaceCard__grad" style={{ backgroundColor: `${info.gcolor.hex}` }}>
                        <img src={info.grade.url} alt="" />
                      </div>
                      <div className="RaceCard__head">
                        <p>{info.schedule}</p>
                        <p>{info.title}</p>
                      </div>
                      <img src={info.timelogo} alt="" />
                    </div>
                    <div className="RaceCard__content">
                      <div className='RaceCard__content__list' dangerouslySetInnerHTML={{ __html: info.content.html }} />

                      <div className="RaceCard__content__banner">
                        <div className={`${info.bannerlink1 ? "show-banner" : "hide-banner"}`}>
                          <a href={info.bannerlink1} target='blank'>
                            <img src={info.bannerImg1} alt="" />
                          </a>
                        </div>
                        <div className={`${info.bannerlink2 ? "show-banner" : "hide-banner"}`}>
                          <a href={info.bannerlink2} target='blank'>
                            <img src={info.bannerImg2} alt="" />
                          </a>
                        </div>
                        <div className={`${info.bannerlink3 ? "show-banner" : "hide-banner"}`}>
                          <a href={info.bannerlink3} target='blank'>
                            <img src={info.bannerImg3} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>



                  </div>
                ))}
              </div>
            </div>
            <RaceListbgbottom />
          </div>
        )}

        {/* ーーーーーーーーーー8月ーーーーーーーーーーーー */}
        {(act.aug === true) && (
          <div className='RaceContainer two'>

            <div className="RaceList__content__one">
              <div className="RaceList__content__one__title" >
                <img id='title' src="https://media.graphassets.com/sDV5VHxwTwGri7CoS9XN" alt="" />
                <img id='title' src="https://media.graphassets.com/qctW74IiQZ2uZcskEr2C" alt="" />
              </div>
              <div className="RaceList__container">
                {resalt?.hachigatu?.map((info) => (

                  <div className='RaceCard' key={info.id}>
                    <div className="RaceCard__title">
                      <div className="RaceCard__grad" style={{ backgroundColor: `${info.gcolor.hex}` }}>
                        <img src={info.grade.url} alt="" />
                      </div>
                      <div className="RaceCard__head">
                        <p>{info.schedule}</p>
                        <p>{info.title}</p>
                      </div>
                      <img src={info.timelogo} alt="" />
                    </div>
                    <div className="RaceCard__content">
                      <div className='RaceCard__content__list' dangerouslySetInnerHTML={{ __html: info.content.html }} />

                      <div className="RaceCard__content__banner">
                        <div className={`${info.bannerlink1 ? "show-banner" : "hide-banner"}`}>
                          <a href={info.bannerlink1} target='blank'>
                            <img src={info.bannerImg1} alt="" />
                          </a>
                        </div>
                        <div className={`${info.bannerlink2 ? "show-banner" : "hide-banner"}`}>
                          <a href={info.bannerlink2} target='blank'>
                            <img src={info.bannerImg2} alt="" />
                          </a>
                        </div>
                        <div className={`${info.bannerlink3 ? "show-banner" : "hide-banner"}`}>
                          <a href={info.bannerlink3} target='blank'>
                            <img src={info.bannerImg3} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>



                  </div>
                ))}

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
                <div className="RaceList__content__one__title" >
                  <img id='title' src="https://media.graphassets.com/nvqoBQ3G2ucsUe5fZQkL" alt="" />
                  <img id='title' src="https://media.graphassets.com/PV2d5CuQRuPhE4agnlMY" alt="" />
                </div>
                <div className="RaceList__container">

                  {resalt?.shichigatu?.map((info) => (

                    <div className='RaceCard' key={info.id}>
                      <div className="RaceCard__title">
                        <div className="RaceCard__grad" style={{ backgroundColor: `${info.gcolor.hex}` }}>
                          <img src={info.grade.url} alt="" />
                        </div>
                        <div className="RaceCard__head">
                          <p>{info.schedule}</p>
                          <p>{info.title}</p>
                        </div>
                        <img src={info.timelogo} alt="" />
                      </div>
                      <div className="RaceCard__content">
                        <div className='RaceCard__content__list' dangerouslySetInnerHTML={{ __html: info.content.html }} />

                        <div className="RaceCard__content__banner">
                          <div className={`${info.bannerlink1 ? "show-banner" : "hide-banner"}`}>
                            <a href={info.bannerlink1} target='blank'>
                              <img src={info.bannerImg1} alt="" />
                            </a>
                          </div>
                          <div className={`${info.bannerlink2 ? "show-banner" : "hide-banner"}`}>
                            <a href={info.bannerlink2} target='blank'>
                              <img src={info.bannerImg2} alt="" />
                            </a>
                          </div>
                          <div className={`${info.bannerlink3 ? "show-banner" : "hide-banner"}`}>
                            <a href={info.bannerlink3} target='blank'>
                              <img src={info.bannerImg3} alt="" />
                            </a>
                          </div>
                        </div>


                      </div>
                    </div>
                  ))}
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
                <div className="RaceList__content__one__title" >
                  <img id='title' src="https://media.graphassets.com/sDV5VHxwTwGri7CoS9XN" alt="" />
                  <img id='title' src="https://media.graphassets.com/Mfy49NjfSCGnsgEbJhPS" alt="" />
                </div>
                <div className="RaceList__container">
                  {resalt?.rokugatu?.map((info) => (

                    <div className='RaceCard' key={info.id}>
                      <div className="RaceCard__title">
                        <div className="RaceCard__grad" style={{ backgroundColor: `${info.gcolor.hex}` }}>
                          <img src={info.grade.url} alt="" />
                        </div>
                        <div className="RaceCard__head">
                          <p>{info.schedule}</p>
                          <p>{info.title}</p>
                        </div>
                        <img src={info.timelogo} alt="" />
                      </div>
                      <div className="RaceCard__content">
                        <div className='RaceCard__content__list' dangerouslySetInnerHTML={{ __html: info.content.html }} />

                        <div className="RaceCard__content__banner">
                          <div className={`${info.bannerlink1 ? "show-banner" : "hide-banner"}`}>
                            <a href={info.bannerlink1} target='blank'>
                              <img src={info.bannerImg1} alt="" />
                            </a>
                          </div>
                          <div className={`${info.bannerlink2 ? "show-banner" : "hide-banner"}`}>
                            <a href={info.bannerlink2} target='blank'>
                              <img src={info.bannerImg2} alt="" />
                            </a>
                          </div>
                          <div className={`${info.bannerlink3 ? "show-banner" : "hide-banner"}`}>
                            <a href={info.bannerlink3} target='blank'>
                              <img src={info.bannerImg3} alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )
        }

      </div>
    ))}






  </>






}
