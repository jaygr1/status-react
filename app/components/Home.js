var React = require('react');
// var Environments = require('../components/Environments');

// var Home = React.createClass({
//   render: function() {
//     return (
//       <div> Home </div>
//     )
//   }
// });

var homeTable = function homeTable (repos, environments) {

  return repos.map(function(repo){

    repo.length > 0
    ? <li key={repo.id}><a href={repo.url}> {repo.name} </a></li>
    : <div> Nada </div>

    environments.map(function(environment){
      return environment
      repo.id === environment.id
      ? <li key={environment.id}><a href={environment.url}> {environment.name}</a></li>
      : <li> Nothing </li>
    })

  })

}

var Home = React.createClass({
  render: function () {
    // debugger;
    var reposInfo = this.props.reposInfo[0] || [];
    debugger;
    var repos = reposInfo || [];
    debugger;

    var environmentsInfo = this.props.reposInfo[1] || [];
    debugger;
    var environments = environmentsInfo[0] || [];

    return (
      <ul>

      {repos.map(function(repo){
        {console.log(repo)}
        repo.data.map(function(data){
          // {console.log(data)}
          //
          // <li key={repo.id}><a href={repo.url}> {data.name} </a></li>
        })
        })
      }
      </ul>
    )
  }
});

module.exports = Home;
