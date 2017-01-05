export const API_BASE = 'http://localhost:3000/';
export const API_VERSION = 'v1/';
export const API = API_BASE + 'api/' + API_VERSION;

const endPoints = ['signup', 'authenticate', 'todo/user', 'todoevent/user'];
const keys = ['signup', 'authenticate', 'userTodos', 'userTodoEvent'];

let API_ENDPOINTS = {};

for (let i = 0; i < endPoints.length; i ++) {
  let endpoint = endPoints[i];
  if (endpoint === 'signup' || endpoint === 'authenticate') {
    API_ENDPOINTS[endpoint] = API_BASE + endpoint;
  }

  else {
    API_ENDPOINTS[keys[i]] = API + endpoint;
  }
  
}

export default API_ENDPOINTS;