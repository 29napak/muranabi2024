import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { gql, useQuery } from "@apollo/client"
import ShowLink from './ShowLink'
import ShowDate from './ShowDate'
import ShowNinsu from '../../CouponPage/ShowNinsu'


export default function CuponHome() {

  return (
    <div className='Cupon Cp1'>
      <div className="Cupon__wrap">
        <div className="Cupon__top">
          <img srcSet="https://media.graphassets.com/11GQteSmQUmKIw9gA5ww" alt="" />
          <ShowNinsu />
        </div>
        <img srcSet="https://media.graphassets.com/KEnu4qUgSs62jUOyrMmt" alt="" />
        <div className="Cupon__get">
          <a >
            <p>詳しくみる</p>
            <IconContext.Provider value={{ className: "get-icon" }}>
              <FaChevronRight />
            </IconContext.Provider>
          </a>
        </div>
      </div>
      <div className="kikan">
        <ShowDate />
      </div>
    </div>
  )
}
