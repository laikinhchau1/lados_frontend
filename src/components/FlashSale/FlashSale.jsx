import React from 'react'
import './flashsale.css'
import Countdown from 'react-countdown'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardProductFlashSale from '../CardProductFlashSale';

const dataFlashsale = [1,2,3,4]


const renderer = ({ hours, minutes, seconds, completed }) => {
    return <div className='count-down'>
        <div className='coundown-block'>
            <span className='countdown-style'>
                {hours}
            </span>
            <p style={{margin: 0}}>Giờ</p>
        </div>
        
        
        <span className='two-dots'>:</span>

        <div className='coundown-block'>
            <span className='countdown-style'>
                {minutes}
            </span>
            <p style={{margin: 0}}>Phút</p>
        </div>

        <span className='two-dots'>:</span>
        
        <div className='coundown-block'>
            <span className='countdown-style'>
                {seconds}
            </span>
            <p style={{margin: 0}}>Giây</p>
        </div>
        </div>;
};

const FlashSale = () => {
  return (
    <div className='flash-sale'>
        <div className='main-flash-sale container'>
            <div className='flashsale__header'>
                <div className='flashsale_title'>
                    <h2>FLASH SALE</h2>
                    {/* <span className='ega-dot'>
                        <span className='ega-ping'></span>
                    </span> */}
                </div>
                <div className='flashsale__countdown-wrapper'>
                    <span>Chương trình sẽ kết thúc sau</span>
                    <Countdown date={Date.now() + 50000000000} renderer={renderer} />
                </div>
            </div>
            <div className='flashsale__product ega-row'>
                <Row>
                    {
                        dataFlashsale.map((item, index) =>{
                            return(
                                <Col key={index} xs={6} md={4} lg={3} className='flashsale-col'>
                                    <CardProductFlashSale />
                                </Col>
                            )
                        })
                    }
                </Row>  
            </div>
        </div>
    </div>
  )
}

export default FlashSale