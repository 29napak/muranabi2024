import { gql,useQuery } from "@apollo/client"


const getInfo = gql`

query MyQuery ($id: ID!){
    infomation(where: {id: $id}) {
      id
      slug
      title
      date
      content {
        html
      }
      youtube
      twitter
    }
  }

`;

 export const useInfo = (id) =>{
    
    const {data,loading,error} = useQuery(getInfo,{
        variables:{
            id
        }
    })
    return{
        data,
        loading,
        error
    }
}