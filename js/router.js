function router($routeProvider) {
    $routeProvider
      .when('/',
      {
       templateUrl:'view/hello.html'       
      })
      .when('/main', 
      {
       templateUrl:'view/main.html', 
       controller:'mainCtrl'
      })
  }