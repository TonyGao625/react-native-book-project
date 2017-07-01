export default function indexRoute($stateProvider,$locationProvider,$urlRouterProvider) {
    $urlRouterProvider.when("","/book");
   // $locationProvider.html5Mode({ enabled: true, requireBase: false });
    $stateProvider.state('login',{
        url: '/login',
        templateUrl: 'app/view/login.html',
        controller: "loginCtrl"
    })
    .state('book',{
        url: '/book',
        templateUrl: 'app/view/book.html',
        controller: "bookCtrl"
    });
}