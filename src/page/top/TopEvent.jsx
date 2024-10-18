import React from 'react'
import { Link } from 'react-router-dom';
import { gql,useQuery } from "@apollo/client"
import { FaChevronRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import '../../styles/style.scss'

const TOPEVENT = gql`{
    events(where: {showtops: true}, orderBy: createdAt_DESC, last: 2) {
        banner {
          url
        }
        content {
          html
        }
        img {
          url
        }
        title
        slug
        id
      }
}

    
    `;


export default function TopEvent() {

    // const {data,loading,error} = useQuery(TOPEVENT);
    // if(loading)return null;
    // if(error)return null;

  return (
    <>
   
        {/* {data.events.map((ev) =>( */}
            <div className='HomeCP__item' >
           
                {/* <Link to={`/event/${ev.slug}`} state={{id:`${ev.id}`}}> */}
                <Link to={'/event/event-1'}>
                    <img src="https://media.graphassets.com/Ul0qzxUIRxmZ9VUYJ9nS" alt="" />
                </Link>
          </div>
        {/* ))} */}
         <Link className='seemore' to={"/event"} >
                一覧をみる
                <IconContext.Provider value={{ className: "myReact-icons" }}>
                    <FaChevronRight />
                </IconContext.Provider>
            </Link>
    </>
  )
}
