var React = require('react');

var CountriesSelector = React.createClass({
  getInitialState: function() {
    return { selectedRegion: null }
  },

  handleChange: function(e) {
    e.preventDefault();
    var newRegion = e.target.value;
    this.setState( {selectedRegion: newRegion})
    this.props.onSelectRegion(newRegion)
  },

  render: function() {
   var options = this.props.regions.map(function(region) {
     return <option key={region}>{region}</option>
   })
    return (
      <select value={this.state.selectedIndex} onChange={this.handleChange}>
        {options}
      </select>
    )
  }
});

module.exports = CountriesSelector;



