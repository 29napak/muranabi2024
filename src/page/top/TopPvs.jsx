import React, { lazy, Suspense } from 'react';
import { gql, useQuery } from "@apollo/client";
import '../../styles/style.scss';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const ReactPlayer = lazy(() => import('react-player'));

const PV = gql`
{
   pvs(where: {year2024: true}) {
   id
    url
  }
}
`;

export default function TopPvs() {
    const { data, loading, error } = useQuery(PV);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data!</p>;

    // Check if there are any pvs
    if (!data.pvs || data.pvs.length === 0) {
        return <div className='commingSoon'><p>Coming Soon</p></div>; // Display message when there are no pvs
    }

    return (
        <>
            {data.pvs.map((pv) => (
                <div className='homeTopic__vid' key={pv.id}>
                    <div className="homeTopic__vidwrap"> 
                        <Suspense fallback={<p>Loading video...</p>}>
                            <ReactPlayer url={pv.url} width="100%" height="100%" />
                        </Suspense>
                    </div>
                </div>
            ))}

            <Link className='seemore' to={"/about"}>
                寬仁親王牌とは？
                <IconContext.Provider value={{ className: "myReact-icons" }}>
                    <FaChevronRight />
                </IconContext.Provider>
            </Link>
        </>
    );
}
