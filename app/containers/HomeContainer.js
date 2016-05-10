var React = require('react');
var Home = require('../components/Home');
var Environments = require('../components/Environments');
var AppsHelper = require('../utils/ww-apps-helper');
var ReposContainer = require('../containers/getReposContainer');
var EnvironmentsContainer = require('../containers/EnvironmentContainer');

var HomeContainer = React.createClass({
  getInitialState: function (){
    return {
      reposInfo: [],
      environmentsInfo: []
    }
  },

  componentDidMount: function() {
    var query = this.props.location.query;
    AppsHelper.ReposAndEnvironments([query.repos, query.envs])
      .then(function(devInfo){
        debugger
        this.setState({
          reposInfo: [devInfo[0].data],
          environmentsInfo: [devInfo[1].data],
        }, function() {
          // console.log(this.state)
        } )
        // console.log(this.state)
      }.bind(this))
    },
  // handleHome: function () {
  //   this.context.router.push({
  //     pathname: '/',
  //     state: {
  //       reposInfo: this.state.reposInfo[0][0].data,
  //       environmentsInfo: this.state.environmentsInfo[0][0].data
  //     }
  //   })
  // },
  render: function() {
    return (
      <div>
        <Home reposInfo={this.state.reposInfo} environmentsInfo={this.state.environmentsInfo} />
       </div>
    )
  }
});

module.exports = HomeContainer;
