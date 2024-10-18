import React, { lazy, Suspense } from 'react';
import { gql, useQuery } from "@apollo/client";


const ReactPlayer = lazy(() => import('react-player'));
const ABOUT = gql`
{
  abouts(where: {aboutoryoutube: chumoku}) {
    id
    youtubes
  }
}
`;

export default function Vid2() {
    const { data, loading, error } = useQuery(ABOUT);

    if (loading) return null;
    if (error) return <div>Error loading events.</div>;
    const renderLoader = () => <p>Loading</p>;
    return (
        <div>
            {data.abouts.map((cp) => (

                <div className="homeTopic__vidwrap vid2" key={cp.id}>
                    <Suspense fallback={renderLoader()}>
                        <ReactPlayer url={cp.youtubes} />
                    </Suspense>
                </div>

            ))}
        </div>

    );
}
