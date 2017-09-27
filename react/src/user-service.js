import isEmpty from 'lodash/isEmpty';
import * as RestService from './rest-utilities';

var user = {};
export function getUser() {
  return new Promise(function(resolve, reject) {
    if(!isEmpty(user)){
      resolve(user);
    }
    else{
      RestService.post('services/user', user).then(function(newUser) {
        user = newUser;
        resolve(user);
      });
    }
  })
}

export function updateUser(newUser) {
  user = newUser;
  return new Promise(function(resolve, reject) {
    RestService.put('services/user', {}).then(function(updatedUser) {
      user = updatedUser;
    });
  })
}

