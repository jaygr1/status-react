var React = require('react');
var moment = require('moment');


var Home = React.createClass({

  getEnvironmentsForRepo(repoId) {
    var environmentsInfo = this.props.environmentsInfo || [];
    var environments = environmentsInfo[0] || [];

    var repoEnvs = environments.filter(function(environment){
      return environment.repo_id === repoId;
    }).map(function (repoEnv) {
      return <div><a key={repoEnv.id} href={repoEnv.url}> <span className="col-sm-4">{repoEnv.name}</span></a> <span className="col-sm-4 ">{repoEnv.status}</span> <span className="col-sm-4 ">{moment(repoEnv.updated_at).fromNow()}</span></div>
    })

    return repoEnvs;
  },

  render: function () {
    var reposInfo = this.props.reposInfo[0] || [];
    var repos = reposInfo || [];

    var environmentsInfo = this.props.environmentsInfo || [];
    var environments = environmentsInfo[0] || [];
    debugger;

    return (
      <table className="table table-striped">
      {repos.map((repo) => {
        return <tbody><div className="table-striped table-hover"><tr key={repo.id}><a href={repo.url}> <h3><strong><thead>{repo.name}</thead></strong></h3> </a></tr>
        <div><strong><span className="col-sm-4"> Name </span> <span className="col-sm-4"> Status </span> <span className="col-sm-4"> Last Updated </span></strong> </div>
        {this.getEnvironmentsForRepo(repo.id)}<br/></div></tbody>
      })}
      </table>
    )
  }
});

module.exports = Home;
