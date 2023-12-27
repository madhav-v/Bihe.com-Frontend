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
  rejectChatRequest = async (id) => {
    try {
      const response = await this.putRequest(
        `v1/chat/reject-chat-request/${id}`,
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
  accessChat = async (userID) => {
    try {
      const response = await this.postRequest(`v1/chat`, userID, {
        auth: true,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  getConversations = async () => {
    try {
      const response = await this.getRequest("v1/chat", {
        auth: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  sendMessage = async (chatId, content) => {
    try {
      const response = await this.postRequest(
        "/v1/message",
        {
          chatId,
          content,
        },
        {
          auth: true,
        }
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  getMessages = async (chatId) => {
    try {
      const response = await this.getRequest(`/v1/message/${chatId}`, {
        auth: true,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
}

const chatSvc = new ChatService();
export default chatSvc;
