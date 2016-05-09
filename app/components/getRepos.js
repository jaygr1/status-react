var React = require('react');

var GetRepos = React.createClass({
  render: function () {
    var reposInfo  = this.props.reposInfo || [];
    var repos = reposInfo[0] || [];
    return (
      <ul>
        {repos.map(function(repo){
          return <li key={repo.id}><a href={repo.url}> {repo.name} </a></li>
          })
        }
      </ul>
    )
  }
});

module.exports = GetRepos;
