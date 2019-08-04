const HOST = process.env.VUE_APP_API_HOST;
const VERSION = '';
const BASE_URL = HOST + VERSION;

const api = {
  login: () => `${BASE_URL}/login/`, //POST
  signUp: () => `${BASE_URL}/user/`, //POST
  logs: () => `${BASE_URL}/logs/`, //GET
  addLog: () => `${BASE_URL}/log/`, //POST
}

export default api