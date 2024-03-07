import HttpService from "./http.service";

class ReportService extends HttpService {
  sendReport = async (data) => {
    try {
      const response = await this.postRequest(`v1/report/send`, data, {
        auth: true,
      });
      return response;
    } catch (exception) {
      console.log(exception);
      throw exception;
    }
  };
}

const reportSvc = new ReportService();
export default reportSvc;
