import React from 'react';
import { gql, useQuery } from "@apollo/client";

const ABOUT = gql`
{
  aboutContents {
    content1s {
      text
    }
    id
  }
}
`;

export default function Warp1() {
    const { data, loading, error } = useQuery(ABOUT);

    if (loading) return null;
    if (error) return <div>Error loading events.</div>;

    return (    
                <div>
                    {data.aboutContents.map((cp) => (
                        <div className='' key={cp.id}>
                            {cp.content1s? (
                                <div className='content' dangerouslySetInnerHTML={{ __html: cp.content1s.text}} />
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
