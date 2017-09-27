import "isomorphic-fetch";

export function post(url, body, config) {
  let postConfig = Object.assign({}, config, {method: 'POST'});
  return httpSend(url, body, postConfig);
}

export function put(url, body, config) {
  let putConfig = Object.assign({}, config, {method: 'PUT'});
  return httpSend(url, body, putConfig);
}

export function get(url, body, config) {
  let getConfig = Object.assign({}, config, {method: 'GET'});
  return httpSend(url, body, getConfig);
}

export function remove(url, body, config) {
  let getConfig = Object.assign({}, config, {method: 'DELETE'});
  return httpSend(url, body, getConfig);
}

export function syncGet(url, body, config) {
  return syncGetRequest(url, body, config);
}

function hasPayload(methodName){
  return methodName == 'POST' || methodName == 'PUT';
}

function hasNoConetent(response) {
  return response.status === 204;
}

function isError(response){
  let isError = isServerError(response) || isClientError(response);
  return isError;
}

function isOk(response){
  return response.status >=200 && response.status<300;
}

function isRedirect(response){
  return response.status >=300 && response.status<400;
}

function isClientError(response){
  let isClientError = response.status >=400 && response.status<500;
  return isClientError;
}

function isServerError(response){
  let isServerError = response.status >=500 && response.status<600;
  return isServerError;
}

function syncGetRequest(url, body, config){
  let response = null;
  let request = new XMLHttpRequest();
  request.open("GET", restUrl, false);  // `false` makes the request synchronous
  request.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
  request.send(null);

  if (request.status === 200) {
    response = JSON.parse(request.response);
  }

  return response;
}

function httpSend(url, body, config){
  return new Promise(
    function(resolve, reject) {
      if (!config) {
        config = {};
      }
      let fetchConfig = {
        method: config.method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/javascript, */*; q=0.01',
          'X-Requested-With': 'XMLHttpRequest'
        },
        credentials: config.credentials || 'same-origin',
        mode: config.mode || 'cors',
        cache: config.cache || 'no-cache'
      };

      if(hasPayload(config.method)){
        fetchConfig.body = JSON.stringify(body);
      }

      fetch(url, fetchConfig).then(function(response) {
        if(hasNoConetent(response)){
          resolve(response);
        } else if (isError(response)){
          reject(response);
        } else {
          response.json().then(function(jsonResponse) {
            resolve(jsonResponse);
          });
        }
      });
    }
  )
}
