import './productcardtab.css'
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CardProductFlashSale from '../CardProductFlashSale';
const arrData = [1,2,3,4,5,6,7,8]
const ProductCardTab = () => {
  return (
    <div className='product__card_tab'>
        <Container>
            <Tabs selectedTabClassName='is-active'>
                <TabList style={{marginBottom: 30}}>
                    <Tab>Sản Phẩm Bán Chạy</Tab>
                    <Tab>Sản Phẩm Khuyến Mãi</Tab>
                </TabList>

                <TabPanel>
                    <Row>
                        {
                            arrData.map((item,index)=>{
                                return(
                                    <Col key={index} xs={6} md={4} lg={3} className='flashsale-col'>
                                        <CardProductFlashSale  />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </Container>
        <div className='see-more'>
            <a href='#'>Xem thêm</a>
        </div>
    </div>
  )
}

export default ProductCardTab