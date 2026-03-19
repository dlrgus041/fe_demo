import RegisterPage from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navber.jsx";
import CorrectionReport from "./pages/CorrectionReport.jsx";
import CorrectionInput from "./pages/CorrectionInput.jsx";
import CorrectionResult from "./pages/CorrectionResult.jsx";
import InterviewSetup from "./pages/InterviewSetup.jsx";
import InterviewLoading from "./pages/InterviewLoading.jsx";
import ChatInterviewResult from "./pages/ChatInterviewResult.jsx";
import VoiceInterview from "./pages/VoiceInterview.jsx";
import ChatInterview from "./pages/ChatInterview.jsx";
import VoiceInterviewResult from "./pages/VoiceInterviewResult.jsx";
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import MyPage from "./pages/Mypage.jsx";
import Signup from "./pages/Signup.jsx";
import LogDashboard from "./pages/LogDashboard.jsx";

const App = () => {
    return (
        <>
            {/*<Navbar />*/}
            <Routes>
                {/* 메인 홈 */}
                {/*<Route path="/" element={<Home />} />*/}

                <Route path="/" element={<LogDashboard />} />

                {/* 로그인 */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* 자소서 첨삭 관련 */}
                <Route path="/correction" element={<CorrectionInput />} />
                <Route path="/correction/report" element={<CorrectionReport />} />
                <Route path="/correction/result" element={<CorrectionResult />} />

                {/* 면접 관련 */}
                <Route path="/interview" element={<InterviewSetup />} />
                <Route path="/interview/chat" element={<ChatInterview />} />
                <Route path="/interview/chat/result" element={<ChatInterviewResult />} />
                <Route path="/interview/voice" element={<VoiceInterview />} />
                <Route path="/interview/voice/result" element={<VoiceInterviewResult />} />

                {/* 마이페이지 */}
                <Route path="/mypage" element={<MyPage />} />
            </Routes>
            {/*<Footer />*/}
        </>
    );
};

export default App;