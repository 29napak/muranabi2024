import React from 'react';
import { gql, useQuery } from "@apollo/client";

const EVENTLIST = gql`
{
  broadcastss(orderBy: date_ASC, where: {tvorinternet: internet, year2024: true}) {
    date
    id
    img {
      url
    }
    title
    slug
    url
    content {
      text 
    }
  }
}
`;

export default function ShowInternet() {
  const { data, loading, error } = useQuery(EVENTLIST);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading broadcasts.</div>;

  return (
    <>
      {data.broadcastss.length === 0 ? (
        <div className="coming-soon">
          <p>Coming Soon</p>
        </div>
      ) : (
        <div className="">
          {data.broadcastss.map((broadcast) => (
            <div className='' key={broadcast.id}>
              <img src={broadcast.img.url} alt={broadcast.title} />
              <div className=''>
                <p className='event-title'>{broadcast.title}</p>
                <div className='content' dangerouslySetInnerHTML={{ __html: broadcast.content.text }} />
                {broadcast.url && (
                  <a href={broadcast.url} target='_blank' rel='noopener noreferrer'>
                    <div className='event-link'>
                      <p>＞ 詳細はコチラ</p>
                    </div>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
