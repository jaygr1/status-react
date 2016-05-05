var React = require('react');
var HomeContainer = require('./HomeContainer');
var Header = require('../components/Header');


var HelloWeWork = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
});

module.exports = HelloWeWork;
