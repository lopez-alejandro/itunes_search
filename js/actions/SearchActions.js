var AppDispatcher = require('../dispatcher/AppDispatcher');
var SearchConstants = require('../constants/SearchConstants');

var $ = require('jquery');
/**
 * builds a searchURL based on user searchText
 * @param  {string} text the user search text
 * @return {string}      the url used to make an API call
 */
function buildURL(text){
  var urlBase = "https://itunes.apple.com/search?term=";
  // read in the user input from the event
  var userInput = text;
  //console.log(this.state.searchText);
  // start our search url
  var searchURL = urlBase;
  // split up every word in the user's search to individual strings
  var searchTerms = userInput.split(" ");
  // add every word in users input to the search url
  for (var i = 0; i < searchTerms.length; i++) {
    searchURL = searchURL + searchTerms[i];
    if(i != searchTerms.length - 1){
      searchURL = searchURL +  "+";
    }

  }
  // finish the search by limiting to 25 responses
  searchURL += "&limit=25";
  //console.log(searchURL);
  return searchURL;
}

function makeRequest(url, handler){
  $.ajax({
      type: 'GET',
      url: url,
      dataType: "jsonp",
      crossDomain: true,
      success: buildAction,
      error: function(request, status, error) {
              console.log(error);
      }
    });
}

function buildAction(data){
  //console.log(data);
  var action = {
    actionType: SearchConstants.ITUNES_SEARCH,
    results: data.results
  }
  AppDispatcher.handleViewAction(action);
}

var SearchActions = {
  makeSearch: function(searchText){
    console.log(searchText.length);
    if(searchText.length > 0){
      var url = buildURL(searchText);
      console.log(url);
      makeRequest(url, this.buildAction);
    }
  }
};

module.exports = SearchActions;
