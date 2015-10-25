describe('GitUserSearchController', function() {
  beforeEach(module('toDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('toDoListController');
  }));

  it('initialises with an empty todo list', function() {
    expect(ctrl.toDoItems).toEqual([]);
  });

  it('can recall a task added', function() {
    ctrl.taskText = "Make TODO list";
    ctrl.addItem();
    expect(ctrl.toDoItems).toEqual(["Make TODO list"]);
  });

  it('can delete a task previously added', function() {
    ctrl.taskText = "Make TODO list";
    ctrl.addItem();
    ctrl.deleteItem(0);
    expect(ctrl.toDoItems).toEqual([]);
  });

});
