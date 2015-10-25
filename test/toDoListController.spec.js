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

  xdescribe('when seraching for a user', function() {

    var items = [
      {
        "login": "tansaku",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "html_url": "https://github.com/tansaku"
      },
      {
        "login": "stephenlloyd",
        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        "html_url": "https://github.com/stephenlloyd"
      }
    ];

    var httpBackend;

    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
      .expectGET("https://api.github.com/search/users?access_token=" + gitAccessToken + '&q=hello')
      .respond(
        { items: items }
      );
    }));

    afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
   });

    console.log(gitAccessToken)
    it('displays search results', function() {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      httpBackend.flush();
      expect(ctrl.searchResult.items).toEqual(items);
    });


  });



});
