import { gql, useQuery } from "@apollo/client"


const getCP = gql`

query MyQuery ($id: ID!){
    campaign(where: {id: $id}) {
         cpimg {
      url
    }
    content {
      text
    }
    id
    slug
    date
    title
      }
    }
    

`;

export const useCP = (id) => {

  const { data, loading, error } = useQuery(getCP, {
    variables: {
      id
    }
  })
  return {
    data,
    loading,
    error
  }
}