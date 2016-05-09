var React = require('react');
var styles = require('../styles/main');

var Header = React.createClass({
  render: function() {
    return (
      <h1 style={styles.header} styles={styles.text}>App Status</h1>
    )
  }
});

module.exports = Header;
