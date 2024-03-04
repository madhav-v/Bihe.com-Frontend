import axiosInstance from "../config/axios.config";
class AuthService {
  login = async (credentials) => {
    try {
      let response = await axiosInstance.post("/v1/auth/login", credentials);
      return response;
    } catch (error) {
      throw error;
    }
  };

  register = async (data) => {
    try {
      let response = await axiosInstance.post("/v1/auth/register", data, {});
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  getUserByToken = async (token) => {
    try {
      let response = await axiosInstance.post(
        "/v1/auth/activate/" + token,
        {},
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response;
    } catch (exception) {
      console.log(
        "🚀 ~ file: auth.service.js:37 ~ AuthService ~ getUserByToken= ~ exception:",
        exception
      );

      throw exception;
    }
  };

  getLoggedInUser = async () => {
    try {
      let token = localStorage.getItem("token");
      if (!token) {
        throw "Token not set..";
      }
      let userInfo = await axiosInstance.get("/v1/auth/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      return userInfo;
    } catch (error) {
      throw error;
    }
  };
  getUserWithProfile = async () => {
    try {
      let token = localStorage.getItem("token");
      if (!token) {
        throw "Token not set..";
      }
      let userInfo = await axiosInstance.get("/v1/auth/me/profile", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      return userInfo;
    } catch (error) {
      throw error;
    }
  };

  forgetPassword = async (email) => {
    try {
      const response = await axiosInstance.post(
        "/v1/auth/forget-password",
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  resetPassword = async (userEmail, password) => {
    try {
      const response = await axiosInstance.post(
        "/v1/auth/password-reset",
        { email: userEmail, password },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status) {
        return response.data;
      } else {
        throw new Error(response.data.msg);
      }
    } catch (error) {
      throw error;
    }
  };
  getUserProfileById = async (userId) => {
    try {
      let token = localStorage.getItem("token");
      if (!token) {
        throw "Token not set..";
      }
      let response = await axiosInstance.get(`/v1/auth/user/${userId}`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
}
const authSvc = new AuthService();
export default authSvc;
