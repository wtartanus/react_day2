var React = require('react');
var RegionsSelector = require('./RegionSelector');
var CountrySelector = require('./CountrySelector');
var CountryDisplay = require('./CountryDisplay');

var CountriesBox = React.createClass({
  getInitialState: function() {
    return { countries: [], regions: [], countriesByRegion: [], displayCountry: null, borders: [] }
  },

  componentDidMount: function() {
    console.log('CDM was called');
    var url = "https://restcountries.eu/rest/v1/all";
    var request = new XMLHttpRequest();
    request.open("Get", url);
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      this.setState( { countries: data } );
      var regionsAll = data.map(function(country) {
        return ( country.region)
      })

      var regions = regionsAll.filter(function(elem,pos) {
        return regionsAll.indexOf(elem) == pos;
      })
      this.setState({regions: regions})
    }.bind(this) 
    request.send(null);
  },

  setCountriesSelector: function(region) {
     console.log(region)
     var countries = this.state.countries.filter(function(country) {
       return country.region === region
     })
     this.setState({countriesByRegion: countries })
  },

  setDisplayCountry: function(country) {
   this.setState( {displayCountry: country})
   this.setBorderCountries(country);
  },

  setBorderCountries: function(object) {
    console.log(this)
    var borderCountries = object.borders.map(function(country) {
      for (var i = 0; i < this.state.countries.length; i++) {
        if(this.state.countries[i].alpha3Code === country ) {
          return this.state.countries[i]
        }
      }
    }.bind(this))
   this.setState({borders: borderCountries})
  },

  render: function() {
    var displayElement = <h4>No Country Selected</h4>
    var displaySelector;
    if(this.state.countriesByRegion.length > 0) {
      displaySelector = <CountrySelector 
      countries={this.state.countriesByRegion} onSelectCountry={this.setDisplayCountry}/>
    }
    if(this.state.displayCountry) {
      displayElement = <CountryDisplay 
      country={this.state.displayCountry}
      borders={this.state.borders}
      />
    }
    return (
      <div>
       <h4>Countries Box</h4>
       <RegionsSelector 
       regions = { this.state.regions }
       onSelectRegion = { this.setCountriesSelector }
       />
       {displaySelector}
       {displayElement}
      </div>
      )
  }
});

module.exports = CountriesBox;