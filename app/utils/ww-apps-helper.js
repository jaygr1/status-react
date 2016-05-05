var axios = require('axios');

function getReposInfo () {
  return axios.get('http://localhost:3000')
}
