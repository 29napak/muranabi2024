import React from 'react'
import { Link } from 'react-router-dom';
import { gql,useQuery } from "@apollo/client"

import '../../../styles/style.scss'

const HOMECP = gql`
{
    campaigns(where: {showtops: true}, orderBy: cplist_ASC, first: 10) {
        id
        bnrimg {
          url
        }
        slug
        title
        content {
          html
        }
    }
}
`;

export default function HomeCP() {
    const {data,loading,error} = useQuery(HOMECP);
    if(loading)return null;
    if(error)return null;


  return (
    <div>
    <div className="HomeCP__topimg">
            <img src="https://media.graphassets.com/V97IruU3TU6sWDlM8AMf" alt="" />
            <img src="https://media.graphassets.com/vpWmxbQKEZoKxA5BEvgC" alt="" />
        </div>
    <div className='HomeCP'>
        <div className="CONTENT">
        <div className="HomeCP__wrap">
        <img id='title' src="https://media.graphassets.com/aFxJ3VfTP2s2xn2GVFBA" alt="" />
       
        <div className="ComingSoon">
            <p>Coming Soon</p>
        </div>
        
        {data.campaigns.map((hcp) =>(
            <div className='HomeCP__item'  key={hcp.id}>
           
                <Link to={`/campaign/${hcp.slug}`} state={{id:`${hcp.id}`}}>
                    <img src={hcp.bnrimg.url} alt="" />
                </Link>
          </div>
        ))}
        </div>
      
        </div>
    </div>
    <div className="HomeCP__btimg">
            <img src="https://media.graphassets.com/r7zDh9URTjefdRkrQdYL" alt="" />
            <img src="https://media.graphassets.com/Oi10FX1PQTyIp7Ed2RJf" alt="" />
            <img src="https://media.graphassets.com/z82IVQYvQtO8itu4XTDw" alt="" />
        </div>
    </div>
  )
}
