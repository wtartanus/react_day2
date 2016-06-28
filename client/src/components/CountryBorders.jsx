var React = require("react");
var Country = require('./Country');

var CountryBorders = React.createClass({
  render: function() {
    var borders = this.props.countries.map(function(country) {
        return <Country key={country.alpha2Code} name={country.name} capital={country.capital}/>
    })
    return ( 
      <div>
      <h4>Country Borders</h4>
        {borders}
      </div>
      )
  }
});

module.exports = CountryBorders;