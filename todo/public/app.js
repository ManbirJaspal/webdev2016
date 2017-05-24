/**
 * Created by manbir on 5/18/2017.
 */
(function(){

    angular
        .module('TodoApp', [])
    .controller('TodoController', TodoController);

    function TodoController($scope, $http) {    //The scope is the binding part between the HTML (view) and the JavaScript (controller).|| The scope is an object with the available properties and methods.|| The scope is available for both the view and the controller. -->
            $scope.todos = [];                  //$http allows us to talk to http resources, like our server.

    $scope.updateTodo = function() {
        $scope.todos[ $scope.selectedTodoIndex].name = $scope.name;
    }
            $scope.selectTodo = function(index) {
                $scope.name = $scope.todos[index].name;
                $scope.selectedTodoIndex = index;          //<!-- to remember the index we selected , so that we can use it to update the value -->
            }
            $scope.deleteTodo = function(index){
                console.log('remove ' + index );
                $scope.todos.splice(index, 1);  //<!-- The splice() method adds/removes items to/from an array, and returns the removed item(s), note that it changes the array   -->
            }
           $scope.newTodo = function() {
            console.log('newTodo: ' + $scope.name);



            $http.get('/todo/' + $scope.name)
                .success(function(todos) {
                  $scope.todos = todos;    
                })





     }



    }


})();