toDoList.controller('toDoListController', [function() {

  var self = this;
  self.toDoItems = [];
  self.taskText = "What needs to be done?";

  self.addItem = function() {
    self.toDoItems.push(self.taskText);
    self.taskText = "What needs to be done?";
  };

}]);
