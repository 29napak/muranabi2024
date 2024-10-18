import React from 'react'
import { useLocation } from 'react-router-dom';
import { useRace } from './useRace';
import RaceListbgtop from './RaceListbgtop';
import RaceListbgbottom from './RaceListbgbottom';
import { FaChevronLeft } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom';



export default function Race() {
  const location = useLocation();
  const { id } = location.state;

  const { data, loading, error } = useRace(id)
  if (loading) return null;
  if (error) return null;
  console.log(data)

  return (
    <div className='RaceContainer getRace'>
      <RaceListbgtop />
      <div className="RaceList__content__one">

        <div className="RaceList__container">


          <div className='RaceCard' >
            <div className="RaceCard__title">

              <div className="RaceCard__grad" style={{ backgroundColor: `${data.raceSchedule.gcolor.hex}` }}>
                <img src={data.raceSchedule.grade.url} alt="" />
              </div>
              <div className="RaceCard__head">
                <p>{data.raceSchedule.schedule}</p>
                <p>{data.raceSchedule.title}</p>
              </div>
              <img src={data.raceSchedule.timelogo} alt="" />
            </div>
            <div className="RaceCard__content">
              <div className='RaceCard__content__list' dangerouslySetInnerHTML={{ __html: data.raceSchedule.content.html }} />

              <div className="RaceCard__content__banner">
                <div className={`${data.raceSchedule.bannerlink1 ? "show-banner" : "hide-banner"}`}>
                  <a href={data.raceSchedule.bannerlink1} target='blank'>
                    <img src={data.raceSchedule.bannerImg1} alt="" />
                  </a>
                </div>
                <div className={`${data.raceSchedule.bannerlink2 ? "show-banner" : "hide-banner"}`}>
                  <a href={data.raceSchedule.bannerlink2} target='blank'>
                    <img src={data.raceSchedule.bannerImg2} alt="" />
                  </a>
                </div>
                <div className={`${data.raceSchedule.bannerlink3 ? "show-banner" : "hide-banner"}`}>
                  <a href={data.raceSchedule.bannerlink3} target='blank'>
                    <img src={data.raceSchedule.bannerImg3} alt="" />
                  </a>
                </div>
              </div>
            </div>



          </div>

          <div className="backtolist">
            <Link className='seemore' to={"/race"} >

              <IconContext.Provider value={{ className: "myReact-icons" }}>
                <FaChevronLeft />
              </IconContext.Provider>
              一覧をみる
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}
