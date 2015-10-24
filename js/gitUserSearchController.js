githubUserSearch.controller('GitUserSearchController', ['Search',function(Search) {

  var self = this;
  var toDoItems = [];

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;

      })
  };

  self.addItem = function() {

  };

}]);
