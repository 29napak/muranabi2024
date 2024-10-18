import React from 'react';
import { gql, useQuery } from "@apollo/client";
import { Link } from 'react-router-dom';

const CPLIST = gql`
{
  campaigns(where: { cplist: othercp, year2024: true }) {
    id
    title
    showtops
    showtop
    date
    cplist
    slug
    cpimg {
      url
    }
    bnrimg {
      url
    }
    content {
      html
    }
  }
}
`;

export default function ShowOtherCPList() {
  const { data, loading, error } = useQuery(CPLIST);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading campaigns.</div>;

  return (
    <>
      {data.campaigns.length === 0 ? (  // Check for no campaigns
        <div className="coming-soon">
          <p>Coming Soon</p>
        </div>
      ) : (
        <div className="">
          {data.campaigns.map((cp) => (
            <div className='' key={cp.id}>
              <img src={cp.cpimg.url} alt="" />
              <div className=''>
                <Link to={`/campaign/${cp.slug}`} state={{ id: `${cp.id}` }}>
                  <p>{cp.title}</p>
                  <div></div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
