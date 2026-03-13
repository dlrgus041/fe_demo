import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Button, Badge } from 'react-bootstrap';
import {
    Download,
    ArrowCounterclockwise,
    PersonFill,
    AwardFill,
    EmojiSmileFill,
    ExclamationCircleFill,
    PlayFill,
    MicFill,
    BarChartFill,
    LightbulbFill
} from 'react-bootstrap-icons';

const VoiceInterviewResult = () => {
    const stPrimary = '#1976D2'; // SyncTalk 메인 블루
    const bgLight = '#F8F9FA';

    return (
        <div style={{ backgroundColor: bgLight, minvh: '100vh' }} className="py-5">
            <Container style={{ maxWidth: '1000px' }}>

                {/* 상단 헤더 영역 */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <div className="d-flex align-items-center gap-2 mb-1">
                            <Badge bg="primary" className="bg-opacity-10 text-primary fw-normal">AI 분석 완료</Badge>
                            <span className="text-muted small">2026.03.13 14:30 면접</span>
                        </div>
                        <h2 className="fw-bold m-0">AI 음성 면접 결과 리포트</h2>
                        <p className="text-muted small mt-1">전략기획팀 신입 공채 모의 면접 분석 결과입니다.</p>
                    </div>
                    <div className="d-flex gap-2">
                        <Button variant="outline-dark" size="sm" className="bg-white rounded-pill px-3 d-flex align-items-center gap-2 border-light shadow-sm">
                            <Download size={14} /> 리포트 다운로드
                        </Button>
                        <Button variant="primary" size="sm" className="rounded-pill px-3 d-flex align-items-center gap-2 border-0 shadow-sm" style={{ backgroundColor: stPrimary }}>
                            <ArrowCounterclockwise size={14} /> 다시 면접 보기
                        </Button>
                    </div>
                </div>

                {/* 1. 상단 요약 지표 (4개 카드 레이아웃) */}
                <Row className="g-3 mb-4">
                    <Col md={4}>
                        <Card className="border-0 shadow-sm rounded-4 p-4 text-center h-100">
                            <div className="fw-bold text-muted small mb-3">종합 커뮤니케이션 점수</div>
                            <div className="position-relative d-inline-block mb-3">
                                <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: `6px solid #E3F2FD`, borderTopColor: stPrimary, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                                    <h2 className="fw-bold m-0">85<span className="fs-6">점</span></h2>
                                </div>
                            </div>
                            <Badge bg="success" className="bg-opacity-10 text-success rounded-pill px-3 py-1 mb-2 mx-auto" style={{ width: 'fit-content' }}>Excellent</Badge>
                            <p className="text-muted" style={{ fontSize: '0.75rem' }}>상위 15%에 해당하는 우수한 결과입니다.</p>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Row className="g-3">
                            <Col sm={6}>
                                <Card className="border-0 shadow-sm rounded-4 p-3 d-flex flex-row align-items-center gap-3">
                                    <div className="p-2 rounded-3" style={{ backgroundColor: '#E3F2FD' }}><PersonFill color={stPrimary} /></div>
                                    <div>
                                        <div className="text-muted small">평균 발화 속도</div>
                                        <div className="fw-bold fs-5">140 <span className="small text-muted fw-normal">WPM</span></div>
                                        <ProgressBar now={70} style={{ height: '4px', width: '100px' }} className="mt-2" />
                                    </div>
                                    <Badge bg="light" className="text-muted border ms-auto fw-normal">안정적</Badge>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="border-0 shadow-sm rounded-4 p-3 d-flex flex-row align-items-center gap-3">
                                    <div className="p-2 rounded-3" style={{ backgroundColor: '#F3E5F5' }}><AwardFill color="#9C27B0" /></div>
                                    <div>
                                        <div className="text-muted small">논리적 구성력</div>
                                        <div className="fw-bold fs-5">92 <span className="small text-muted fw-normal">점</span></div>
                                        <ProgressBar now={92} variant="info" style={{ height: '4px', width: '100px' }} className="mt-2" />
                                    </div>
                                    <Badge bg="light" className="text-muted border ms-auto fw-normal">높음</Badge>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="border-0 shadow-sm rounded-4 p-3 d-flex flex-row align-items-center gap-3">
                                    <div className="p-2 rounded-3" style={{ backgroundColor: '#E8F5E9' }}><EmojiSmileFill color="#4CAF50" /></div>
                                    <div>
                                        <div className="text-muted small">주요 감정 상태</div>
                                        <div className="fw-bold fs-5">자신감 있음</div>
                                        <div className="text-muted" style={{ fontSize: '0.65rem' }}>목소리 톤에서 확신이 느껴짐</div>
                                    </div>
                                    <Badge bg="light" className="text-muted border ms-auto fw-normal">긍정적</Badge>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="border-0 shadow-sm rounded-4 p-3 d-flex flex-row align-items-center gap-3">
                                    <div className="p-2 rounded-3" style={{ backgroundColor: '#FFF3E0' }}><ExclamationCircleFill color="#FF9800" /></div>
                                    <div>
                                        <div className="text-muted small">발음 주의 단어</div>
                                        <div className="fw-bold fs-5">혁신적인, 전략</div>
                                    </div>
                                    <Badge bg="light" className="text-muted border ms-auto fw-normal">개선 필요</Badge>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* 2. 상세 분석 리포트 섹션 */}
                <h5 className="fw-bold mb-4 mt-5">상세 분석 리포트</h5>
                <Row className="g-4">
                    {/* 목소리 톤 및 감정 분석 */}
                    <Col md={6}>
                        <Card className="border-0 shadow-sm rounded-4 p-4 h-100">
                            <h6 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <BarChartFill className="text-primary" /> 목소리 톤 및 감정
                            </h6>
                            <div className="mb-4">
                                <div className="d-flex justify-content-between small mb-1">
                                    <span>자신감 (Confidence)</span>
                                    <span className="text-primary fw-bold">High</span>
                                </div>
                                <ProgressBar now={85} style={{ height: '8px' }} />
                            </div>
                            <div className="mb-4">
                                <div className="d-flex justify-content-between small mb-1">
                                    <span>침착함 (Calmness)</span>
                                    <span className="text-success fw-bold">Medium</span>
                                </div>
                                <ProgressBar now={60} variant="success" style={{ height: '8px' }} />
                            </div>
                            <div className="p-3 rounded-3 mt-auto" style={{ backgroundColor: '#F0F7FF' }}>
                                <p className="small m-0 text-muted" style={{ lineHeight: '1.6' }}>
                                    초반보다 중반부에 목소리 톤이 상승하며 긍정적인 인상을 줍니다. 끝맺음 처리가 명확하여 신뢰감을 주는 톤입니다.
                                </p>
                            </div>
                        </Card>
                    </Col>

                    {/* 발음 정확도 상세 */}
                    <Col md={6}>
                        <Card className="border-0 shadow-sm rounded-4 p-4 h-100">
                            <h6 className="fw-bold mb-4 d-flex align-items-center gap-2">
                                <MicFill className="text-warning" /> 발음 정확도 상세
                            </h6>
                            <Row className="text-center mb-4">
                                <Col>
                                    <div className="text-muted small mb-1">명확성</div>
                                    <div className="fw-bold">높음</div>
                                </Col>
                                <Col className="border-start border-end">
                                    <div className="text-muted small mb-1">유창성</div>
                                    <div className="fw-bold">보통</div>
                                </Col>
                                <Col>
                                    <div className="text-muted small mb-1">억양</div>
                                    <div className="fw-bold">자연스러움</div>
                                </Col>
                            </Row>
                            <div className="bg-light p-3 rounded-3">
                                <div className="fw-bold small mb-2">개선이 필요한 단어</div>
                                <div className="d-flex gap-2">
                                    <Button variant="white" size="sm" className="border rounded-pill px-3 py-1 bg-white small d-flex align-items-center gap-2">
                                        혁신적인 <PlayFill className="text-primary" />
                                    </Button>
                                    <Button variant="white" size="sm" className="border rounded-pill px-3 py-1 bg-white small d-flex align-items-center gap-2">
                                        전략 <PlayFill className="text-primary" />
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-3 d-flex align-items-center gap-2 text-primary small">
                                <LightbulbFill size={14} /> <span>받침 발음을 조금 더 명확하게 해주시면 전달력이 15% 향상됩니다.</span>
                            </div>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default VoiceInterviewResult;