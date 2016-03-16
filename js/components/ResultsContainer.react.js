var React = require('react');

var Result = require('./Result.react');

var ResultsContainer = React.createClass({

  render: function(){
    var results = [];
    var data = this.props.results;
    for(var i = 0; i < data.length; i++){
      results.push(
        <Result key={i} info={data[i]}/>
      );
    }
    return (
      <div id ='results_container'>
        <ul className='collection'>
          {results}
        </ul>
      </div>
    );
  }
});

module.exports = ResultsContainer;
