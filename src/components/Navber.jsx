import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Bell, PersonCircle, FileEarmarkTextFill } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';
import Logo from '../assets/Logo.png';

const NavBar = () => {
    return (
        <Navbar bg="white" expand="lg" className="border-bottom py-3 sticky-top">
            <Container>
                {/* 로고 영역 */}
                <Navbar.Brand href="/" className="d-flex align-items-center gap-2 fw-bold fs-4">
                    <img src={Logo} alt="Logo" width="80" height="40" />
                </Navbar.Brand>

                {/* 모바일 토글 버튼 */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    {/* 중앙 메뉴 영역 */}
                    <Nav className="mx-auto gap-4">
                        <Nav.Link href="/correction" className="text-dark fw-medium">자소서 첨삭</Nav.Link>
                        <Nav.Link href="/interview" className="text-dark fw-medium">AI 모의면접</Nav.Link>
                        <Nav.Link href="#" className="text-dark fw-medium">채용공고</Nav.Link>
                        <Nav.Link href="/mypage" className="text-dark fw-medium">마이페이지</Nav.Link>
                    </Nav>

                    {/* 우측 아이콘 영역 */}
                    <Nav className="align-items-center gap-3">
                        <Link variant="light" className="rounded-circle p-2 bg-secondary bg-opacity-10 border-0">
                            <Bell className="text-dark" size={20} />
                        </Link>
                        <Link variant="light" className="rounded-circle p-2 bg-secondary bg-opacity-10 border-0" to="/login">
                            <PersonCircle className="text-dark" size={20} onClick="window.location.href='/login';"/>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;