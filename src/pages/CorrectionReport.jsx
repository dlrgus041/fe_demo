import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Button, Badge } from 'react-bootstrap';
import { FileEarmarkPdf, ArrowRepeat, CheckCircleFill, ExclamationTriangleFill, LightbulbFill, ArrowRight } from 'react-bootstrap-icons';

const CorrectionReport = () => {
    return (
        <div className="bg-light min-vh-100 py-5">
            <Container className="bg-white p-5 rounded-4 shadow-sm" style={{ maxWidth: '1000px' }}>

                {/* 헤더 섹션 */}
                <div className="d-flex justify-content-between align-items-start mb-5">
                    <div>
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <Badge bg="primary" className="px-2 py-1" style={{ backgroundColor: '#1976D2' }}>첨삭 완료</Badge>
                            <span className="text-muted small">2023 하반기 신입 마케터 공채 | 문항 1번</span>
                        </div>
                        <h2 className="fw-bold m-0">자소서 첨삭 전후 비교 리포트</h2>
                    </div>
                    <div className="d-flex gap-2">
                        <Button variant="outline-secondary" size="sm" className="d-flex align-items-center gap-1">
                            <FileEarmarkPdf /> PDF 저장
                        </Button>
                        <Button variant="primary" size="sm" className="d-flex align-items-center gap-1" style={{ backgroundColor: '#1976D2' }}>
                            <ArrowRepeat /> 수정본 복사
                        </Button>
                    </div>
                </div>

                {/* 대시보드 요약 카드 섹션 */}
                <Row className="g-3 mb-5">
                    <Col md={3}>
                        <Card className="h-100 border-0 shadow-sm text-center p-3">
                            <Card.Text className="small fw-bold text-muted">자소서 완성도 점수</Card.Text>
                            <div className="position-relative d-inline-block mx-auto my-3" style={{ width: '100px', height: '100px' }}>
                                <svg viewBox="0 0 36 36" className="w-100 h-100">
                                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E3F2FD" strokeWidth="3" />
                                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#1976D2" strokeWidth="3" strokeDasharray="88, 100" />
                                    <text x="18" y="20.5" className="fw-bold" textAnchor="middle" fontSize="8" fill="#1976D2">88점</text>
                                </svg>
                            </div>
                            <Card.Text className="text-success small fw-bold">↑ +25점</Card.Text>
                            <Card.Text className="text-muted" style={{ fontSize: '0.7rem' }}>직무 적합성과 가독성이 크게 향상되었습니다.</Card.Text>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="h-100 border-0 shadow-sm p-3">
                            <div className="bg-primary bg-opacity-10 p-2 rounded mb-3" style={{ width: 'fit-content' }}>
                                <CheckCircleFill className="text-primary" />
                            </div>
                            <Card.Text className="small fw-bold text-muted mb-1">가독성 & 명확성</Card.Text>
                            <Card.Title className="fw-bold mb-2">High <span className="text-success fs-6">매우 좋음</span></Card.Title>
                            <Card.Text className="text-muted" style={{ fontSize: '0.7rem' }}>문장 구조를 간결하게 다듬어 읽기 편해졌습니다.</Card.Text>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="h-100 border-0 shadow-sm p-3">
                            <div className="bg-warning bg-opacity-10 p-2 rounded mb-3" style={{ width: 'fit-content' }}>
                                <LightbulbFill className="text-warning" />
                            </div>
                            <Card.Text className="small fw-bold text-muted mb-1">직무 키워드</Card.Text>
                            <Card.Title className="fw-bold mb-2">12개 <span className="text-muted fs-6 fw-normal">적절함</span></Card.Title>
                            <Card.Text className="text-muted" style={{ fontSize: '0.7rem' }}>채용 공고와 매칭되는 핵심 역량이 강조되었습니다.</Card.Text>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="h-100 border-0 shadow-sm p-3">
                            <div className="bg-danger bg-opacity-10 p-2 rounded mb-3" style={{ width: 'fit-content' }}>
                                <ExclamationTriangleFill className="text-danger" />
                            </div>
                            <Card.Text className="small fw-bold text-muted mb-1">논리적 설득력</Card.Text>
                            <Card.Title className="fw-bold mb-2">STAR <span className="text-success fs-6 fw-normal">구조 적용됨</span></Card.Title>
                            <Card.Text className="text-muted" style={{ fontSize: '0.7rem' }}>상황-과제-행동-결과 구조로 경험을 구체화했습니다.</Card.Text>
                        </Card>
                    </Col>
                </Row>

                {/* 비교 본문 섹션 */}
                <Row className="g-4 mb-5">
                    {/* Before */}
                    <Col md={6}>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h5 className="fw-bold text-danger d-flex align-items-center gap-2"><ArrowRepeat /> Before (수정 전)</h5>
                            <span className="text-muted small">632자</span>
                        </div>
                        <div className="p-4 rounded-4 border" style={{ backgroundColor: '#FFF9F9', height: '400px', overflowY: 'auto', lineHeight: '1.8' }}>
                            <p className="small text-dark">
                                저는 평소 마케팅에 관심이 많아서 <span className="text-danger border-bottom border-danger">이것저것</span> 다양한 활동을 해왔습니다. 대학교 3학년 때 동아리에서 SNS 홍보를 맡았는데 <span className="text-danger border-bottom border-danger">그냥</span> 게시물만 올리는 게 아니라 사람들이 좋아할 만한 콘텐츠를 만들려고 노력했습니다. <span className="text-danger border-bottom border-danger">솔직히 처음에는</span> 반응이 별로 없어서 힘들었지만 포기하지 않고 계속 올리다 보니 팔로워가 <span className="text-danger border-bottom border-danger">조금</span> 늘었습니다. <span className="text-danger border-bottom border-danger">그리고</span> 팀원들과 협력하는 과정에서 소통이 중요하다는 것을 느꼈습니다...
                            </p>
                        </div>
                        <div className="mt-3 p-3 rounded-4" style={{ backgroundColor: '#FFF5F5' }}>
                            <h6 className="fw-bold text-danger small"><ExclamationTriangleFill /> 주요 문제점 분석</h6>
                            <ul className="ps-3 mb-0 text-muted" style={{ fontSize: '0.75rem' }}>
                                <li className="mb-1"><span className="fw-bold">모호한 표현:</span> '이것저것', '그냥', '조금' 등 구체적이지 않은 단어 사용</li>
                                <li className="mb-1"><span className="fw-bold">수치 데이터 부재:</span> 성과를 증명할 수 있는 구체적인 숫자 부족</li>
                                <li><span className="fw-bold">단순 나열식 서술:</span> 문제 해결 과정과 결과가 명확하게 드러나지 않음</li>
                            </ul>
                        </div>
                    </Col>

                    {/* After */}
                    <Col md={6}>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h5 className="fw-bold text-success d-flex align-items-center gap-2"><CheckCircleFill /> After (AI 첨삭본)</h5>
                            <div className="d-flex align-items-center gap-2">
                                <Badge bg="success" className="fw-normal">AI 개선됨</Badge>
                                <span className="text-muted small">785자</span>
                            </div>
                        </div>
                        <div className="p-4 rounded-4 border" style={{ backgroundColor: '#F9FFF9', height: '400px', overflowY: 'auto', lineHeight: '1.8' }}>
                            <p className="small text-dark fw-bold text-success mb-3">[데이터 기반의 콘텐츠 기획으로 팔로워 200% 증가를 달성하다]</p>
                            <p className="small text-dark">
                                마케팅 직무에 필요한 분석력과 기획력을 키우기 위해 학부 시절 마케팅 동아리에서 SNS 채널 운영을 주도했습니다. 당시 단순 정보 전달 위주의 게시물로 인해 팔로워 유입이 정체된 상황이었습니다. 이를 해결하기 위해 <span className="text-success fw-bold">타겟 독자인 20대 대학생의 관심사를 분석하여</span> '카드뉴스 형태의 꿀팁 콘텐츠'로 포맷을 변경했습니다. 또한 게시물 업로드 시간을 유저 활동이 가장 활발한 오후 8시로 조정하는 전략을 실행했습니다. 그 결과, <span className="text-success fw-bold">3개월 만에 팔로워 수가 500명에서 1,500명으로 200% 증가</span>하는 성과를 거두었습니다...
                            </p>
                        </div>
                        <div className="mt-3 p-3 rounded-4" style={{ backgroundColor: '#F5FFF5' }}>
                            <h6 className="fw-bold text-success small"><LightbulbFill /> 개선 포인트 (Why this change?)</h6>
                            <ul className="ps-3 mb-0 text-muted" style={{ fontSize: '0.75rem' }}>
                                <li className="mb-1"><span className="fw-bold">두괄식 소제목 추가:</span> 핵심 성과를 요약한 소제목으로 이목 집중</li>
                                <li className="mb-1"><span className="fw-bold">STAR 기법 적용:</span> 상황-행동-결과 흐름으로 논리적 구조화</li>
                                <li><span className="fw-bold">구체적 수치 제시:</span> '200% 증가', '1,500명' 등 숫자로 신뢰도 확보</li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                {/* 하단 CTA 영역 */}
                <div className="p-4 rounded-4 text-white d-flex justify-content-between align-items-center" style={{ backgroundColor: '#1A232E' }}>
                    <div className="d-flex align-items-center gap-3">
                        <div className="bg-light bg-opacity-20 p-2 rounded-circle">
                            <FileEarmarkTextFill size={24} />
                        </div>
                        <div>
                            <p className="m-0 fw-bold">이 자소서로 모의면접을 진행해보세요!</p>
                            <p className="m-0 small text-white-50">첨삭된 자소서를 기반으로 생성된 예상 질문으로 실전처럼 연습할 수 있습니다.</p>
                        </div>
                    </div>
                    <Button variant="primary" className="fw-bold d-flex align-items-center gap-2" style={{ backgroundColor: '#1976D2' }}>
                        AI 면접 시작하기 <ArrowRight />
                    </Button>
                </div>

            </Container>
        </div>
    );
};

// 상단 아이콘 임포트 누락 방지용 가상 아이콘
const FileEarmarkTextFill = ({size}) => <i className={`bi bi-file-earmark-text-fill fs-${size}`}></i>;

export default CorrectionReport;