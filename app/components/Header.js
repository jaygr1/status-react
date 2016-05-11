var React = require('react');
var styles = require('../styles/main');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = React.createClass({
  render: function() {
    return (
      <h1 style={styles.header} styles={styles.text}>
        <span className="navbar-brand"><Link to='/'>
            Home
        </Link></span>
        <span className="navbar-brand"><Link to='/environments'>
            Environments
        </Link></span>
        <span className="navbar-brand"><Link to='/repos'>
            Repos
        </Link></span>
      </h1>
    )
  }
});

module.exports = Header;
