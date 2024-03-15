import axios from "axios";

const ApiService = {
  removeHeader() {
    axios.defaults.headers.common = {};
  },
  setHeader() {
    if (localStorage.getItem("token")) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
    }
  },
  get(resource) {
    return axios.get(resource);
  },

  post(resource, data) {
    return axios.post(resource, data);
  },
  formData(resource, data) {
    return axios.post(resource, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  token(resource, data) {
    return axios.post(resource, data, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
  },
  put(resource, data) {
    return axios.put(resource, data);
  },

  delete(resource) {
    return axios.delete(resource);
  },
  print(resourse) {
    return axios.get(resourse, {
      responseType: "blob",
    });
  },
  printtemp(resourse, data) {
    return axios.post(resourse, data, {
      responseType: "blob",
    });
  },
  blobandjson(resourse, data) {
    return axios.post(resourse, data, {
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "blob",
    });
  },
  customRequest(data) {
    return axios(data);
  },

  mount401Interceptor() {
    this._401interceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.request.status == 401) {
          // AccountService.Logout().then(res => {
          localStorage.clear();
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const code = urlParams.get("code");
          window.location.href = code ? "/login?code=" + code : "/login";
          // })
        }
        if (error.request.status == 403) {
          window.location.href = "/error/403";
        }
        throw error;
      }
    );
  },

  unmount401Interceptor() {
    axios.interceptors.response.eject(this._401interceptor);
  },
};

export default ApiService;