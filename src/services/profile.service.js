import HttpService from "./http.service";
class ProfileService extends HttpService {
  createProfile = async (data) => {
    try {
      let response = await this.postRequest("/v1/profile", data, {
        auth: true,
        file: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  getProfileById = async (id) => {
    try {
      let response = await this.getRequest(`/v1/profile/${id}`, {
        auth: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  updateProfile = async (details, id) => {
    try {
      let response = await this.putRequest("/v1/profile/" + id, details, {
        auth: true,
        file: true,
      });
      return response;
    } catch {
      throw exception;
    }
  };
  createBio = async (bio) => {
    try {
      let response = await this.postRequest("/v1/profile/createBio", bio, {
        auth: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  firstEdit = async (data) => {
    try {
      let response = await this.postRequest("/v1/profile/firstEdit", data, {
        auth: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  secondEdit = async (data) => {
    try {
      let response = await this.postRequest("/v1/profile/secondEdit", data, {
        auth: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  thirdEdit = async (data) => {
    try {
      let response = await this.postRequest("/v1/profile/thirdEdit", data, {
        auth: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  addPhoto = async (data) => {
    try {
      let response = await this.postRequest("/v1/profile/photo", data, {
        auth: true,
        file: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  addHobbies = async (data) => {
    try {
      let response = await this.postRequest("/v1/profile/hobbies", data, {
        auth: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  partnerMessage = async (data) => {
    try {
      let response = await this.postRequest(
        "/v1/profile/partnerMessage",
        data,
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

const profileSvc = new ProfileService();
export default profileSvc;
