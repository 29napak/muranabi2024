import React, { lazy, Suspense } from 'react'
import { gql, useQuery } from "@apollo/client"
import '../../styles/style.scss'
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const ReactPlayer = lazy(() => import('react-player'));

const PV = gql`{
    pvs(where: {position:yahikomiryoku}, last: 1) {
        createdAt
        id
        publishedAt
        updatedAt
        url
      }
    }
    
    `;

export default function TopMiryokuVid() {


    // const { data, loading, error } = useQuery(PV);
    // if (loading) return null;
    // if (error) return null;
    const renderLoader = () => <p>Loading</p>;


  return (
 <>
  {/* {data.pvs.map((pv) => ( */}
                <div className='homeTopic__vid' >

                    <div className="homeTopic__vidwrap">
                        <Suspense fallback={renderLoader()}>
                            <ReactPlayer url="https://www.youtube.com/watch?v=yqWX86uT5jM" width="100%" height="100%" />
                        </Suspense>
                    </div>

                </div>
            {/* ))} */}

            <Link className='seemore' to={"/muranavi"} >
               <img src="https://my.keirin.kdreams.jp/special/yahiko/image/top/Group%20660.png" alt="" />
            </Link>
 
 </>
  )
}
