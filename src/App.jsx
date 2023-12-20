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
// import ChatPanel from "./pages/chat/index.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLoggedInUser());
    dispatch(setLoggedInUser());
    dispatch(getLoggedInUserWithProfile());
  }, []);
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
          <Route path="/chat" element={<ChatLayout />}>
            <Route index element={<Chat />} />
            <Route path="conversation/:id" element={<ChatPanel />} />
          </Route>
          {/* </Route> */}
          <Route path="/connection" element={<ConnectionLayout />} />
          <Route path="/notification" element={<NotificationSection />} />
          <Route path="/user" element={<Dashboard />}>
            <Route path="" element={<DashboardSection />} />
            {/* <Route path="search" element={<SearchResultSection />} /> */}
            {/* <Route path="profile" element={<UserProfileSection />} /> */}
          </Route>
          <Route
            path="/preferrenceEducation"
            element={<EducationPreferrence />}
          />
          <Route
            path="/preferrenceOccupation"
            element={<OccupationPreferrence />}
          />
          <Route path="/preferrenceIncome" element={<IncomePreferrence />} />
          <Route path="/match/:id" element={<MatchProfile />} />
          <Route
            path="/profile/info"
            element={<CheckPermission accessBy={"user"} Component={<Form />} />}
          />
          <Route
            path="/profile"
            element={
              <CheckPermission accessBy={"user"} Component={<ViewProfile />} />
            }
          />
          <Route
            path="/editProfile"
            element={
              <CheckPermission accessBy={"user"} Component={<EditProfile />} />
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ChatProvider>
    </>
  );
}

export default App;
