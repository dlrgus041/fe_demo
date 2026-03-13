import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Bullseye, CheckCircle, Lightbulb, People, Tools, GraphUp, ChevronRight, FileEarmarkTextFill } from 'react-bootstrap-icons';

const CorrectionResult = () => {
    // SyncTalk 메인 컬러 스키마 정의
    const stPrimary = '#1976d2'; // 메인 블루
    const stLightBlue = '#e3f2fd'; // 사이드바/강조용 연한 블루

    return (
        <div className="bg-light min-vh-100 py-5">
            <Container className="bg-white p-5 rounded-4 shadow-sm" style={{ maxWidth: '1000px' }}>

                {/* 헤더 섹션 */}
                <div className="mb-5">
                    <h2 className="fw-bold mb-2">첨삭 분석 결과</h2>
                    <p className="text-muted small">선택하신 [테크 리드] 채용 공고의 JD를 바탕으로 자소서가 최적화되었습니다.</p>
                </div>

                {/* 대시보드 스코어 카드 */}
                <Row className="g-3 mb-5">
                    {[
                        { title: 'JD 적합도 점수', score: '92', total: '/100', diff: '+24%', icon: <Bullseye style={{color: stPrimary}} /> },
                        { title: '문장 완성도', score: '88', total: '%', diff: '+15%', icon: <CheckCircle className="text-info" /> },
                        { title: '핵심 역량 매칭', score: '5', total: '/5 건', diff: '최적화 완료', icon: <Lightbulb style={{color: stPrimary}} /> }
                    ].map((item, idx) => (
                        <Col md={4} key={idx}>
                            <Card className="border-0 shadow-sm p-4 h-100">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <span className="small fw-bold text-muted">{item.title}</span>
                                    <div className="p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px', backgroundColor: '#f0f7ff' }}>
                                        {item.icon}
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline gap-1">
                                    <h3 className="fw-bold m-0">{item.score}</h3>
                                    <span className="text-muted small">{item.total}</span>
                                    <span className="ms-auto text-success small fw-bold">{item.diff.startsWith('+') ? `↑ ${item.diff}` : item.diff}</span>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* 주요 요구사항 반영 결과 (태그 섹션) */}
                <div className="mb-5">
                    <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                        <ChevronRight style={{ color: stPrimary, strokeWidth: '2px' }} /> 주요 요구사항 반영 결과
                    </h5>
                    <div className="d-flex flex-wrap gap-2">
                        {[
                            { icon: <Bullseye />, text: '직무전문성' },
                            { icon: <People />, text: '소통능력' },
                            { icon: <Tools />, text: '문제해결' },
                            { icon: <People />, text: '협업' },
                            { icon: <GraphUp />, text: '성과지표' }
                        ].map((tag, idx) => (
                            <Badge key={idx} bg="light" className="text-dark border px-3 py-2 fw-normal d-flex align-items-center gap-2 rounded-pill" style={{ backgroundColor: '#f8f9fa' }}>
                                <span style={{ color: stPrimary }}>{tag.icon}</span> # {tag.text}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* 내용 비교 분석 섹션 */}
                <div className="mb-5">
                    <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                        <ChevronRight style={{ color: stPrimary }} /> 내용 비교 분석
                    </h5>
                    <Row className="g-4">
                        <Col md={6}>
                            <div className="text-muted small mb-2 fw-bold">BEFORE</div>
                            <div className="p-4 rounded-4 border bg-light h-100" style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                                저는 이전 직장에서 개발팀의 리더로서 여러 프로젝트를 관리했습니다. 팀원들과 친하게 지내며 소통을 많이 하려고 노력했고, 기술적인 문제도 잘 해결했습니다...
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="small mb-2 fw-bold" style={{ color: stPrimary }}>AFTER (JD 맞춤형 최적화)</div>
                            <div className="p-4 rounded-4 border-2 h-100" style={{ fontSize: '0.9rem', lineHeight: '1.8', borderColor: stPrimary, backgroundColor: '#fcfdff' }}>
                                이전 직장에서 <span className="p-1 rounded fw-bold" style={{ backgroundColor: '#d1e9ff' }}>5명의 개발팀을 리딩하는 테크 리드</span>로서 대규모 아키텍처 개선 프로젝트를 주도했습니다. <span className="p-1 rounded fw-bold" style={{ backgroundColor: '#d1e9ff' }}>Agile 방법론</span>을 도입하여 팀 내 소통 효율을 30% 향상 시켰으며...
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* SyncTalk AI 첨삭 코멘트 섹션 */}
                <div className="p-5 rounded-4 mb-5" style={{ backgroundColor: stLightBlue }}>
                    <div className="d-flex align-items-center gap-2 mb-4">
                        <div className="p-2 rounded text-white" style={{ backgroundColor: stPrimary }}><Lightbulb /></div>
                        <div>
                            <h6 className="fw-bold m-0">SyncTalk AI 첨삭 코멘트</h6>
                            <span className="text-muted small">JD의 핵심 키워드를 기반으로 다음과 같은 점을 개선했습니다.</span>
                        </div>
                    </div>

                    <div className="d-flex flex-column gap-3">
                        {[
                            { title: '정량적 수치 도입', desc: "단순히 '속도를 올렸다'는 표현 대신, '응답 속도 40% 단축'과 같은 구체적인 지표를 사용하여 JD에서 요구하는 '성과 중심의 역량'을 강조했습니다." },
                            { title: '직무 관련 전문 용어 배치', desc: "'테크 리드', 'MSA', 'MTTR', 'Agile' 등 JD에 포함된 핵심 기술 스택 및 방법론 키워드를 자연스럽게 문맥에 녹여내어 매칭률을 높였습니다." }
                        ].map((comm, idx) => (
                            <div key={idx} className="bg-white p-3 rounded-3 shadow-sm d-flex align-items-start gap-3 border-start border-4" style={{ borderLeftColor: stPrimary + ' !important' }}>
                                <CheckCircle className="text-success mt-1" />
                                <div>
                                    <div className="fw-bold small mb-1">{comm.title}</div>
                                    <div className="text-muted" style={{ fontSize: '0.8rem' }}>{comm.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 하단 버튼 액션 바 */}
                <div className="d-flex justify-content-center gap-3 border-top pt-4">
                    <Button variant="outline-primary" className="px-5 py-2 fw-bold" style={{ color: stPrimary, borderColor: stPrimary }}>
                        다시 첨삭하기
                    </Button>
                    <Button variant="primary" className="px-5 py-2 fw-bold border-0" style={{ backgroundColor: stPrimary }}>
                        최종 본으로 저장
                    </Button>
                </div>

            </Container>

            <div className="text-center mt-4 text-muted small">
                © 2026 SyncTalk Resume Intelligence. All rights reserved.
            </div>
        </div>
    );
};

export default CorrectionResult;