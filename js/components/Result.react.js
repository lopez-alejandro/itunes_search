var React = require('react');

var Result = React.createClass({

  render: function(){
    var obj = this.props.info;
    return (
      <li className="collection-item avatar">
        <img src={obj.artworkUrl60} className='circle'/>
        <span className="title"><strong>{obj.trackName}</strong></span>
        <p>{obj.artistName}
          <br></br>
          <a className = 'store_link' href={obj.collectionViewUrl}  target="_blank">Buy on Itunes</a>
        </p>
        <a href="#!" className="secondary-content valign"><i className="material-icons">grade</i></a>
      </li>
    );
  }
});

module.exports = Result;
