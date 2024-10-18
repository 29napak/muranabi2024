import React from 'react'

import { gql,useQuery } from "@apollo/client"


const getRace = gql`
query MyQuery ($id: ID!){
  raceSchedule(where: {id: $id}) {
        month
        date
        gcolor {
          hex
        }
        content {
          html
        }
        title
        slug
        id
        year2024
        timelogo
        group
        grade {
          url
        }
        bannerlink1
        bannerlink2
        bannerlink3
        bannerImg1 
        bannerImg2 
        bannerImg3 
        bannerimg {
          id
        } 
        schedule
      
    }
  }

`;

 export const useRace = (id) =>{
    
    const {data,loading,error} = useQuery(getRace,{
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


