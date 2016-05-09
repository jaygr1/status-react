var axios = require('axios');
var React = require('react');

function getRepoInfo () {
  return axios.get('http://localhost:3000/api/v1/repos')
}

var repos = {
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
}

module.exports = repos;
