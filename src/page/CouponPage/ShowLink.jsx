import React from 'react';
import { gql, useQuery } from "@apollo/client";
import { FaChevronRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const SHOW_QUERY = gql`
  {
    cupons {
      date
      id
      pdf1 {
        url
      }
      pdf2 {
        url
      }
      term
      link
      month
    }
    testOn {
      createdAt
      id
      publishedAt
      testTrue
      updatedAt
    }
  }
`;

export default function ShowLink() {
  const { data, loading, error } = useQuery(SHOW_QUERY);
  const today = new Date();
  const month = today.getMonth();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  return (
    <>
      {data.cupons.map((cupon) =>
        data.testOn.map((ts) => 
          cupon.month === month + ts.testTrue ? (
            <a 
              key={`${cupon.id}-${ts.id}`} 
              href={cupon.link} 
              target='_blank' 
              rel='noopener noreferrer'
            >
              <p>今すぐクーポンをGET</p>
              <IconContext.Provider value={{ className: "get-icon" }}>
                <FaChevronRight />
              </IconContext.Provider>
            </a>
          ) : null
        )
      )}
    </>
  );
}
