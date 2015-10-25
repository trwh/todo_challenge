var mock = require('protractor-http-mock');

describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'))
  var searchButton = element(by.className('btn'))

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

    inputBox.sendKeys('Make TODO list');
    addTaskButton.click();

    var tasks = element.all(by.repeater('task in taskCtrl.taskList.items'));
    expect(tasks.get(0).getText()).toEqual('Make TODO list');
  });

});
