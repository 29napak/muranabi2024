import React from 'react'
import { gql, useQuery } from "@apollo/client"
import { Link } from 'react-router-dom';
import '../../../styles/style.scss'
import { FaChevronRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'
const INFO = gql`{
    infomations(orderBy: date_DESC, first: 5,where: {year2024: true}){
      content {
        html
      }
      id
      slug
      title
      date
    }
      }
  `;



export default function Hominfo() {
  const {data,loading,error} = useQuery(INFO);
  if(loading)return null;
  if(error)return null;


  return (
    <>

      <div className='info'>
        <div className="CONTENT">
          <div className="info__topImg">
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/rabbit1.png" alt="" />
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/tree1.png" alt="" />
          </div>
          <div className="info__title">
            <img id='title' src="https://my.keirin.kdreams.jp/special/yahiko/image/infohd.svg" alt="" />
          </div>
          <div className="info__container">
           {data.infomations.map((info) =>(
            <div className='info__wrap' key={info.id}>
                <p>{info.date}</p>
                <div className='info__wrap__title'>
                <Link to={`/info/${info.slug}`} state={{id:`${info.id}`}}>
                      <p>{info.title}</p>
                </Link>
                </div>
          </div>
        ))}
         

          </div>


          <Link className='seemore' to={"/info/"} >
            一覧をみる
            <IconContext.Provider value={{ className: "myReact-icons" }}>
              <FaChevronRight />
            </IconContext.Provider></Link>


          <div className="info__bottomImg">
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/tree2.png" alt="" />
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/tree3.png" alt="" />
            <img src="https://my.keirin.kdreams.jp/special/yahiko/image/01_kerin5.png" alt="" />
          </div>
        </div>
      </div>


    </>
  )
}
