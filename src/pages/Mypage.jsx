import React from 'react';
import { Container, Row, Col, Card, Button, Nav, Image, Badge, Dropdown, Form } from 'react-bootstrap';
import {
    Grid,
    FileEarmarkText,
    ChatLeftDots,
    CreditCard,
    Gear,
    BoxArrowRight,
    PlusLg,
    Funnel,
    FileEarmarkPdf,
    FileEarmarkWord,
    Download,
    Pencil,
    Trash3,
    CheckCircleFill,
    LightningChargeFill
} from 'react-bootstrap-icons';

const MyPage = () => {
    const stPrimary = '#1976D2'; // SyncTalk 메인 블루

    const resumeData = [
        { id: 1, name: 'Software_Engineer_Resum...', size: '1.2 MB', date: '2023. 10. 26', type: 'PDF' },
        { id: 2, name: 'Frontend_Dev_Portfolio_2...', size: '4.5 MB', date: '2023. 10. 20', type: 'PDF' },
        { id: 3, name: 'Marketing_Manager_Resu...', size: '840 KB', date: '2023. 10. 15', type: 'DOCX' },
        { id: 4, name: 'Generic_Resume_Template...', size: '950 KB', date: '2023. 09. 30', type: 'PDF' },
    ];

    return (
        <div className="bg-light min-vh-100 font-korean">
            <Container fluid className="p-0">
                <Row className="g-0">

                    {/* --- 좌측 사이드바 --- */}
                    <Col md={3} lg={2} className="bg-white border-end min-vh-100 d-none d-md-block position-fixed">
                        <div className="p-4">
                            <div className="d-flex align-items-center gap-2 mb-5 px-2">
                                <div className="bg-primary rounded-3 p-1" style={{ backgroundColor: stPrimary }}>
                                    <ChatLeftDots color="white" size={20} />
                                </div>
                                <h5 className="fw-bold m-0" style={{ color: stPrimary }}>SyncTalk</h5>
                            </div>

                            <Nav className="flex-column gap-2">
                                <Nav.Link href="#" className="d-flex align-items-center gap-3 py-2 px-3 rounded-3 text-muted">
                                    <Grid size={18} /> <span className="small fw-bold">대시보드</span>
                                </Nav.Link>
                                <Nav.Link href="#" className="d-flex align-items-center gap-3 py-2 px-3 rounded-3 bg-primary bg-opacity-10 text-primary">
                                    <FileEarmarkText size={18} /> <span className="small fw-bold">내 자소서/이력서</span>
                                </Nav.Link>
                                <Nav.Link href="#" className="d-flex align-items-center gap-3 py-2 px-3 rounded-3 text-muted">
                                    <ChatLeftDots size={18} /> <span className="small fw-bold">면접 결과</span>
                                </Nav.Link>
                                <Nav.Link href="#" className="d-flex align-items-center gap-3 py-2 px-3 rounded-3 text-muted">
                                    <CreditCard size={18} /> <span className="small fw-bold">구독 관리</span>
                                </Nav.Link>
                                <Nav.Link href="#" className="d-flex align-items-center gap-3 py-2 px-3 rounded-3 text-muted">
                                    <Gear size={18} /> <span className="small fw-bold">프로필 설정</span>
                                </Nav.Link>
                            </Nav>
                        </div>

                        <div className="position-absolute bottom-0 w-100 p-3 border-top bg-white">
                            <div className="d-flex align-items-center justify-content-between p-2 rounded-3 border bg-light">
                                <div className="d-flex align-items-center gap-2">
                                    <Image src="https://via.placeholder.com/32" roundedCircle />
                                    <div style={{ lineHeight: '1.2' }}>
                                        <div className="fw-bold" style={{ fontSize: '0.75rem' }}>김철수</div>
                                        <div className="text-muted" style={{ fontSize: '0.65rem' }}>Pro 멤버</div>
                                    </div>
                                </div>
                                <BoxArrowRight className="text-muted" size={16} />
                            </div>
                        </div>
                    </Col>

                    {/* --- 우측 메인 콘텐츠 영역 --- */}
                    <Col md={{ span: 9, offset: 3 }} lg={{ span: 10, offset: 2 }} className="p-4 p-lg-5">

                        {/* 상단 타이틀 바 */}
                        <div className="d-flex justify-content-between align-items-start mb-4">
                            <div>
                                <h3 className="fw-bold mb-1">내 자소서/이력서 📄</h3>
                                <p className="text-muted small">AI와 함께 완벽한 지원서를 작성하고 관리하세요.</p>
                            </div>
                            <div className="d-flex gap-2">
                                <Button variant="light" className="border bg-white d-flex align-items-center gap-2 px-3 rounded-3 shadow-sm small">
                                    <Funnel size={14} /> 필터
                                </Button>
                                <Button variant="primary" className="d-flex align-items-center gap-2 px-3 rounded-3 shadow-sm border-0 small fw-bold" style={{ backgroundColor: stPrimary }}>
                                    <PlusLg /> 새 문서 작성
                                </Button>
                            </div>
                        </div>

                        {/* 통계 요약 카드 */}
                        <Row className="g-4 mb-5">
                            <Col md={4}>
                                <Card className="border-0 shadow-sm rounded-4 p-4 d-flex flex-row align-items-center justify-content-between h-100">
                                    <div>
                                        <div className="text-muted small fw-bold mb-1">AI 자소서</div>
                                        <div className="h3 fw-bold m-0">8 <Badge bg="success" className="bg-opacity-10 text-success fw-normal align-middle ms-1" style={{ fontSize: '0.7rem' }}>New +2</Badge></div>
                                    </div>
                                    <div className="bg-light rounded-circle p-2 border">
                                        <Pencil className="text-primary" size={20} />
                                    </div>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="border-0 shadow-sm rounded-4 p-4 d-flex flex-row align-items-center justify-content-between h-100">
                                    <div>
                                        <div className="text-muted small fw-bold mb-1">저장된 이력서</div>
                                        <div className="h3 fw-bold m-0">4</div>
                                    </div>
                                    <div className="bg-light rounded-circle p-2 border">
                                        <FileEarmarkText className="text-warning" size={20} />
                                    </div>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="border-0 shadow-sm rounded-4 p-4 d-flex flex-row align-items-center justify-content-between h-100">
                                    <div>
                                        <div className="text-muted small fw-bold mb-1">작성 완료</div>
                                        <div className="h3 fw-bold m-0">12</div>
                                    </div>
                                    <div className="bg-success bg-opacity-10 rounded-circle p-2">
                                        <CheckCircleFill className="text-success" size={20} />
                                    </div>
                                </Card>
                            </Col>
                        </Row>

                        {/* 필터 탭 및 정렬 */}
                        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
                            <Nav variant="pills" className="custom-tabs gap-3">
                                <Nav.Item>
                                    <Nav.Link href="#" className="text-muted small px-0 d-flex align-items-center gap-2">
                                        <LightningChargeFill size={14} /> AI Cover Letters <span className="opacity-50">8</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#" className="active-tab small px-0 d-flex align-items-center gap-2 fw-bold text-primary">
                                        <FileEarmarkText size={14} /> Resumes <span className="opacity-50">4</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div className="text-muted small d-flex align-items-center gap-2">
                                ● 최신순
                            </div>
                        </div>

                        {/* 문서 그리드 리스트 */}
                        <Row className="g-4">
                            {resumeData.map((item) => (
                                <Col xl={3} lg={4} md={6} key={item.id}>
                                    <Card className="border-0 shadow-sm rounded-4 h-100 card-hover transition">
                                        <Card.Body className="p-4 text-center">
                                            <div className="text-end mb-2">
                                                <Badge bg="light" className="text-muted fw-normal border" style={{ fontSize: '0.6rem' }}>{item.type}</Badge>
                                            </div>
                                            <div className="my-4 py-2">
                                                {item.type === 'PDF' ? (
                                                    <FileEarmarkPdf className="text-muted opacity-25" size={60} />
                                                ) : (
                                                    <FileEarmarkWord className="text-muted opacity-25" size={60} />
                                                )}
                                            </div>
                                            <h6 className="fw-bold mb-1 text-truncate px-2">{item.name}</h6>
                                            <div className="text-muted mb-3" style={{ fontSize: '0.75rem' }}>{item.size}</div>
                                            <div className="text-muted small opacity-75 mb-4">
                                                <Gear size={12} className="me-1" /> Last Updated: {item.date}
                                            </div>
                                            <div className="d-flex justify-content-center gap-2 border-top pt-3">
                                                <Button variant="link" size="sm" className="text-muted text-decoration-none p-0 d-flex align-items-center gap-1">
                                                    <Download size={14} /> Download
                                                </Button>
                                                <div className="vr mx-1 opacity-25"></div>
                                                <Button variant="link" size="sm" className="text-muted text-decoration-none p-0 d-flex align-items-center gap-1">
                                                    <Pencil size={14} /> Edit
                                                </Button>
                                                <div className="vr mx-1 opacity-25"></div>
                                                <Button variant="link" size="sm" className="text-danger text-decoration-none p-0">
                                                    <Trash3 size={14} />
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}

                            {/* 업로드 플레이스홀더 카드 */}
                            <Col xl={3} lg={4} md={6}>
                                <Card className="border-0 shadow-sm rounded-4 h-100 border-dashed bg-transparent d-flex align-items-center justify-content-center p-4">
                                    <div className="text-center py-4">
                                        <div className="bg-white rounded-circle shadow-sm p-3 mb-3 mx-auto" style={{ width: 'fit-content' }}>
                                            <PlusLg className="text-muted" size={24} />
                                        </div>
                                        <h6 className="fw-bold mb-1">Upload New Resume</h6>
                                        <p className="text-muted small mb-0 px-3">Drag & drop or click to upload PDF/Word</p>
                                    </div>
                                </Card>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>

            <style>{`
        .font-korean { font-family: 'Pretendard', 'Noto Sans KR', sans-serif; }
        .border-dashed { border: 2px dashed #dee2e6 !important; }
        .card-hover:hover { transform: translateY(-5px); transition: all 0.3s ease; }
        .transition { transition: all 0.3s ease; }
        .active-tab { border-bottom: 2px solid ${stPrimary}; border-radius: 0 !important; }
        .nav-link:hover { color: ${stPrimary} !important; }
      `}</style>
        </div>
    );
};

export default MyPage;