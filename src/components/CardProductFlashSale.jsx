import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';
import './cardproduct.css'
const CardProductFlashSale = (props) => {
  return (
    <Link className='product-card' to={'detail-product'}>
        <div className='label-sale--new'>
          22%
        </div>
        <img src={require('../assets/images/flashsale/quanthun.webp')} alt='' />
        
        <p>Quần dài kaki nam LADOS - 421</p>
        <div className='price'>
            <span className='new-price'>99.000đ</span> <span className='old-price'>199.000đ</span>
        </div>
        {
            props.progress && <ProgressBar now={60} variant="danger" />
        }
    </Link>
  )
}

export default CardProductFlashSale