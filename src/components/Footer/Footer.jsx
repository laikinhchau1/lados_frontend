import './footer.css'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <Container>
            <div className='ega-footer'>
                <Row className='row-footer'>
                    <Col xs={6} md={4} lg={3} className='flashsale-col '>
                        <h2 className='footer-title'>
                            CHÍNH SÁCH
                        </h2>
                        <ul className='ego-ul'>
                            <li><Link>Chính sách bảo mật</Link></li>
                            <li><Link>Chính sách vận chuyển</Link></li>
                            <li><Link>Chính sách đổi trả</Link></li>
                            <li><Link>Quy định sử dụng</Link></li>
                        </ul>
                    </Col>
                    <Col xs={6} md={4} lg={3} className='flashsale-col'>
                        <h2 className='footer-title'>
                            HỖ TRỢ MUA HÀNG
                        </h2>
                        <ul className='ego-ul'>
                            <li><Link>Hướng dẫn mua hàng</Link></li>
                            <li><Link>Hướng dẫn thanh toán</Link></li>
                            <li><Link>Hướng dẫn giao nhận</Link></li>
                            <li><Link>Điều khoản dịch vụ</Link></li>
                            <li><Link>Hướng dẫn chọn kích cỡ</Link></li>
                        </ul>
                    </Col>
                    <Col xs={6} md={4} lg={3} className='flashsale-col'>
                        <h2 className='footer-title'>
                            THÔNG TIN
                        </h2>
                        <ul className='ego-ul'>
                            <li><Link>Hotline: 0945 7777 11</Link></li>
                            <li><Link>Trang chủ</Link></li>
                            <li><Link>Giới thiệu</Link></li>
                            <li><Link>Sản phẩm</Link></li>
                            <li><Link>Tin Tức</Link></li>
                        </ul>
                    </Col>
                    <Col xs={6} md={4} lg={3} className='flashsale-col'>
                        <h2 className='footer-title'>
                            ĐĂNG KÝ NHẬN TIN
                        </h2>
                        <span style={{fontSize: 14}}>Đăng ký nhận bản tin và nhận voucher giảm 10% cho đơn hàng đầu tiên</span>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Footer