var mock = require('protractor-http-mock');

describe('GitHub profile finder', function() {

  var taskBox = element(by.model('taskCtrl.taskText'));
  // var taskBoxText = taskBox.getAttribute('value');
  var taskButton = element(by.className('btn'));

  beforeEach(function() {
    mock(['githubUserSearch.js']);
    browser.get('http://localhost:8080');
  })

  afterEach(function(){
    mock.teardown();
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Todo list');
  });

  it('adds an item to the todo list', function() {

    taskBox.clear();
    taskBox.sendKeys('Make TODO list');
    taskButton.click();

    var tasks = element.all(by.repeater('task in taskCtrl.toDoItems'));
    expect(tasks.get(0).getText()).toEqual('Make TODO list');
  });

  xit('the text box has good default contents both before and after a task is added', function() {
    expect(page).toContain("What needs to be done?");

    taskBox.sendKeys('Make TODO list');
    taskButton.click();

    expect(taskBoxText).toEqual("What needs to be done?");
  });

});
