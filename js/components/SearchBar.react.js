var React = require('react');
var ReactDOM = require('react-dom');
var SearchActions = require('../actions/SearchActions');

var SearchBar = React.createClass({

  handleEnter: function(e){
    if(e.keyCode == 13){
      this.handleSearch();
    }
  },
  handleSearch: function(){
    var searchText = document.getElementById('search_input').value;
    SearchActions.makeSearch(searchText);
  },

  render: function(){
    return (
      <div id = 'search_container'>
        <input onKeyUp={this.handleEnter}placeholder="Search" id="search_input" type="text" className="validate"/>
        <button className="waves-effect waves-light btn" id = 'search_button'
          onClick = {this.handleSearch}>
          Search
        </button>
      </div>
    );
  }
});

module.exports = SearchBar;
