//модуль
angular.module('userListApp', [])
//контроллер
.controller('userListCtrl', function($scope, $http){
     $http.get('http://jsonplaceholder.typicode.com/users').success(function(data) {
            $scope.user=data.users;
        });
    $scope.list = {
    users : [{name: 'Leanne Graham', id:'1'},
        {name: 'Ervin Howell', id:'2'},
        {name: 'Clementine Bauch', id:'3'},
        {name: 'Patricia Lebsack', id:'4'},
        {name: 'Chelsey Dietrich', id:'5'},
        {name: 'Mrs. Dennis Schulist', id:'6'},
        {name: 'Kurtis Weissnat', id:'7'},
        {name: 'Nicholas Runolfsdottir V', id:'8'},
        {name: 'Glenna Reichert', id:'9'},
        {name: 'Clementina DuBuque', id:'10'},]};
});

















