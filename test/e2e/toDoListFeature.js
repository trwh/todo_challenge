describe('GitHub profile finder', function() {

  var taskBox = element(by.model('taskCtrl.taskText'));
  // var taskBoxText = taskBox.getAttribute('value');
  var addTaskButton = element(by.id('addTaskButton'));
  var deleteTaskButton = element(by.id('deleteTaskButton'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Todo list');
  });

  it('adds an item to the todo list', function() {
    taskBox.clear();
    taskBox.sendKeys('Make TODO list');
    addTaskButton.click();

    var tasks = element.all(by.repeater('task in taskCtrl.toDoItems'));
    expect(tasks.get(0).getText()).toContain('Make TODO list');
  });

  it('deletes an item from the todo list', function() {
    taskBox.clear();
    taskBox.sendKeys('Make TODO list');
    addTaskButton.click();
    deleteTaskButton.click();

    var tasks = element.all(by.repeater('task in taskCtrl.toDoItems'));
    expect(tasks).toEqual([]);
  });

  xit('the text box has good default contents both before and after a task is added', function() {
    expect(page).toContain("What needs to be done?");

    taskBox.sendKeys('Make TODO list');
    addTaskButton.click();

    expect(taskBoxText).toEqual("What needs to be done?");
  });

});
