import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ResetPassword from "./pages/ResetPassword/resetPassword";
import SetPassword from "./pages/ResetPassword/setPassword";
import UserDashboard from "./pages/UserDashboard";
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
import ChatPage from "./pages/chat/index.jsx";
import FourthForm from "./pages/UserForm/fourthform.jsx";
import FirstForm from "./pages/UserForm/firstform.jsx";
import ViewProfile from "./pages/Profle/ViewProfile.jsx";
import Chat from "./components/Chat/index.jsx";
import EditProfile from "./pages/Profle/EditProfile/EditProfile.jsx";
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
          <Route path="/chat" element={<Chat />} />
          <Route
            path="/user"
            element={
              <CheckPermission
                accessBy={"user"}
                Component={<UserDashboard />}
              />
            }
          />
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
