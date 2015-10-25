githubUserSearch.controller('GitUserSearchController', ['Search',function(Search) {

  var self = this;
  self.toDoItems = [];
  self.taskText = "What needs to be done?";

  self.addItem = function() {
    self.toDoItems.push(self.taskText);
    self.taskText = "What needs to be done?";
  };

}]);
