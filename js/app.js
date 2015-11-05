angular
  .module('app', ['ngRoute', "ngSanitize"])
  .config(router)
  .controller('HelloCtrl', helloCtrl)
  .controller('mainCtrl', mainCtrl);