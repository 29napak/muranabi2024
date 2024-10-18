import React from 'react';
import { gql, useQuery } from "@apollo/client";
import { Link } from 'react-router-dom';

const CPLIST = gql`
{
  campaigns(where: {year2024: true}) {
    cpimg {
      url
    }
    content {
      text
    }
    id
    title
    links
  }
}
`;

export default function ShowYahikoCPList() {
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
            <div className='campign__list' key={cp.id}>
              
              <div className=''>
                <a href={cp.links} target='blank'>
                <img src={cp.cpimg.url} alt="" />
                 <p>{cp.title}</p>
                  <div></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
