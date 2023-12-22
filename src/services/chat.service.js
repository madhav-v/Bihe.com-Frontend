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
  getConnectionRequests = async () => {
    try {
      const response = await this.getRequest("v1/chat/connection-requests", {
        auth: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  acceptChatRequest = async (id) => {
    try {
      const response = await this.putRequest(
        `v1/chat/accept-request/${id}`,
        {},
        {
          auth: true,
        }
      );
      return response;
    } catch (exception) {
      throw exception;
    }
  };
}

const chatSvc = new ChatService();
export default chatSvc;
