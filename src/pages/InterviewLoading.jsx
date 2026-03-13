import React, { useState, useEffect } from 'react';
import { Container, ProgressBar, Card } from 'react-bootstrap';
import { LightbulbFill, Cpu } from 'react-bootstrap-icons';

const InterviewLoading = () => {
    const [progress, setProgress] = useState(0);
    const stPrimary = '#1976D2';

    // 로딩 애니메이션 시뮬레이션
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) return 100;
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 78); // 이미지와 동일하게 78%에서 일단 멈춤
            });
        }, 500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center"
             style={{
                 backgroundColor: '#f8f9fa',
                 backgroundImage: `radial-gradient(#dee2e6 1px, transparent 1px)`,
                 backgroundSize: '30px 30px'
             }}>
            <Container style={{ maxWidth: '600px' }} className="text-center">

                {/* 중앙 로딩 아이콘 애니메이션 */}
                <div className="position-relative d-inline-block mb-5">
                    <div className="pulse-ring"></div>
                    <div className="bg-white shadow-lg rounded-circle d-flex align-items-center justify-content-center position-relative"
                         style={{ width: '120px', height: '120px', zIndex: 2 }}>
                        <Cpu size={50} style={{ color: stPrimary }} />
                    </div>
                </div>

                {/* 텍스트 정보 */}
                <h2 className="fw-bold mb-3">면접 질문 생성 중</h2>
                <p className="text-muted mb-5">
                    채용 공고 분석 결과를 바탕으로<br />
                    맞춤형 면접 질문을 생성 중입니다...
                </p>

                {/* 프로그레스 바 영역 */}
                <div className="mb-5 mx-auto" style={{ maxWidth: '400px' }}>
                    <div className="d-flex justify-content-between mb-2 px-1">
                        <span className="small text-muted fw-bold">분석 중...</span>
                        <span className="small fw-bold" style={{ color: stPrimary }}>{Math.round(progress)}%</span>
                    </div>
                    <ProgressBar
                        now={progress}
                        style={{ height: '8px', borderRadius: '4px', backgroundColor: '#e9ecef' }}
                        variant="primary"
                    />
                </div>

                {/* 하단 꿀팁 카드 */}
                <Card className="border-0 shadow-sm rounded-4 text-start overflow-hidden">
                    <Card.Body className="p-4 d-flex align-items-start gap-3">
                        <div className="p-2 rounded-circle" style={{ backgroundColor: '#e3f2fd' }}>
                            <LightbulbFill style={{ color: stPrimary }} size={20} />
                        </div>
                        <div>
                            <h6 className="fw-bold mb-1 text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: stPrimary }}>
                                INTERVIEW PRO-TIP
                            </h6>
                            <p className="text-muted m-0 small" style={{ lineHeight: '1.6' }}>
                                답변 시 구체적인 성과 수치(KPI)를 언급하면 신뢰도가 크게 높아집니다.
                                "열심히 했다"보다는 <span className="fw-bold text-dark">"매출을 20% 증대시켰다"</span>라고 표현해보세요!
                            </p>
                        </div>
                    </Card.Body>
                </Card>

            </Container>

            {/* 애니메이션 CSS */}
            <style>{`
        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          background-color: ${stPrimary};
          border-radius: 50%;
          opacity: 0.2;
          animation: pulse 2s infinite;
          z-index: 1;
        }

        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0; }
        }
      `}</style>
        </div>
    );
};

export default InterviewLoading;