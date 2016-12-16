
const JWT = 'jwt';

function addJWT(jwt) {
  const jwtObj = { jwt: jwt, createdAt: Date.now() };
  sessionStorage.setItem(JWT, JSON.stringify(jwtObj));
  localStorage.setItem(JWT, JSON.stringify(jwtObj));
}

function getJWT() {
  const sessionJwt = sessionStorage.getItem(JWT);
  const localJwt = localStorage.getItem(JWT);
  
  return sessionJwt;
}

function removeJWT() {
  sessionStorage.removeItem(JWT);
}

function sessionStorageAdd(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

function sessionStorageRemove(key) {
  sessionStorage.removeItem(key);
}

const storage = {
  addJwt: addJWT,
  getJwt: getJWT,
  removeJwt: removeJWT,
  add: sessionStorageAdd,
  remove: sessionStorageRemove,
};

export default storage;



