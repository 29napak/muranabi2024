import React from 'react';
import { gql, useQuery } from "@apollo/client";
import { FaChevronRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const EVENTLIST = gql`
{
  events(where: {eventorsv: fanservice, year2024: true}) {
    banner {
      url
    }
    content {
      text
    }
    img {
      url
    }
    pdf {
      url
    }
    title
    slug
    id
  }
}
`;

export default function ShowServiceList() {
  const { data, loading, error } = useQuery(EVENTLIST);
  if (loading) return null;
  if (error) return <div>Error loading events.</div>;

  return (
    <>
      {data.events.length === 0 ? (
        <div className="coming-soon">
          <p>Coming Soon</p>
        </div>
      ) : (
        <div className="">
          {data.events.map((cp) => (
            cp ? (
              <div className='' key={cp.id}>
                <img src={cp.img.url} alt="" />
                <div className=''>
                  <p className='event-title'>{cp.title}</p>
                  <div className='content' dangerouslySetInnerHTML={{ __html: cp.content.text }} />
                  {cp.pdf ? (
                    <a href={cp.pdf.url} target='_blank' rel='noopener noreferrer'>
                      <div className='event-link'>
                        <p>＞ 詳細はコチラ</p>
                      </div>
                    </a>
                  ) : null}
                </div>
              </div>
            ) : null
          ))}
        </div>
      )}
    </>
  );
}
