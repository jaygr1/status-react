var React = require('react');
var Home = require('../components/Home');
var Environments = require('../components/Environments');
var AppsHelper = require('../utils/ww-apps-helper');
var ReposContainer = require('../containers/getReposContainer');
var EnvironmentsContainer = require('../containers/EnvironmentContainer');

// var Home = React.createClass({
//   render: function() {
//     return (
//       <div> Home </div>
//     )
//   }
// });

var HomeContainer = React.createClass({
  // contextTypes: {
  //   router: React.PropType.object.isRequired
  // },
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
        this.setState({
          reposInfo: [devInfo],
          environmentsInfo: [devInfo],
        }, function() {
          // console.log(this.state)
        } )
        // console.log(this.state)
      }.bind(this))
    },

  // componentDidMount: function() {
  //   debugger;
  //   AppsHelper.Repos()
  //     .then(function(repos){
  //       this.setState({
  //         reposInfo: [repos]
  //       })
  //     }.bind(this))
  //   }
  //   AppsHelper.Environments()
  //     .then(function(environments){
  //       this.setState({
  //         environmentsInfo: [environments]
  //       })
  //     }.bind(this))
  //   }
  // },
  handleHome: function () {
    this.context.router.push({
      pathname: '/',
      state: {
        reposInfo: this.state.reposInfo[0][0].data,
        environmentsInfo: this.state.environmentsInfo[0][1].data
      }
    })
  },


  // componentDidMount: function () {
  //   return (
  //     <div>
  //     <ReposContainer
  //       reposInfo={this.state.reposInfo}
  //     />
  //     debugger;
  //     <EnvironmentsContainer
  //       environmentsInfo={this.state.environmentsInfo}/>
  //     </div>
  //   )
  // },


  render: function() {
    return (
      <div> <Home reposInfo={this.state.reposInfo}/> </div>
    )
  }
});

module.exports = HomeContainer;
