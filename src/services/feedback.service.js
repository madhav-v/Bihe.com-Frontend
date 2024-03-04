import HttpService from "./http.service";

class FeedBackService extends HttpService {
  sendFeedback = async (data) => {
    try {
      const response = await this.postRequest(`v1/feedback/send`, data, {
        auth: true,
      });
      return response;
    } catch (exception) {
      console.log(exception);
      throw exception;
    }
  };
}

const feedBackSvc = new FeedBackService();
export default feedBackSvc;
