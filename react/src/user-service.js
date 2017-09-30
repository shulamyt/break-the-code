import isEmpty from 'lodash/isEmpty';
import assign from 'lodash/assign';
import * as RestService from './rest-utilities';

var currentUser = {};
export function getUser() {
  return new Promise(function(resolve, reject) {
    if(!isEmpty(currentUser)){
      resolve(currentUser);
    }
    else{
      RestService.post('services/user', currentUser).then(function(user) {
        currentUser = user;
        resolve(currentUser);
      });
    }
  })
}

export function updateUserData(userData) {
  return new Promise(function(resolve, reject) {
    getUser().then(function(user){
      assign(user, userData);
      RestService.put('services/user', user).then(function(updatedUser) {
        if(currentUser.id != updatedUser.id){
          console.error('problem in user id!');
        };
      });
    });
  })
}

