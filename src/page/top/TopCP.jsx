import React from 'react'
import { Link } from 'react-router-dom';
import { gql,useQuery } from "@apollo/client"
import { FaChevronRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import '../../styles/style.scss'

const HOMECP = gql`{
  campaigns(where: {showtops: true}, orderBy: createdAt_DESC, first: 1) {
    id
    bnrimg {
      url
    }
    slug
    title
    content {
      html
    }
    date
  }
}

    
    `;


export default function TopCP() {

    // const {data,loading,error} = useQuery(HOMECP);
    // if(loading)return null;
    // if(error)return null;

  return (
    <>
    <div className='HomeCP__item'  >
    <img src="https://media.graphassets.com/Ul0qzxUIRxmZ9VUYJ9nS" alt="" />
    </div>
        {/* {data.campaigns.map((hcp) =>(
            <div className='HomeCP__item'  key={hcp.id}>
           
                <Link to={`/campaign/${hcp.slug}`} state={{id:`${hcp.id}`}}>
                    <img src="http://campaign.kdreams.jp/special/data/bnr_comingsoon.png" alt="" />
                </Link>
          </div>
        ))} */}
         <Link className='seemore' to={"/campaign"} >
                一覧をみる
                <IconContext.Provider value={{ className: "myReact-icons" }}>
                    <FaChevronRight />
                </IconContext.Provider>
            </Link>
    </>
  )
}
