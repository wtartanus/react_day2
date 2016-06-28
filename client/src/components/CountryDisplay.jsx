var React = require('react');
var CountryInformation = require('./CountryInformation');
var CountryBorders = require("./CountryBorders");

var CountryDisplay = React.createClass({
  render: function() {

    return (
      <div>
        <CountryInformation country={this.props.country}/>
        <CountryBorders countries={this.props.borders}/>
      </div>

      )
  }
});

module.exports = CountryDisplay;