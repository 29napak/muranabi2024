import React, { lazy, Suspense } from 'react'
import { gql, useQuery } from "@apollo/client"
import '../../../styles/style.scss'
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const ReactPlayer = lazy(() => import('react-player'));


const PV = gql`{
  topics(orderBy: date_DESC, where: {year2024: true, showtop: true}, last: 2){
      id
      slug
      title
      vidurl
      desc {
        html
      }
    }
  }
  
  `;

export default function HomeTopic() {

  const { data, loading, error } = useQuery(PV);
  if (loading) return null;
  if (error) return null;

  const renderLoader = () => <p>Loading</p>;
  return (
    <>
      <div className="homeTopic__topimg">
        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/5-1.svg" alt="" />
        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/tprb.png" alt="" />
        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/5-2.svg" alt="" />
      </div>
      <div className='homeTopic' >
        <div className="CONTENT">

          <div className="homeTopic__wrap">
            <div className="homeTopic__title">
              <picture>
                <source media='(min-width: 640px)' srcSet='https://my.keirin.kdreams.jp/special/yahiko/image/title6-2.svg' />
                <img id='title' src="https://my.keirin.kdreams.jp/special/yahiko/image/title6.svg" alt="" />
              </picture>
            </div>


            {data.topics.map((topic) => (
              
              <div className='homeTopic__vid' key={topic.id} >

                <div className={`${topic.vidurl? "homeTopic__vidwrap" : "hide-banner"}`}>
                  <Suspense fallback={renderLoader()}>
                    <ReactPlayer url={topic.vidurl} width="100%" height="100%" />
                  </Suspense>
                </div>
                <div className='homeTopic__vidtt'>
                <p>{topic.title}</p>
                </div>

                <div className='homeTopic__text' >
                  < div dangerouslySetInnerHTML={{ __html: topic.desc.html }} />
                </div>
              </div>
            ))}

            
            <Link className='seemore' to={"/topics/"} >
                一覧をみる
                <IconContext.Provider value={{ className:"myReact-icons"}}>
                    <FaChevronRight/>
                </IconContext.Provider>
            </Link>




          </div>
        </div>
      </div>
      <div className="homeTopic__btimg">

        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/tpab2.png" alt="" />
        <img src="https://my.keirin.kdreams.jp/special/yahiko/image/tpimg3.svg" alt="" />
      </div>
    </>
  )
}
