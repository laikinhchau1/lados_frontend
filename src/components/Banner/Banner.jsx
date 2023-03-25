import React from 'react'
import { Container } from 'react-bootstrap'
const Banner = () => {
  return (
    <div className='banner'>
        <Container>
            <img style={{width: '100%'}} src={require('../../assets/images/slider/slideshow_2.webp')} alt='' />
        </Container>
    </div>
  )
}

export default Banner