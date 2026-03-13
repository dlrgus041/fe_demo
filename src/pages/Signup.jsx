import React from 'react';
import { Container, Row, Col, Form, Button, ProgressBar, InputGroup } from 'react-bootstrap';
import { Google, Linkedin, EyeSlash } from 'react-bootstrap-icons'; // 아이콘 패키지 설치 필요

const RegisterPage = () => {
    return (
        <Container fluid className="vh-100 p-0">
            <Row className="g-0 h-100">
                {/* 왼쪽: 홍보 섹션 */}
                <Col md={5} className="d-none d-md-flex flex-column justify-content-between p-5"
                     style={{ backgroundColor: '#E3F2FD', background: 'linear-gradient(135deg, #E3F2FD 0%, #FFFFFF 100%)' }}>
                    <div>
                        <h4 className="fw-bold text-primary mb-5">SyncTalk</h4>
                        <div className="mt-5">
                            <h1 className="display-5 fw-bold mb-4">AI와 함께 면접 스킬을<br />마스터하세요.</h1>
                            <p className="text-muted fs-5">
                                맞춤형 자기소개서와 실전 같은 모의 면접으로 꿈의<br />
                                직장에 합격한 10,000명 이상의 지원자들과 함께하세요.
                            </p>
                        </div>
                    </div>

                    {/* 리뷰 카드 */}
                    <div className="bg-white p-4 rounded-4 shadow-sm mb-4" style={{ maxWidth: '400px' }}>
                        <div className="text-warning mb-2">★★★★★</div>
                        <p className="small text-secondary mb-3">
                            "SyncTalk 덕분에 PM 직무 면접 답변을 완벽하게 다듬을 수 있었어요. 면접장에 들어갈 때 자신감이 훨씬 넘쳤습니다."
                        </p>
                        <div className="d-flex align-items-center">
                            <div className="bg-secondary rounded-circle me-2" style={{ width: '40px', height: '40px' }}></div>
                            <div>
                                <div className="fw-bold small">김지수</div>
                                <div className="text-muted" style={{ fontSize: '0.75rem' }}>TechCorp PM</div>
                            </div>
                        </div>
                    </div>
                </Col>

                {/* 오른쪽: 회원가입 폼 섹션 */}
                <Col md={7} className="bg-light d-flex align-items-center justify-content-center p-5">
                    <div style={{ maxWidth: '450px', width: '100%' }}>
                        <div className="mb-4">
                            <h2 className="fw-bold">계정 만들기</h2>
                            <p className="text-muted">꿈의 직장으로 가는 여정을 오늘 시작하세요.</p>
                        </div>

                        {/*<div className="mb-4">*/}
                        {/*    <div className="d-flex justify-content-between small mb-1">*/}
                        {/*        <span>1단계 / 2단계</span>*/}
                        {/*        <span className="text-muted">계정 정보</span>*/}
                        {/*    </div>*/}
                        {/*    <ProgressBar now={50} style={{ height: '6px' }} />*/}
                        {/*</div>*/}

                        <Form>
                            <Form.Group className="mb-2">
                                <Form.Label className="small fw-semibold">이름</Form.Label>
                                <Form.Control type="text" placeholder="홍길동" />
                            </Form.Group>

                            <Form.Group className="mb-2">
                                <Form.Label className="small fw-semibold">닉네임</Form.Label>
                                <Form.Control type="text" placeholder="별명" />
                            </Form.Group>

                            <Form.Group className="mb-2">
                                <Form.Label className="small fw-semibold">이메일</Form.Label>
                                <Form.Control type="email" placeholder="로그인 시 ID로 사용됩니다." />
                            </Form.Group>

                            <Form.Group className="mb-2">
                                <Form.Label className="small fw-semibold">비밀번호</Form.Label>
                                <InputGroup>
                                    <Form.Control type="password" placeholder="최소 8자 이상" />
                                    <InputGroup.Text className="bg-white border-start-0">
                                        <EyeSlash className="text-muted" />
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-2">
                                <Form.Label className="small fw-semibold">비밀번호 확인</Form.Label>
                                <InputGroup>
                                    <Form.Control type="password" placeholder="입력한 비밀번호와 일치해야 합니다." />
                                    <InputGroup.Text className="bg-white border-start-0">
                                        <EyeSlash className="text-muted" />
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                            {/*<div className="text-center my-4 position-relative">*/}
                            {/*    <hr />*/}
                            {/*    <span className="position-absolute top-50 start-50 translate-middle bg-light px-2 text-muted small">커리어 선호도</span>*/}
                            {/*</div>*/}

                            <Form.Group className="mb-2">
                                <Form.Label className="small fw-semibold">관심직무</Form.Label>
                                <Form.Select className="text-muted">
                                    <option>직무를 선택하세요...</option>
                                </Form.Select>
                            </Form.Group>

                            {/*<div className="mb-4">*/}
                            {/*    <Form.Label className="small fw-semibold">희망 산업군</Form.Label>*/}
                            {/*    <div className="d-flex gap-2">*/}
                            {/*        {['IT/기술', '금융', '헬스케어', '교육'].map((item) => (*/}
                            {/*            <Button key={item} variant="outline-secondary" size="sm" className="rounded-pill px-3">*/}
                            {/*                {item}*/}
                            {/*            </Button>*/}
                            {/*        ))}*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <Form.Group className="mb-4" controlId="terms">
                                <Form.Check type="checkbox" label={<span className="small"><span className="text-primary text-decoration-underline">이용약관</span> 및 <span className="text-primary text-decoration-underline">개인정보 처리방침</span>에 동의합니다.</span>} />
                            </Form.Group>

                            <Button variant="primary" className="w-100 py-2 mb-4 fw-bold" style={{ backgroundColor: '#1976D2' }}>
                                회원가입 완료
                            </Button>

                            {/*<div className="text-center mb-4 position-relative">*/}
                            {/*    <hr />*/}
                            {/*    <span className="position-absolute top-50 start-50 translate-middle bg-light px-2 text-muted small">또는 소셜 계정으로 시작</span>*/}
                            {/*</div>*/}

                            {/*<Row className="g-2">*/}
                            {/*    <Col>*/}
                            {/*        <Button variant="outline-secondary" className="w-100 d-flex align-items-center justify-content-center gap-2">*/}
                            {/*            <Google /> Google*/}
                            {/*        </Button>*/}
                            {/*    </Col>*/}
                            {/*    <Col>*/}
                            {/*        <Button variant="outline-secondary" className="w-100 d-flex align-items-center justify-content-center gap-2">*/}
                            {/*            <Linkedin className="text-info" /> LinkedIn*/}
                            {/*        </Button>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}

                            <div className="text-center mt-4 small">
                                이미 계정이 있으신가요? <a href="/login" className="text-primary fw-bold text-decoration-none">로그인</a>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterPage;