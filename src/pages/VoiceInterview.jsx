import React, { useState } from 'react';
import { Container, Row, Col, Card, ProgressBar, Button, Badge } from 'react-bootstrap';
import { Lightbulb, MicFill, MicMuteFill, GearFill, StopFill, ArrowRightCircleFill, CircleFill, ChevronRight } from 'react-bootstrap-icons';

const VoiceInterview = () => {
    const [isMuted, setIsMuted] = useState(false);
    const stPrimary = '#1976D2';

    return (
        <div className="bg-light min-vh-100 d-flex flex-column">
            {/* 메인 콘텐츠 레이아웃 */}
            <Row className="flex-grow-1 g-0">

                {/* 좌측: 음성 시각화 및 인터렉션 영역 */}
                <Col lg={8} className="d-flex align-items-center justify-content-center border-end bg-white bg-opacity-50">
                    <div className="text-center w-100 px-4">
                        <Card className="border-0 shadow-sm rounded-4 p-5 mx-auto" style={{ maxWidth: '600px' }}>
                            <div className="d-flex justify-content-center gap-2 mb-5">
                                <Badge bg="danger" className="bg-opacity-10 text-danger px-3 py-2 d-flex align-items-center gap-2 rounded-pill">
                                    <CircleFill size={8} className="pulse-animation" /> 녹음 중
                                </Badge>
                                <Badge bg="light" className="text-muted border px-3 py-2 rounded-pill fw-normal">
                                    <MicFill className="me-1" /> 마이크 연결됨
                                </Badge>
                            </div>

                            {/* 중앙 음성 웨이브 애니메이션 시각화 */}
                            <div className="mb-5 py-4">
                                <div className="d-flex justify-content-center align-items-center gap-1" style={{ height: '80px' }}>
                                    {[0.4, 0.7, 1, 0.8, 0.5, 0.9, 0.6, 0.3, 0.8, 1, 0.4].map((scale, i) => (
                                        <div
                                            key={i}
                                            className="bg-primary rounded-pill wave-bar"
                                            style={{
                                                width: '8px',
                                                height: '100%',
                                                transform: `scaleY(${scale})`,
                                                backgroundColor: stPrimary
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </div>

                            <h5 className="text-muted fw-normal mb-0">답변을 말씀해 주세요...</h5>
                        </Card>

                        {/* 하단 플로팅 컨트롤바 */}
                        <div className="mt-5 d-flex justify-content-center gap-3">
                            <div className="bg-white shadow-sm rounded-pill p-2 d-flex gap-2 border">
                                <Button
                                    variant={isMuted ? "danger" : "light"}
                                    className="rounded-circle p-3 d-flex align-items-center justify-content-center"
                                    onClick={() => setIsMuted(!isMuted)}
                                >
                                    {isMuted ? <MicMuteFill size={20} /> : <MicFill size={20} />}
                                </Button>
                                <Button variant="light" className="rounded-circle p-3 d-flex align-items-center justify-content-center">
                                    <GearFill size={20} className="text-muted" />
                                </Button>
                            </div>
                            <Button variant="danger" className="rounded-pill px-5 py-3 fw-bold d-flex align-items-center gap-2 shadow">
                                <StopFill size={24} /> 답변 종료
                            </Button>
                        </div>
                    </div>
                </Col>

                {/* 우측: 질문 정보 및 진행 현황 영역 */}
                <Col lg={4} className="bg-white p-5 overflow-auto">
                    <div className="mb-5">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <Badge bg="primary" className="bg-opacity-10 text-primary px-3 py-1 fw-normal">VOICE INTERVIEW</Badge>
                            <span className="text-muted small">진행 시간 04:12</span>
                        </div>
                        <h4 className="fw-bold">AI 음성 모의 면접</h4>
                        <p className="text-muted small">화면 부담 없이 음성으로만 진행되는 면접입니다.</p>
                    </div>

                    {/* 질문 진행도 */}
                    <div className="mb-5">
                        <div className="d-flex justify-content-between mb-2">
                            <span className="small fw-bold">질문 진행도</span>
                            <span className="small fw-bold text-primary">3 / 5</span>
                        </div>
                        <ProgressBar now={60} style={{ height: '6px' }} />
                    </div>

                    {/* 현재 질문 카드 */}
                    <Card className="border-0 shadow-sm rounded-4 p-4 mb-4 border-start border-4" style={{ borderLeftColor: stPrimary + ' !important' }}>
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <div className="bg-dark rounded-circle overflow-hidden" style={{ width: '32px', height: '32px' }}>
                                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=ai" alt="AI" className="w-100" />
                            </div>
                            <div>
                                <div className="text-muted" style={{ fontSize: '0.65rem' }}>INTERVIEWER</div>
                                <div className="fw-bold small">AI 채용 담당자</div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-start mb-2">
                            <Badge bg="primary" style={{ fontSize: '0.7rem' }}>Q3</Badge>
                            <span className="text-muted small">⏳ 남은 시간 01:45</span>
                        </div>
                        <h5 className="fw-bold mb-4" style={{ lineHeight: '1.5' }}>
                            본인의 강점과 약점에 대해 구체적인 사례를 들어 설명해 주세요.
                        </h5>

                        <div className="bg-light p-3 rounded-3 small">
                            <div className="fw-bold text-primary mb-1 d-flex align-items-center gap-1">
                                <Lightbulb size={14} /> 답변 팁
                            </div>
                            <p className="text-muted m-0" style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>
                                직무와 연관된 강점을 강조하고, 약점은 극복하기 위해 노력했던 경험과 함께 이야기하는 것이 좋습니다. 솔직하면서도 긍정적인 태도를 유지하세요.
                            </p>
                        </div>
                    </Card>

                    {/* 추천 키워드 */}
                    <div className="mb-5">
                        <p className="small fw-bold text-muted mb-3">추천 키워드</p>
                        <div className="d-flex flex-wrap gap-2">
                            {['#문제해결능력', '#협업', '#성장가능성'].map((tag, i) => (
                                <Badge key={i} bg="light" className="text-muted border-0 fw-normal px-3 py-2 rounded-pill">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* 네비게이션 버튼 */}
                    <div className="d-flex gap-2 mt-auto">
                        <Button variant="outline-light" className="flex-grow-1 border text-muted fw-bold py-2">잠시 중단</Button>
                        <a href="/interview/voice/result" className="btn flex-grow-1 border-0 fw-bold py-2 d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: stPrimary }}>
                            결과
                        </a>
                    </div>
                </Col>
            </Row>

            {/* 애니메이션 CSS 스타일 */}
            <style>{`
        .pulse-animation {
          animation: pulse-red 1.5s infinite;
        }
        @keyframes pulse-red {
          0% { transform: scale(0.95); opacity: 0.7; }
          70% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.7; }
        }
        .wave-bar {
          animation: wave 1.2s ease-in-out infinite alternate;
        }
        @keyframes wave {
          from { transform: scaleY(0.4); }
          to { transform: scaleY(1.2); }
        }
        .wave-bar:nth-child(even) { animation-delay: 0.2s; }
        .wave-bar:nth-child(3n) { animation-delay: 0.4s; }
      `}</style>
        </div>
    );
};

export default VoiceInterview;