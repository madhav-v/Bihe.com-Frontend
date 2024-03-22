import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import authSvc from "../services/auth.service";
import { Navigate } from "react-router-dom";
import Loading from "../pages/error/loading";

const CheckPermission = ({ Component, accessBy }) => {
  let [userInfo, setUserInfo] = useState();
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);

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
  useEffect(() => {
    if (!loading && userInfo) {
      console.log("User Info:", userInfo);
      console.log("Access By:", accessBy);
      if (userInfo.role === accessBy) {
        console.log("Access Granted");
      } else {
        console.log("Access Denied");
        // toast.warning("You can't access this page");
      }
    }
  }, [loading, userInfo, accessBy]);
  if (error) {
    return <Navigate to={"/"} />;
  } else {
    if (loading) {
      return (
        <>
          <Loading />
        </>
      );
    } else if (!loading && userInfo && userInfo.role === accessBy) {
      return Component;
    } else {
      toast.warning("You can't access this page");
      return <Navigate to={"/"} />;
    }
  }
};

export default CheckPermission;
