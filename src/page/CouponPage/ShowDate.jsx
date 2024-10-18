import React from 'react'
import { gql, useQuery } from "@apollo/client"

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

export default function ShowDate() {
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
            <p key={`${cupon.id}-${ts.id}`}>有効期限：{cupon.date}</p>
          ) : null
        )
      )}
    </>
  );
}
