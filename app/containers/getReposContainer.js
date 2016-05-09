var React = require('react');
var GetRepos = require('../components/GetRepos');
var AppsHelper = require('../utils/ww-apps-helper');

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
    // var query = this.props.location.query;
    AppsHelper.Repos()
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
      <GetRepos
        onShowReposIndex={this.handleShowReposIndex}
        reposInfo={this.state.reposInfo} />
    )
  }
});

module.exports = GetReposConatiner;
