var React = require('react');
// var Environments = require('../components/Environments');

// var Home = React.createClass({
//   render: function() {
//     return (
//       <div> Home </div>
//     )
//   }
// });

// var homeTable = function homeTable (repos, environments) {
//
//   return repos.map(function(repo){
//
//     repo.length > 0
//     ? <li key={repo.id}><a href={repo.url}> {repo.name} </a></li>
//     : <div> Nada </div>
//
//     environments.map(function(environment){
//       return environment
//       repo.id === environment.id
//       ? <li key={environment.id}><a href={environment.url}> {environment.name}</a></li>
//       : <li> Nothing </li>
//     })
//
//   })
//
// }

// var Home = React.createClass({
//   render: function () {
//     // debugger;
//     var reposInfo = this.props.reposInfo[0] || [];
//     debugger;
//     var repos = reposInfo || [];
//     debugger;
//
//     var environmentsInfo = this.props.environmentsInfo || [];
//     debugger;
//     var environments = environmentsInfo[0] || [];
//     debugger;
//
//     return (
//       <ul>
//
//       {repos.map(function(repo){
//         return <li key={repo.id}><a href={repo.url}> {repo.name} </a></li>
//
//         })
//       };
//
//
//
//       </ul>
//     )
//   }
// });

var Home = React.createClass({

  getEnvironmentsForRepo(repoId) {
    var environmentsInfo = this.props.environmentsInfo || [];
    var environments = environmentsInfo[0] || [];

    var repoEnvs = environments.filter(function(environment){
      return environment.repo_id === repoId;
    }).map(function (repoEnv) {
      return <li key={repoEnv.id}><a href={repoEnv.url}> {repoEnv.name} </a></li>
    })

    return repoEnvs;
  },

  render: function () {
    // debugger;
    var reposInfo = this.props.reposInfo[0] || [];
    debugger;
    var repos = reposInfo || [];
    debugger;

    var environmentsInfo = this.props.environmentsInfo || [];
    debugger;
    var environments = environmentsInfo[0] || [];
    debugger;

    return (
      <ul>

      {repos.map((repo) => {
        return <li key={repo.id}><a href={repo.url}> {repo.name} {this.getEnvironmentsForRepo(repo.id)} </a></li>
      })
      }



      </ul>
    )
  }
});

module.exports = Home;
