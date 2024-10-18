import React from 'react'
import { gql, useQuery } from "@apollo/client"




const Show = gql`{
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
      testOns {
        createdAt
        id
        publishedAt
        testTrue
        updatedAt
      }
    }
    
  `;
export default function ShowPDF2() {
  const { data, loading, error } = useQuery(Show);
  const today = new Date();
  const month = today.getMonth();
  if (loading) return null;
  if (error) return null;

  return (
    <>
      {data.cupons.map((cupon) => (
        data.testOns?.map((ts) =>
          cupon.month === month + ts.testTrue ?
            (<a key={cupon.id} href={cupon.pdf2.url} target='blank'>PDFをダウンロードする</a>) : (<></>)

        )
      ))}

    </>
  )
}
