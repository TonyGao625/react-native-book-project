import './router/app.router';
import './controller/app.controller';

var App = angular.module('app', [
    'ui.router',

    'app.router',
    'app.controller'
]);

export default App;

