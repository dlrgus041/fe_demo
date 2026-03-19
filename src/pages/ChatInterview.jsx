import React from 'react';
import { Container, Row, Col, Card, Form, Button, ProgressBar, Badge } from 'react-bootstrap';
import { SendFill, MicFill, LightbulbFill, BoxArrowRight, PersonCircle } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';

const ChatInterview = () => {
    const stPrimary = '#1976D2';

    return (
        <div className="bg-light min-vh-100">
            <Row className="g-0 min-vh-100">
                {/* 좌측: 채팅 영역 */}
                <Col lg={8} className="d-flex flex-column bg-white border-end">
                    <div className="p-3 border-bottom d-flex justify-content-between align-items-center bg-white sticky-top">
                        <div className="d-flex align-items-center gap-2">
                            <PersonCircle size={32} className="text-secondary" />
                            <div>
                                <div className="fw-bold small">AI 면접관</div>
                                <div className="text-success" style={{ fontSize: '0.7rem' }}>● Online</div>
                            </div>
                        </div>
                        <Button variant="link" className="text-danger text-decoration-none fw-bold small">면접 종료</Button>
                    </div>

                    <div className="flex-grow-1 p-4 overflow-auto bg-light bg-opacity-50">
                        <div className="text-center mb-4"><Badge bg="secondary" className="bg-opacity-10 text-muted fw-normal px-3 py-1">오늘</Badge></div>

                        {/* AI 메시지 */}
                        <div className="d-flex gap-2 mb-4">
                            <PersonCircle size={28} className="mt-1 text-secondary" />
                            <div className="bg-white p-3 rounded-4 shadow-sm" style={{ maxWidth: '75%', borderRadius: '0 15px 15px 15px' }}>
                                <p className="m-0 small">안녕하세요! 오늘 마케팅 직무 모의 면접을 진행할 AI 면접관입니다. 준비되셨다면 첫 번째 질문을 드리겠습니다.</p>
                            </div>
                        </div>

                        {/* 사용자 메시지 */}
                        <div className="d-flex justify-content-end mb-4">
                            <div className="bg-primary p-3 text-white shadow-sm" style={{ maxWidth: '75%', borderRadius: '15px 0 15px 15px', backgroundColor: stPrimary }}>
                                <p className="m-0 small">네, 준비되었습니다. 시작해 주세요.</p>
                            </div>
                        </div>

                        {/* 질문 메시지 */}
                        <div className="d-flex gap-2 mb-4">
                            <PersonCircle size={28} className="mt-1 text-secondary" />
                            <div className="bg-white p-3 rounded-4 shadow-sm border-start border-primary border-4" style={{ maxWidth: '75%' }}>
                                <Badge bg="primary" className="mb-2" style={{ fontSize: '0.6rem' }}>질문 1/5</Badge>
                                <p className="m-0 fw-bold small">먼저 간단한 자기소개 부탁드립니다. 특히 직무와 관련된 경험을 중심으로 말씀해 주세요.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-white border-top">
                        <div className="position-relative">
                            <Form.Control placeholder="답변을 입력하세요..." className="py-3 ps-4 pe-5 rounded-pill border-light bg-light shadow-sm" />
                            <div className="position-absolute top-50 end-0 translate-middle-y me-2 d-flex gap-2">
                                <Button variant="light" className="rounded-circle p-2 text-muted"><MicFill /></Button>
                                <Button className="rounded-circle p-2 border-0" style={{ backgroundColor: stPrimary }}><SendFill className="text-white" /></Button>
                            </div>
                        </div>
                        <p className="text-center text-muted mt-2" style={{ fontSize: '0.65rem' }}>Enter를 누르면 줄바꿈이 됩니다. 답변을 전송하려면 전송 버튼을 누르세요.</p>
                    </div>
                </Col>

                {/* 우측: 정보 패널 */}
                <Col lg={4} className="p-5 bg-white overflow-auto">
                    <Badge bg="primary" className="bg-opacity-10 text-primary px-3 py-1 mb-3 fw-normal">CHAT INTERVIEW</Badge>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="fw-bold m-0">AI 채팅 모의 면접</h4>
                        <span className="text-muted small">진행 시간 04:12</span>
                    </div>

                    <div className="mb-5">
                        <div className="d-flex justify-content-between mb-2">
                            <span className="small fw-bold">면접 진행도</span>
                            <span className="small fw-bold text-primary">2 / 5</span>
                        </div>
                        <ProgressBar now={40} style={{ height: '6px' }} />
                    </div>

                    <div className="mb-4">
                        <p className="small fw-bold text-muted mb-3">지원 직무 및 태그</p>
                        <div className="d-flex flex-wrap gap-2">
                            {['마케팅', '콘텐츠기획', 'SNS운영', '데이터분석'].map(tag => (
                                <Badge key={tag} bg="light" className="text-muted border-0 fw-normal px-3 py-2">#{tag}</Badge>
                            ))}
                        </div>
                    </div>

                    <Card className="border-0 shadow-sm rounded-4 p-4 mb-4" style={{ borderLeft: `4px solid ${stPrimary}` }}>
                        <h6 className="text-primary fw-bold small mb-2 text-uppercase">Current Question</h6>
                        <p className="fw-bold mb-0" style={{ lineHeight: '1.5' }}>본인의 강점과 약점에 대해 구체적인 사례를 들어 설명해 주세요.</p>
                    </Card>

                    <Card className="border-0 shadow-sm rounded-4 p-4 mb-5" style={{ backgroundColor: '#FFF9C4' }}>
                        <div className="d-flex align-items-center gap-2 mb-2 text-warning">
                            <LightbulbFill /> <span className="fw-bold small text-dark">Interview Tip</span>
                        </div>
                        <p className="text-muted small m-0" style={{ lineHeight: '1.6' }}>
                            약점을 언급할 때는 치명적인 단점보다는 <span className="text-danger fw-bold">극복 가능한 단점</span>을 선택하고, 이를 개선하기 위해 어떤 노력을 하고 있는지 구체적으로 설명하는 것이 중요합니다.
                        </p>
                    </Card>

                    <Link to="/interview/chat/result" className="btn w-100 border py-3 text-dark fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm rounded-3 mt-auto">
                        결과
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default ChatInterview;