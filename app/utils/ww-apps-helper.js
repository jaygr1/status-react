var axios = require('axios');
var React = require('react');

function getRepoInfo () {
  return axios.get('http://localhost:3000/api/v1/repos')
}

Repos: function Repos () {
  return getRepoInfo()
  .then(function (response) {
    // return response.data.map(function(repo){
      return response.data
  // })
    // console.log(response.data)
  }).catch(function(err){
    console.warn("COME FIX", err)
  })
}

function GetEnvironmentsInfo () {
  return axios.get('http://localhost:3000/api/v1/environments')
}

Environments: function Environments() {
  return GetEnvironmentsInfo()
  .then(function(response){
    return response.data
  }).catch(function(err){
    console.warn("FIX THIS", err)
  })
}

ReposAndEnvironments: function ReposAndEnvironments() {
  var envs = getRepoInfo();
  var repos = GetEnvironmentsInfo();

  return axios.all([envs, repos])
    .then(function(response) {
      return response
      // console.log(response)
    })
    .catch(function(err) {
      console.warn("Didn't get the data back", err)
    })
};

module.exports = {Repos: Repos, Environments: Environments, ReposAndEnvironments: ReposAndEnvironments};
