var React = require('react');
var AppsHelper = require('../utils/ww-apps-helper');
// var getRepos = require('../components/getRepos');

var GetReposConatiner = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      reposInfo: [],
    }
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    AppsHelper.getReposInfo()
    .then(function (repos) {
      this.setState({
        reposInfo: [repos]
      })
    }.bind(this))
  },
  handleShowReposIndex: function() {
    this.context.router.push({
      pathname: '/repos',
      state: {
        reposInfo: this.state.reposInfo
      }
    })
  },
  render: function() {
    return (
      <getRepos
        onShowReposIndex={this.handleShowReposIndex}
        reposInfo={this.state.reposInfo} />
    )
  }
});

module.exports = GetReposConatiner;
