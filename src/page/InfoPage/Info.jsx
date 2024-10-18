import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useInfo } from './useInfo';
import { FaChevronLeft } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Tweet } from 'react-twitter-widgets';
import ReactPlayer from 'react-player';

export default function InfoPage() {
  const location = useLocation();
  const { id } = location.state;
  const { data, loading, error } = useInfo(id);

  if (loading) return null;
  if (error) return <div>Error loading information.</div>;

  const tweetId = data.infomation.twitter;

  return (
    <div className='Info'>
      <div className="Info__content">
        <h4>{data.infomation.title}</h4>
        <div className="Info__date">
          <p>{data.infomation.date}</p>
        </div>
        <div className='content' dangerouslySetInnerHTML={{ __html: data.infomation.content.html }} />

        <div className="morecontent">
          {data.infomation.youtube && (
            <div className="show-vid">
              <ReactPlayer url={data.infomation.youtube} width="100%" height="100%" />
            </div>
          )}
          <br />
          {tweetId ? (
            <Tweet tweetId={tweetId} />
          ) : (
            <p></p>
          )}
        </div>
      </div>

      <div className="backtolist">
        <Link className='seemore' to={"/info"}>
          <IconContext.Provider value={{ className: "myReact-icons" }}>
            <FaChevronLeft />
          </IconContext.Provider>
          一覧をみる
        </Link>
      </div>
    </div>
  );
}
