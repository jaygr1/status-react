var axios = require('axios');

// function getRepoInfo () {
//   return axios.get('http://localhost:3000/repos')
// }

// var Repos = {
//   getReposInfo: function (repositories) {
//     return axios.all(repositories.map(function (repo) {
//       return getReposInfo(repo)
//     })).then(function(info){
//       return info.map(function(repository){
//         console.log(repository)
//         return repository.data
//       })
//     }).catch(function(err){
//       console.warn("you made a mistake so fix it", err)
//     })
//   }
// };

var Repos = (axios.get('http://localhost:3000/repos')
  .then(function (response) {
    console.log(response);
    // return response.map(function(repo){
    //   return repo
    // })
  }).catch(function(err) {
    console.warn("you made a mistake so fix it", err)
  })
);
module.exports = Repos;
