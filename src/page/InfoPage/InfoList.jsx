import React from 'react'
import { gql, useQuery } from "@apollo/client"
import { Link } from 'react-router-dom';


import '../../styles/style.scss'



const INFO = gql`{
  infomations(orderBy: date_DESC,last: 50,where: {year2024: true}){
  
    id
    slug
    title
    date
  
  }
    }
`;


export default function InfoList() {
  const {data,loading,error} = useQuery(INFO);
  if(loading)return null;
  if(error)return null;
  console.log(data)

  return (
    <div className='infoPage'>
      <div className='MiryokuHead'>
        <div className="RaceList__header">
          <p>INFORMATION</p>
          <h3>お知らせ一覧</h3>
        </div>
      </div>

      <div className='EatPage__topimg'>
        <div className="EatPage__topimg__wrap">
          <img src="https://media.graphassets.com/Kxg8fp9HTreSVsy7iHgc" alt="" />
          <img src="https://media.graphassets.com/MZcam02YQSvTs0DypTSk" alt="" />
          <img src="https://media.graphassets.com/Fna1B50qTPC7NVStiNNH" alt="" />
        </div>
      </div>
      <div className="CuponPage__container">
        <div className="info__container">
          {data?.infomations?.map((info) =>(
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


    </div>
  )
}
