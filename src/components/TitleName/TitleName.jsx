import './titlename.css'
import React from 'react'
import { Link } from 'react-router-dom'

const TitleName = (props) => {
  return (
    <div className='title-new-product'>
        <Link to={'#'}>
            <h2 className='title--dots'>{props.titleName}</h2>
        </Link>
    </div>
  )
}

export default TitleName