var SearchStore = require('../stores/SearchStore');
var React = require('react');
var SearchBar = require('./SearchBar.react');
var ResultsContainer = require('./ResultsContainer.react');
/**
 * Get the current state of search results
 * @return {object} the search results.
 */
function getItunesState(){
  return {
    results: SearchStore.getAllResults()
  };
}
var ItunesApp = React.createClass({

  getInitialState: function(){
    return getItunesState();
  },

  // lifecycle function that is called after this component is mounted
  componentDidMount: function(){
    console.log("mounted");
    SearchStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    SearchStore.removeChangeListener(this._onChange);
  },

  render: function(){
    return(
      <div id="main_container">
        <SearchBar/>
        <ResultsContainer
          results = {this.state.results}/>
      </div>
    );
  },

  _onChange: function(){
    this.setState(getItunesState());
  }
});

module.exports = ItunesApp;
