import React from 'react';
import { Container, Row, Col, Form, Button, Badge, Card } from 'react-bootstrap';
import { Briefcase, FileEarmarkText, CloudArrowUp, Magic, TypeBold, TypeItalic, TypeUnderline, ListUl, CheckCircleFill } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';

const CorrectionInput = () => {
    return (
        <div className="bg-light min-vh-100 py-5">
            <Container style={{ maxWidth: '900px' }}>

                {/* 헤더 섹션 */}
                <div className="text-center mb-5">
                    <Badge bg="primary" className="bg-opacity-10 text-primary px-3 py-2 mb-3 fw-bold" style={{ fontSize: '0.75rem' }}>
                        BETA <span className="ms-2 fw-normal text-muted">AI 자소서 첨삭 v2.0</span>
                    </Badge>
                    <h1 className="fw-bold mb-3" style={{ letterSpacing: '-0.02em' }}>AI 자소서 첨삭</h1>
                    <p className="text-muted small">
                        지원하려는 직무 공고와 작성 중인 자기소개서를 입력해주세요.<br />
                        AI가 문맥을 분석하여 전문적인 첨삭 리포트를 생성합니다.
                    </p>
                </div>

                {/* 입력 폼 영역 */}
                <div className="d-flex flex-column gap-5">

                    {/* 1. 채용 공고 입력 섹션 */}
                    <section>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="fw-bold d-flex align-items-center gap-2 m-0">
                                <Briefcase className="text-primary" /> 채용 공고 (선택 사항)
                            </h5>
                            <Button variant="link" className="text-primary text-decoration-none small p-0" style={{ fontSize: '0.85rem' }}>
                                🔗 공고 불러오기
                            </Button>
                        </div>
                        <Form.Control
                            as="textarea"
                            placeholder="직무 설명(JD)이나 주요 자격 요건을 복사해서 붙여넣으세요. 공고 내용이 포함되면 직무에 더 적합한 맞춤형 첨삭을 받을 수 있습니다."
                            className="border-0 shadow-sm p-4 rounded-4"
                            style={{ height: '150px', backgroundColor: '#FDFDFD', resize: 'none', fontSize: '0.9rem' }}
                        />
                    </section>

                    {/* 2. 자기소개서 본문 입력 섹션 */}
                    <section>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="fw-bold d-flex align-items-center gap-2 m-0">
                                <FileEarmarkText className="text-primary" /> 자기소개서 본문
                            </h5>
                            <div className="d-flex align-items-center gap-3">
                                <span className="text-muted" style={{ fontSize: '0.85rem' }}>0자 / 2,000자</span>
                                <Button variant="outline-secondary" size="sm" className="bg-white d-flex align-items-center gap-2 px-3 py-2 rounded-3 border-secondary border-opacity-25 shadow-sm">
                                    <CloudArrowUp /> 파일 업로드
                                </Button>
                            </div>
                        </div>

                        <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
                            {/* 에디터 툴바 */}
                            <Card.Header className="bg-white border-bottom border-light py-2 px-3">
                                <div className="d-flex gap-2">
                                    <Button variant="light" size="sm" className="p-2 border-0"><TypeBold size={18} /></Button>
                                    <Button variant="light" size="sm" className="p-2 border-0"><TypeItalic size={18} /></Button>
                                    <Button variant="light" size="sm" className="p-2 border-0"><TypeUnderline size={18} /></Button>
                                    <div className="vr mx-2 my-1 text-secondary opacity-25"></div>
                                    <Button variant="light" size="sm" className="p-2 border-0"><ListUl size={18} /></Button>
                                </div>
                            </Card.Header>
                            {/* 에디터 텍스트 영역 */}
                            <Card.Body className="p-0">
                                <Form.Control
                                    as="textarea"
                                    placeholder="작성하신 자기소개서 내용을 이곳에 입력해주세요."
                                    className="border-0 p-4"
                                    style={{ height: '350px', backgroundColor: '#FDFDFD', resize: 'none', fontSize: '0.95rem', lineHeight: '1.8' }}
                                />
                            </Card.Body>
                        </Card>
                    </section>

                </div>

                {/* 하단 푸터 액션 바 */}
                <div className="d-flex justify-content-between align-items-center mt-5 pt-4 border-top border-light">
                    <div className="d-flex align-items-center gap-2 text-muted small">
                        <CheckCircleFill className="text-success" />
                        <span>최종 저장: 방금 전</span>
                        <span className="ms-2 opacity-50">• 내용은 브라우저에 자동 저장됩니다.</span>
                    </div>
                    <div className="d-flex gap-2">
                        <Button variant="outline-secondary" className="px-4 py-2 border-secondary border-opacity-25 bg-white fw-medium">
                            임시 저장
                        </Button>
                        <Link to="/correction/report" className="btn btn-primary px-4 py-2 fw-bold d-flex align-items-center gap-2" style={{ backgroundColor: '#1976D2' }}>
                            <Magic /> AI 첨삭 받기
                        </Link>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default CorrectionInput;