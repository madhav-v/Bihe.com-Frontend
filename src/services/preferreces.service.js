import axiosInstance from "../config/axios.config";
import HttpService from "./http.service";

class PreferrenceService extends HttpService {
  getByEducation = async () => {
    try {
      let token = localStorage.getItem("token");
      if (!token) {
        throw "Token not set..";
      }
      let userInfo = await axiosInstance.get("/v1/preferrence/education", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      return userInfo;
    } catch (exception) {
      throw exception;
    }
  };
  getByOccupation = async () => {
    try {
      let token = localStorage.getItem("token");
      if (!token) {
        throw "Token not set..";
      }
      let userInfo = await axiosInstance.get("/v1/preferrence/occupation", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      return userInfo;
    } catch (exception) {
      throw exception;
    }
  };
  getByIncome = async () => {
    try {
      let token = localStorage.getItem("token");
      if (!token) {
        throw "Token not set..";
      }
      let userInfo = await axiosInstance.get("/v1/preferrence/income", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      return userInfo;
    } catch (exception) {
      throw exception;
    }
  };
  getMatchesByAlgorithm = async () => {
    try {
      let token = localStorage.getItem("token");
      if (!token) {
        throw "Token not set..";
      }
      let userInfo = await axiosInstance.get("/v1/preferrence/weightedScore", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      return userInfo;
    } catch (exception) {
      throw exception;
    }
  };
}

const preferrenceSvc = new PreferrenceService();
export default preferrenceSvc;
