function makeRequest(method, url, body) {
  let headers = new Headers({'Content-Type': 'application/json'});

  const request = new Request(url, {
    method: method, 
    mode: 'cors',
    body: JSON.stringify(body),
    headers: headers
  });

  return request;
}

function makeGetRequest(url, jwt) {
  let headers = new Headers();

  console.log(headers.get('x-access-token'));
  const request = new Request(url + '?token=' + jwt, {
    method: 'GET', 
    mode: 'cors',
    headers: headers
  });

  return request;
}

function makeFetchPromise(request) {
  const fetchPromise = fetch(request)
  .then((responseObj) => {
    console.log(responseObj);
    return responseObj.json();
  }).then((json) => {
    return json;
  });

  return fetchPromise;
}

function apiGet(url, jwt) {
  const getRequest = makeGetRequest(url, jwt);
  const getPromise = makeFetchPromise(getRequest);

  return getPromise;
}

function apiPost(url, body) {
  const postRequest = makeRequest('POST', url, body);

  const postPromise = makeFetchPromise(postRequest);;

  return postPromise;
}

function apiPut(url, body) {
  const putRequest = makeRequest('PUT', url, body);

  const putPromise = makeFetchPromise(putRequest);;

  return putPromise;
}

const Api = {
  get: apiGet,
  post: apiPost,
  put: apiPut,
};

module.exports = Api;