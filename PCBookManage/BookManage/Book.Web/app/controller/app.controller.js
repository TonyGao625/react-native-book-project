var module = angular.module('app.controller', []);

//login
import loginCtrl from './login.ctrl';
module.controller('loginCtrl', loginCtrl);

//book
import bookCtrl from './book.ctrl';
module.controller('bookCtrl', bookCtrl);

export default module;