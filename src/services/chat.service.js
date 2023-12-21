import HttpService from "./http.service";

class ChatService extends HttpService {
  sendChatRequest = async (data) => {
    try {
      const response = await this.postRequest(`v1/chat/send-request`, data, {
        auth: true,
      });
      return response;
    } catch (exception) {
      console.log(exception);
      throw exception;
    }
  };
}

const chatSvc = new ChatService();
export default chatSvc;
