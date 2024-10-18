import React from 'react';
import { gql, useQuery } from "@apollo/client";

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

export default function ShowTerm() {
  const { data, loading, error } = useQuery(SHOW_QUERY);
  const today = new Date();
  const month = today.getMonth();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  return (
    <>
      {data.cupons.flatMap((cupon) =>
        data.testOn.map((ts) => 
          cupon.month === month + ts.testTrue ? (
            <p key={`${cupon.id}-${ts.id}`}>
              利用条件：1部屋あたり2万円(税込)以上のご宿泊料金/1名様以上で利用可能／1室で1枚の適用／{cupon.term}チェックアウトまでの宿泊が対象/併用可
            </p>
          ) : null
        )
      )}
    </>
  );
}
