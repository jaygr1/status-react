var React = require('react');
// var Environments = require('../components/Environments');

// var Home = React.createClass({
//   render: function() {
//     return (
//       <div> Home </div>
//     )
//   }
// });

var Test = function Test (repos, environments) {

  return repos.map(function(repo){

    // repo.length > 0
    // ? <li key={repo.id}><a href={repo.url}> {repo.name} </a></li>
    // : <div> Nada </div>

    environments.map(function(environment){
      
      // repo.id === environment.id
      // ? <li key={environment.id}><a href={environment.url}> {environment.name}</a></li>
      // : <li> Nothing </li>
    })

  })

}

var Home = React.createClass({
  render: function () {
    debugger;
    var reposInfo = this.props.reposInfo || [];
    debugger;
    var repos = reposInfo[0] || [];


    var environmentsInfo = this.props.reposInfo[1] || [];
    debugger;
    var environments = environmentsInfo[0] || [];

    console.log(repos)
    // console.log(environments)
    return (
      <ul>

          {() => Test(repos, environments)}
      </ul>
    )
  }
});

module.exports = Home;
