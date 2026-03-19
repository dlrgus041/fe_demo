import React from 'react';
import { Container, Row, Col, Card, Form, Button, Badge } from 'react-bootstrap';
import { ChevronRight, ChatDots, ShieldLock, ListCheck, Briefcase, Cpu, PlayCircle, ArrowLeft } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';

const InterviewSetup = () => {
    // SyncTalk 테마 컬러
    const stPrimary = '#1976D2';

    return (
        <div className="bg-light min-vh-100 py-5">
            <Container style={{ maxWidth: '900px' }}>

                {/* 상단 경로 및 타이틀 */}
                <div className="mb-5">
                    <div className="d-flex align-items-center gap-2 mb-3 text-muted" style={{ fontSize: '0.8rem' }}>
                        <Badge bg="primary" className="fw-normal px-2 py-1">설정 단계</Badge>
                        <span>AI 면접</span>
                        <ChevronRight size={10} />
                        <span>모의 면접 설정</span>
                    </div>
                    <h2 className="fw-bold mb-2">모의 면접 설정</h2>
                    <p className="text-muted small">원하는 면접 유형과 설정을 선택하여 실전 감각을 키워보세요.</p>
                </div>

                {/* 1. 면접 유형 선택 */}
                <section className="mb-5">
                    <h6 className="fw-bold d-flex align-items-center gap-2 mb-4">
                        <ListCheck className="text-primary" /> 면접 유형 선택
                    </h6>
                    <Row className="g-3">
                        {[
                            { title: '정형화된 면접', desc: '직무별 빈출 질문 위주의 기본적인 면접 연습입니다.', tags: ['기본 질문', '직무 적합성'], icon: <ListCheck />, selected: true },
                            { title: '꼬리물기 자유 대화', desc: 'AI가 답변 내용을 분석하여 심층적인 추가 질문을 합니다.', tags: ['심층 질문', '무한 대화'], icon: <ChatDots />, selected: false },
                            { title: '실전 압박 면접', desc: '난이도 높은 질문과 돌발 상황에 대처하는 능력을 기릅니다.', tags: ['고난이도', '순발력'], icon: <ShieldLock />, selected: false }
                        ].map((type, idx) => (
                            <Col md={4} key={idx}>
                                <Card className={`h-100 border-0 shadow-sm p-4 position-relative ${type.selected ? 'ring-primary' : ''}`} style={{ cursor: 'pointer', borderRadius: '1.2rem' }}>
                                    {type.selected && (
                                        <div className="position-absolute top-0 end-0 m-3">
                                            <div className="bg-primary rounded-circle" style={{ width: '12px', height: '12px' }}></div>
                                        </div>
                                    )}
                                    <div className="bg-primary bg-opacity-10 p-2 rounded mb-3" style={{ width: 'fit-content' }}>
                                        <span style={{ color: stPrimary }}>{type.icon}</span>
                                    </div>
                                    <Card.Title className="fw-bold fs-6 mb-2">{type.title}</Card.Title>
                                    <Card.Text className="text-muted mb-3" style={{ fontSize: '0.75rem', lineHeight: '1.6' }}>
                                        {type.desc}
                                    </Card.Text>
                                    <div className="d-flex flex-wrap gap-1">
                                        {type.tags.map((tag, tIdx) => (
                                            <Badge key={tIdx} bg="light" className="text-muted border-0 fw-normal" style={{ fontSize: '0.65rem' }}>{tag}</Badge>
                                        ))}
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </section>

                {/* 2. 희망 직무 선택 */}
                <section className="mb-5">
                    <Card className="border-0 shadow-sm p-4 rounded-4">
                        <h6 className="fw-bold d-flex align-items-center gap-2 mb-3">
                            <Briefcase className="text-primary" /> 희망 직무 선택
                        </h6>
                        <Form.Select className="border-light bg-light py-3 px-4 rounded-3" style={{ fontSize: '0.9rem' }}>
                            <option>희망 직무를 선택해주세요</option>
                            <option>프론트엔드 개발자</option>
                            <option>백엔드 개발자</option>
                            <option>서비스 기획자</option>
                        </Form.Select>
                        <p className="text-muted small mt-2 mb-0 px-2">
                            <span className="me-1">ⓘ</span> 선택한 직무에 맞춰 맞춤형 질문이 생성됩니다.
                        </p>
                    </Card>
                </section>

                {/* 3. 채용 공고 자동 분석 */}
                <section className="mb-5">
                    <Card className="border-0 shadow-sm p-4 rounded-4">
                        <h6 className="fw-bold d-flex align-items-center gap-2 mb-3">
                            <ListCheck className="text-primary" /> 채용 공고 자동 분석
                        </h6>
                        <Form.Group>
                            <Form.Label className="small fw-bold text-muted mb-2">채용 공고 내용 입력</Form.Label>
                            <div className="position-relative">
                                <Form.Control
                                    as="textarea"
                                    placeholder="지원하고자 하는 채용 공고의 JD(Job Description)를 복사하여 붙여넣으세요. AI가 핵심 역량과 필요 기술을 자동으로 분석합니다."
                                    className="border-light bg-light p-4 rounded-3"
                                    style={{ height: '180px', fontSize: '0.85rem', resize: 'none' }}
                                />
                                <Button
                                    size="sm"
                                    className="position-absolute bottom-0 end-0 m-3 px-3 py-2 border-0 fw-bold"
                                    style={{ backgroundColor: stPrimary, fontSize: '0.75rem' }}
                                >
                                    🪄 분석하기
                                </Button>
                            </div>
                        </Form.Group>
                    </Card>
                </section>

                {/* 4. 직무 / 기술 태그 설정 */}
                <section className="mb-5">
                    <Card className="border-0 shadow-sm p-4 rounded-4">
                        <h6 className="fw-bold d-flex align-items-center gap-2 mb-4">
                            <Cpu className="text-primary" /> 직무 / 기술 태그 설정
                        </h6>
                        <div className="px-2">
                            <p className="text-muted small mb-3">분석된 역량 및 추가하고 싶은 기술 스택을 관리하세요.</p>

                            <div className="mb-4">
                                <p className="fw-bold small text-muted mb-2" style={{ fontSize: '0.7rem' }}>요구 역량 (COMPETENCIES)</p>
                                <div className="d-flex flex-wrap gap-2">
                                    {['문제 해결 능력', '협업 및 커뮤니케이션', '데이터 기반 의사결정'].map((tag, i) => (
                                        <Badge key={i} bg="primary" className="bg-opacity-10 text-primary border-primary border-opacity-25 py-2 px-3 rounded-pill fw-medium d-flex align-items-center gap-2">
                                            {tag} <span>×</span>
                                        </Badge>
                                    ))}
                                    <Button variant="outline-secondary" className="rounded-pill px-3 py-1 border-dashed" style={{ fontSize: '0.8rem', borderStyle: 'dashed' }}>+ 추가</Button>
                                </div>
                            </div>

                            <div>
                                <p className="fw-bold small text-muted mb-2" style={{ fontSize: '0.7rem' }}>기술 스택 (TECH STACK)</p>
                                <div className="d-flex flex-wrap gap-2">
                                    {['React', 'TypeScript', 'Tailwind CSS'].map((tag, i) => (
                                        <Badge key={i} bg="secondary" className="bg-opacity-10 text-secondary border-secondary border-opacity-25 py-2 px-3 rounded-pill fw-medium d-flex align-items-center gap-2">
                                            {tag} <span>×</span>
                                        </Badge>
                                    ))}
                                    <Button variant="outline-secondary" className="rounded-pill px-3 py-1 border-dashed" style={{ fontSize: '0.8rem', borderStyle: 'dashed' }}>+ 추가</Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* 하단 추가 옵션 및 푸터 버튼 */}
                <div className="d-flex justify-content-between align-items-center pt-4">
                    <Form.Check
                        type="checkbox"
                        id="save-report"
                        label={<span className="small text-muted fw-bold">결과 리포트 저장</span>}
                        defaultChecked
                    />
                    <div className="d-flex gap-2">
                        <Link to="/interview/voice" className="btn px-4 py-2 text-muted fw-bold" style={{ backgroundColor: '#f0f0f0' }}>
                            음성 면접
                        </Link>
                        <Link to="/interview/chat" className="btn px-4 py-2 fw-bold d-flex align-items-center gap-2 border-0" style={{ backgroundColor: stPrimary }}>
                            채팅 면접
                        </Link>
                    </div>
                </div>

            </Container>

            {/* 커스텀 스타일링 */}
            <style>{`
        .ring-primary {
          box-shadow: 0 0 0 2px ${stPrimary} !important;
        }
        .border-dashed {
          border: 1.5px dashed #ccc !important;
          background: transparent !important;
          color: #999 !important;
        }
        .badge span {
          cursor: pointer;
          opacity: 0.6;
        }
        .badge span:hover {
          opacity: 1;
        }
      `}</style>
        </div>
    );
};

export default InterviewSetup;