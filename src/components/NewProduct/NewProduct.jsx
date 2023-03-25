import React from 'react'
import './newproduct.css'
import Banner from '../Banner/Banner'
import TitleName from '../TitleName/TitleName'
import CardProductFlashSale from '../CardProductFlashSale'
import { Container, Row, Col } from 'react-bootstrap'

const dataNewProduct = [1,2,3,4]

const NewProduct = () => {
  return (
    <div className='new-product'>
        <TitleName titleName={'Sản phẩm mới'} />
        <Banner />
        <Container>
            <div className='new-product-card'>
                <Row>
                    {
                        dataNewProduct.map((item, index)=>{
                            return(
                                <Col key={index} xs={6} md={4} lg={3} className='flashsale-col'>
                                    <CardProductFlashSale />
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default NewProduct