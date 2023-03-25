import './policy.css'

import React from 'react'
import TitleName from '../TitleName/TitleName'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductFlashSale from '../CardProductFlashSale'
const dataPolicyCard = [1,2,3,4]
const Policy = () => {
  return (
    <div className='policy'>
        <TitleName titleName={'Chính sách'} />
        <Container>
            <Row>
                {
                    dataPolicyCard.map((item, index) => {
                        return(
                            <Col key={index} xs={6} md={4} lg={3} className='flashsale-col'>
                                <CardProductFlashSale />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    </div>
  )
}

export default Policy