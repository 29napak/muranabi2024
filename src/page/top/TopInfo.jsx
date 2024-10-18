import React from 'react'
import { gql, useQuery } from "@apollo/client"
import { Link } from 'react-router-dom';

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
  



export default function TopInfo() {
  const {data,loading,error} = useQuery(INFO);
  if(loading)return null;
  if(error)return null;


  return (

    <>


      <div className="info__container topinfo">
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
      </div>


      <Link className='seemore' to={"/info/"} >
        一覧をみる
        <IconContext.Provider value={{ className: "myReact-icons" }}>
          <FaChevronRight />
        </IconContext.Provider></Link>

    </>




  )
}
