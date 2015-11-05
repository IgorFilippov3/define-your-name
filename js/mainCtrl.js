function mainCtrl($scope, $http) {
    $http.get('../model/data.json').success(function(data){
      $scope.names = data;
    })
    
    $scope.totalName = "Write the first <b>four</b> digits of the PIN code of your credit card.";
    $scope.spanError = true;

    $scope.validate = function() {
      var inputValue = $scope.inputValue;
      var newStr = inputValue - 0;
     

      if(inputValue.length == 4) {
          if(isNaN(newStr)) {
              $scope.spanNotification = 'Only digits, please.';
              $scope.spanError = false;
          }
          else {
              $scope.spanError = true;
          }
      }
      else if(inputValue.length > 4){
          $scope.spanNotification = 'The entered data is too long.';
          $scope.spanError = false;
      }
      else {
          $scope.spanNotification = 'The entered data is too short';
          $scope.spanError = false;
      }
    }

    $scope.showName = function() {
      if($scope.spanError == true) {
      var inputValueSplit = $scope.inputValue.split(''),
          array = [];

      inputValueSplit.forEach(function(item){
        array.push(parseInt(item));  
      });

      $scope.totalName = 'Your name is ' +
                         $scope.names.firstName1[array[0]] + 
                         $scope.names.firstName2[array[1]] + 
                         ' ' + 
                         $scope.names.lastName1[array[2]] + 
                         $scope.names.lastName2[array[3]];
      $scope.inputValue = '';                                      
    }
  }
}