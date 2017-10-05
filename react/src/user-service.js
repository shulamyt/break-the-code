import isEmpty from 'lodash/isEmpty';
import assign from 'lodash/assign';
import * as RestService from './rest-utilities';

var currentUser;
var currentUserPromise;
export function getUser() {
  return new Promise(function(resolve, reject) {
    if(currentUser != undefined){
      resolve(currentUser);
    }
    else{
      if(currentUserPromise != undefined){
        currentUserPromise.then(function(){
          resolve(currentUser);
        });
      }else{
        let userFromStorage = localStorage.getItem('getTheCodeUser');
        if(userFromStorage == null || window.location.search == "?clean=true") {
          currentUserPromise = RestService.post('services/user', currentUser).then(function (user) {
            currentUser = user;
            localStorage.setItem('getTheCodeUser', JSON.stringify(currentUser));
            resolve(currentUser);
          });
        }
        else{
          currentUser = JSON.parse(userFromStorage);
          resolve(currentUser);
        }
      }
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

