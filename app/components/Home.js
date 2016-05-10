var React = require('react');

var Home = React.createClass({

  getEnvironmentsForRepo(repoId) {
    var environmentsInfo = this.props.environmentsInfo || [];
    var environments = environmentsInfo[0] || [];

    var repoEnvs = environments.filter(function(environment){
      return environment.repo_id === repoId;
    }).map(function (repoEnv) {
      return <tr class="col-md-4" key={repoEnv.id}><a href={repoEnv.url}> {repoEnv.name} </a></tr>
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
      <table>
      {repos.map((repo) => {
        return <tr key={repo.id}><a href={repo.url}> <th>{repo.name}</th><tr> {this.getEnvironmentsForRepo(repo.id)}<br/></tr> </a></tr>
      })}
      </table>
    )
  }
});

module.exports = Home;
