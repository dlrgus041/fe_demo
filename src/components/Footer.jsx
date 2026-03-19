import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="py-5 bg-white border-top">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md={6}>
                        {/* 상단 링크 메뉴 */}
                        <div className="d-flex justify-content-center gap-4 mb-3">
                            <a href="#" className="text-decoration-none small text-secondary fw-medium hover-primary">
                                이용약관
                            </a>
                            <a href="#" className="text-decoration-none small text-secondary fw-medium hover-primary">
                                개인정보처리방침
                            </a>
                            <a href="#" className="text-decoration-none small text-secondary fw-medium hover-primary">
                                고객센터
                            </a>
                        </div>

                        {/* 하단 저작권 정보 */}
                        <div className="text-muted" style={{ fontSize: '0.85rem', letterSpacing: '-0.02em' }}>
                            © 2026 SyncTalk. All rights reserved.
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;