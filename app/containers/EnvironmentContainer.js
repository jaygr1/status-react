var React = require('react');
var AppsHelper = require('../utils/ww-apps-helper');
var Environments = require('../components/Environments')

var EnvironmentContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      environmentsInfo: [],
    }
  },
  componentDidMount: function() {
    AppsHelper.Environments()
      .then(function(environment){
        this.setState({
          environmentsInfo: [environment]
        })
      }.bind(this))
  },
  handleShowEnvironmentsIndex: function(){
    this.context.router.push({
      pathname: '/environments',
      state: {
        environmentsInfo: this.state.environmentsInfo
      }
    })
  },
  render: function() {
    return (
      <Environments
        onShowEnvironmentsIndex={this.handleShowEnvironmentsIndex}
        environmentsInfo={this.state.environmentsInfo}
      />
    )
  }
});

module.exports = EnvironmentContainer;
