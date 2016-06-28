var React = require('react');

var Country = React.createClass({
  render: function() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.capital}</p>
        <hr/>
        <br/>

      </div>
      )
  }
})

module.exports = Country;