import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ResetPassword from "./pages/ResetPassword/resetPassword";
import SetPassword from "./pages/ResetPassword/setPassword";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import TermsAndConditions from "./pages/Terms and Condition";
import ErrorPage from "./pages/error/index.jsx";
import Form from "./pages/UserForm";
import CheckPermission from "./config/rbsc.config";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getLoggedInUser,
  getLoggedInUserWithProfile,
  setLoggedInUser,
} from "./reducers/user.reducer";
import FormEdit from "./pages/UserForm/edit";
import ChatProvider from "./Context/chatProvider.jsx";
import FourthForm from "./pages/UserForm/fourthform.jsx";
import FirstForm from "./pages/UserForm/firstform.jsx";
import ViewProfile from "./pages/Profle/ViewProfile.jsx";
import Chat from "./components/Chat/index.jsx";
import EditProfile from "./pages/Profle/EditProfile/EditProfile.jsx";
import ChatPanel from "./components/Chat/comp/ChatPanel.jsx";
import ChatLayout from "./components/Chat/Layout/index.jsx";
import ConnectionLayout from "./pages/Connections/index.jsx";
import NotificationSection from "./pages/Notifications/index.jsx";
import Dashboard from "./pages/Dashboard/dashboard.jsx";
import DashboardSection from "./pages/Dashboard/dashboardsection.jsx";
import EducationPreferrence from "./pages/preferrencesMatches/educationPreferrences.jsx";
import OccupationPreferrence from "./pages/preferrencesMatches/occupationPreferrences.jsx";
import IncomePreferrence from "./pages/preferrencesMatches/incomePreferrence.jsx";
import MatchProfile from "./pages/Match Profile/index.jsx";
import InnerLayout from "./pages/HomePage/Layout/innerLayout.jsx";
import SuperAdminSidebar from "./pages/admin/components/sidebar.jsx";
import FeedBack from "./pages/admin/components/feedback.jsx";
import Users from "./pages/admin/components/users.jsx";
import Report from "./pages/admin/components/report.jsx";
// import ChatPanel from "./pages/chat/index.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedInUser());
    dispatch(setLoggedInUser());
    dispatch(getLoggedInUserWithProfile());
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      <ChatProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgetPassword" element={<ResetPassword />} />
          <Route path="/setPassword/:token" element={<SetPassword />} />
          <Route path="/terms" element={<TermsAndConditions />} />

          <Route
            path="/admin"
            element={
              <CheckPermission
                accessBy={"admin"}
                Component={<SuperAdminSidebar />}
              />
            }
          >
            {/* <Route index element={<SuperAdminSidebar />} /> */}
            <Route path="feedback" element={<FeedBack />} />
            <Route path="user" element={<Users />} />
            <Route path="report" element={<Report />} />
          </Route>
          <Route
            path="/user"
            element={
              <CheckPermission accessBy={"user"} Component={<InnerLayout />} />
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="chat" element={<ChatLayout />}>
              <Route index element={<Chat />} />
              <Route path="conversation/:id" element={<ChatPanel />} />
            </Route>
            <Route path="connection" element={<ConnectionLayout />} />
            <Route path="notification" element={<NotificationSection />} />
            <Route
              path="preferrenceEducation"
              element={<EducationPreferrence />}
            />
            <Route
              path="preferrenceOccupation"
              element={<OccupationPreferrence />}
            />
            <Route path="preferrenceIncome" element={<IncomePreferrence />} />
            <Route path="match/:id" element={<MatchProfile />} />
            <Route path="profile/info" element={<Form />} />
            <Route path="profile" element={<ViewProfile />} />
            <Route path="editProfile" element={<EditProfile />} />
            {/* <Route path="admin" element={<SuperAdminSidebar />} /> */}
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ChatProvider>
    </>
  );
}

export default App;
