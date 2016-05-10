var React = require('react');
var Environments = require('../components/Environments');

// var Home = React.createClass({
//   render: function() {
//     return (
//       <div> Home </div>
//     )
//   }
// });

var Home = React.createClass({
  render: function () {
    debugger;
    var reposInfo = this.props.reposInfo || [];
    var repos = reposInfo[0] || [];
    debugger;
    var environmentsInfo = this.props.environmentsInfo || [];
    var environments = environmentsInfo[0] || [];
    return (
      <ul>
        {repos.map(function(repo){
          return <li key={repo.id} style={styles.li}><a href={repo.url}> {repo.name} </a></li>
          console.log('this is the right place')
            {environments.map(function(environment){
              return repo.id === environment.id
              ? <li header={'SHOW UP'} key={environment.id}><a href={environment.url}> {environment.name} words</a></li>
              : <li> Nothing </li>
              })
            }
          })
        }
      </ul>
    )
  }
});

module.exports = Home;
