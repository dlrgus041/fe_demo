import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Button, Badge } from 'react-bootstrap';
import { Download, ArrowCounterclockwise, Trophy, Lightbulb, ChatLeftText, CheckCircleFill, XCircleFill, ChevronRight } from 'react-bootstrap-icons';

const ChatInterviewResult = () => {
    const stPrimary = '#1976D2';

    return (
        <div className="bg-light min-vh-100 py-4">
            <Container fluid style={{ maxWidth: '1200px' }}>

                {/* 상단 헤더 영역 */}
                <div className="d-flex justify-content-between align-items-end mb-4 px-2">
                    <div>
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <Badge bg="primary" className="fw-normal" style={{ fontSize: '0.7rem' }}>REPORT COMPLETED</Badge>
                            <span className="text-muted small">2026.03.13 15:30 진행</span>
                        </div>
                        <h3 className="fw-bold m-0">마케팅 직무 AI 채팅 면접 결과</h3>
                    </div>
                    <div className="d-flex gap-2">
                        <Button variant="outline-secondary" size="sm" className="bg-white d-flex align-items-center gap-2 px-3">
                            <Download size={14} /> PDF 저장
                        </Button>
                        <Button variant="primary" size="sm" className="d-flex align-items-center gap-2 px-3 border-0" style={{ backgroundColor: stPrimary }}>
                            <ArrowCounterclockwise size={14} /> 다시 도전하기
                        </Button>
                    </div>
                </div>

                <Row className="g-4">
                    {/* 좌측: 종합 분석 영역 */}
                    <Col lg={7}>
                        <div className="d-flex flex-column gap-4">

                            {/* 1. 전체 총평 카드 */}
                            <Card className="border-0 shadow-sm rounded-4 p-4">
                                <Row className="align-items-center">
                                    <Col sm={4} className="text-center border-end">
                                        <div className="small fw-bold text-muted mb-2">전체 총평</div>
                                        <div className="position-relative d-inline-block">
                                            <svg width="120" height="120" viewBox="0 0 36 36">
                                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f0f7ff" strokeWidth="3" />
                                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke={stPrimary} strokeWidth="3" strokeDasharray="85, 100" />
                                                <text x="18" y="19" className="fw-bold" textAnchor="middle" fontSize="8" fill="#333">85</text>
                                                <text x="18" y="24" textAnchor="middle" fontSize="3" fill="#999" fontWeight="bold">TOTAL SCORE</text>
                                            </svg>
                                        </div>
                                    </Col>
                                    <Col sm={8} className="ps-4">
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <Trophy className="text-warning" />
                                            <span className="fw-bold">전체적인 평가</span>
                                        </div>
                                        <p className="text-muted small mb-3" style={{ lineHeight: '1.6' }}>
                                            전반적으로 마케팅 직무에 대한 이해도가 높고, 본인의 경험을 논리적으로 잘 설명해주셨습니다. 특히 SNS 마케팅 성과를 수치로 제시한 점이 매우 인상적입니다...
                                        </p>
                                        <div className="d-flex gap-2">
                                            <Badge bg="success" className="bg-opacity-10 text-success fw-normal px-2 py-1">✨ 논리적 답변</Badge>
                                            <Badge bg="primary" className="bg-opacity-10 text-primary fw-normal px-2 py-1">🎯 직무 적합성 우수</Badge>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>

                            {/* 2. 상세 지표 (2열) */}
                            <Row className="g-4">
                                <Col md={6}>
                                    <Card className="border-0 shadow-sm rounded-4 p-4 h-100">
                                        <h6 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                            <ChatLeftText className="text-primary" /> 답변 논리 및 구조
                                        </h6>
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between small mb-1">
                                                <span className="text-muted">명확성 (Clarity)</span>
                                                <span className="fw-bold">90%</span>
                                            </div>
                                            <ProgressBar now={90} variant="primary" style={{ height: '6px' }} />
                                        </div>
                                        <div className="mb-4">
                                            <div className="d-flex justify-content-between small mb-1">
                                                <span className="text-muted">설득력 (Persuasiveness)</span>
                                                <span className="fw-bold">85%</span>
                                            </div>
                                            <ProgressBar now={85} variant="primary" style={{ height: '6px' }} />
                                        </div>
                                        <div className="p-2 rounded bg-light small text-muted" style={{ fontSize: '0.75rem' }}>
                                            💡 <span className="fw-bold">STAR 기법</span>을 활용한 답변 구성이 돋보입니다. 결론을 먼저 말하는 연습을 하면 더 좋습니다.
                                        </div>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className="border-0 shadow-sm rounded-4 p-4 h-100 text-center">
                                        <h6 className="fw-bold mb-4 text-start d-flex align-items-center gap-2">
                                            <Lightbulb className="text-primary" /> 핵심 키워드 분석
                                        </h6>
                                        <div className="d-flex flex-wrap justify-content-center gap-2 py-3">
                                            <span className="fs-4 fw-bold text-primary">데이터분석</span>
                                            <span className="fs-5 text-muted">SNS마케팅</span>
                                            <span className="fs-6 fw-bold">성과창출</span>
                                            <span className="small text-muted">협업</span>
                                            <span className="small">기획력</span>
                                        </div>
                                        <div className="mt-auto pt-3 border-top d-flex justify-content-around small">
                                            <div><div className="text-muted mb-1">많이 사용한</div><Badge bg="light" className="text-dark border">데이터, 분석</Badge></div>
                                            <div><div className="text-muted mb-1">추천 보완 키워드</div><Badge bg="warning" className="bg-opacity-10 text-dark border-warning border-opacity-25">ROI, 전략</Badge></div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>

                            {/* 3. 문장력 및 가이드 반영 */}
                            <Row className="g-4">
                                <Col md={6}>
                                    <Card className="border-0 shadow-sm rounded-4 p-4 h-100">
                                        <h6 className="fw-bold mb-3">문장력 및 표현력</h6>
                                        <div className="mb-3 p-3 rounded-3 bg-success bg-opacity-5 border-start border-success border-4">
                                            <div className="small fw-bold text-success mb-1"><CheckCircleFill /> Strong Point</div>
                                            <div className="small text-muted">"-한 경험을 통해 -를 배웠습니다"와 같은 명확한 인과관계 표현이 좋습니다.</div>
                                        </div>
                                        <div className="p-3 rounded-3 bg-danger bg-opacity-5 border-start border-danger border-4">
                                            <div className="small fw-bold text-danger mb-1"><XCircleFill /> Weak Point</div>
                                            <div className="small text-muted">문장이 다소 길어지는 경향이 있습니다. 접속사 사용을 줄여보세요.</div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className="border-0 shadow-sm rounded-4 p-4 h-100">
                                        <div className="d-flex justify-content-between mb-3">
                                            <h6 className="fw-bold m-0">실시간 가이드 반영 내역</h6>
                                            <Badge bg="light" className="text-primary border-primary border-opacity-25">반영률 80%</Badge>
                                        </div>
                                        <div className="small d-flex flex-column gap-3">
                                            <div className="d-flex gap-2">
                                                <div className="bg-primary rounded-circle mt-1" style={{ width: '8px', height: '8px', flexShrink: 0 }}></div>
                                                <div>
                                                    <div className="fw-bold">구체적인 수치 활용 제안</div>
                                                    <div className="text-success fw-bold">✓ 반영 완료 ("200% 증가")</div>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-2 opacity-50">
                                                <div className="bg-secondary rounded-circle mt-1" style={{ width: '8px', height: '8px', flexShrink: 0 }}></div>
                                                <div>
                                                    <div className="fw-bold">팀워크 관련 경험 추가 제안</div>
                                                    <div className="text-muted">미반영</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    {/* 우측: 전체 대화 복기 (스크롤 영역) */}
                    <Col lg={5}>
                        <Card className="border-0 shadow-sm rounded-4 h-100 d-flex flex-column overflow-hidden">
                            <Card.Header className="bg-white border-0 p-4">
                                <h6 className="fw-bold m-0 d-flex align-items-center gap-2">
                                    <ChatLeftText className="text-primary" /> 전체 대화 복기
                                </h6>
                                <p className="text-muted small m-0">AI의 상세 피드백 메모를 확인하세요.</p>
                            </Card.Header>
                            <Card.Body className="bg-light bg-opacity-50 overflow-auto p-4" style={{ maxHeight: '700px' }}>
                                {/* 대화 블록 1 */}
                                <div className="mb-4">
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        <div className="bg-dark rounded-circle" style={{ width: '24px', height: '24px' }}></div>
                                        <span className="small fw-bold">Q1. 자기소개</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-3 shadow-sm small mb-2 border">
                                        간단한 자기소개 부탁드립니다. 직무와 관련된 경험을 중심으로 말씀해주세요.
                                    </div>
                                    <div className="p-3 rounded-3 shadow-sm small border-start border-primary border-4 ms-4" style={{ backgroundColor: '#f0f7ff' }}>
                                        안녕하세요, 마케팅 직무에 지원한 홍길동입니다. 저는 대학 시절 창업 동아리에서 SNS 마케팅을 담당하며...
                                    </div>
                                    <div className="mt-2 ms-4 p-2 bg-warning bg-opacity-10 rounded border-warning border-opacity-25 small" style={{ fontSize: '0.75rem' }}>
                                        <span className="text-warning fw-bold">AI Feedback:</span> 수치를 활용하여 성과를 명확히 표현한 점이 훌륭합니다.
                                    </div>
                                </div>

                                {/* 대화 블록 2 */}
                                <div className="mb-4">
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        <div className="bg-dark rounded-circle" style={{ width: '24px', height: '24px' }}></div>
                                        <span className="small fw-bold">Q2. 강점과 약점</span>
                                    </div>
                                    <div className="bg-white p-3 rounded-3 shadow-sm small mb-2 border">
                                        본인의 강점과 약점에 대해 구체적인 사례를 들어 설명해주세요.
                                    </div>
                                    <div className="p-3 rounded-3 shadow-sm small border-start border-primary border-4 ms-4" style={{ backgroundColor: '#f0f7ff' }}>
                                        제 강점은 분석력입니다. 데이터를 기반으로 의사결정을 내립니다...
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer className="bg-white border-0 p-3">
                                <Button variant="light" className="w-100 fw-bold text-muted small py-2">전체 스크립트 복사하기</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default ChatInterviewResult;