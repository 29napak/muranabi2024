import React , { lazy, Suspense }from 'react';
import { gql, useQuery } from "@apollo/client";


const ReactPlayer = lazy(() => import('react-player'));
const ABOUT = gql`
{
  aboutContents {
    content2s {
      text
    }
    id
  }
}
`;

export default function Warp2() {
    const { data, loading, error } = useQuery(ABOUT);

    if (loading) return null;
    if (error) return <div>Error loading events.</div>;

    return (    
                <div>
                    {data.aboutContents.map((cp) => (
                        <div className='' key={cp.id}>
                            {cp.content2s? (
                                <p>{cp.content2s.text}</p>
                                
                            ) : (
                                <div className="coming-soon">
                                    <p>Coming Soon</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
         
    );
}
