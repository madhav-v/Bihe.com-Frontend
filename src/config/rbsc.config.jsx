import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import authSvc from "../services/auth.service";
import { Navigate } from "react-router-dom";
import Loading from "../pages/error/loading";

const CheckPermission = ({ Component, accessBy }) => {
  let [userInfo, setUserInfo] = useState();
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState();

  const getLoggedInUser = async () => {
    try {
      let user = await authSvc.getLoggedInUser();
      setUserInfo(user.result);
    } catch (exception) {
      toast.error("Please Login First");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  if (error) {
    return <Navigate to={"/"} />;
  } else {
    if (loading) {
      return <><Loading /></>;
    } else if (!loading && userInfo && userInfo.role === accessBy) {
      return Component;
    } else {
      toast.warning("You can't access this page");
      return <Navigate to={"/"} />;
    }
  }
};

export default CheckPermission;
