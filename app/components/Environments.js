var React = require('react');

var styles = {
  li: {
    color: 'red'
  }
}

var Environments = React.createClass({
  render: function () {
    var environmentsInfo  = this.props.environmentsInfo || [];
    var environments = environmentsInfo[0] || [];
    return (
      <ul>
        {environments.map(function(environment){
          return <li key={environment.id}><a href={environment.url}> {environment.name} </a></li>
          })
        }
      </ul>
    )
  }
});

module.exports = Environments;
