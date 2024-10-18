import { gql,useQuery } from "@apollo/client"


const getEvent = gql`

query MyQuery ($id: ID!){
    event(where: {id: $id}) {
        id
        img{
          url
        }
        pdf {
          url
        }
        slug
        title
        content {
          html
          text
        }
      }
    }
    

`;

 export const useEvent = (id) =>{
    
    const {data,loading,error} = useQuery(getEvent,{
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