import api from 'lib/api';

  api.new('http://localhost:3000');

export function login(username, password) {
  api.login(username, password)
    .then(function(resp){
      console.log(resp)
    });
}


export function logout() {
  api.logout();
}