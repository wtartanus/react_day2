var React = require('react');

var CountryInformation = React.createClass({
  render: function() {
    return (
      <div>
      <h4>{this.props.country.name}</h4>
      <p>Capital: {this.props.country.capital}</p>
      <p>Area: {this.props.country.area}</p>
      <p>Population: {this.props.country.population}</p>
      <p>Subregion: {this.props.country.subregion}</p>
      </div>
      )
  }
});

module.exports = CountryInformation;