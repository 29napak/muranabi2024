import React from 'react'
import { gql,useQuery } from "@apollo/client"
import '../../../styles/style.scss'
import { Link } from 'react-router-dom';

const CP = gql`{
    campaigns(where: {cplist_contains_all: hometopic}) {
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

export default function HomeTopicCp() {
    const {data,loading,error} = useQuery(CP);
    if(loading)return null;
    if(error)return null;

  return (
    <>
    
         {data.campaigns.map((cp) =>(
            <div className='homeTopic__CP'  key={cp.id}>
              <Link>
                {/* <Link to={`/campaign/${cp.slug}`} state={{id:`${cp.id}`}}> */}
                    <img src={cp.bnrimg.url} alt="" />
                </Link>
          </div>
        ))}
    </>
  )
}
