var React = require('react');

var styles = {
  li: {
    color: 'red'
  }
}

var Environments = React.createClass({
  render: function () {
    var environmentsInfo  = this.props.environmentsInfo || [];
    var environments = environmentsInfo[0] || [];
    return (
      <ul>
        <table className='table table-striped'>
        <h2> Environments </h2>
        <tbody className='table table-hover'>
        <div><strong><span className="col-sm-4"> Name </span> <span className="col-sm-4"> Status </span> <span className="col-sm-4"> Last Updated </span></strong> </div>
        {environments.map(function(environment){
          return <div><a key={environment.id} href={environment.url}> <span className="col-sm-4">{environment.name}</span></a> <span className="col-sm-4 ">{environment.status}</span> <span className="col-sm-4 ">{environment.updated_at}</span></div>
          })
        }
          </tbody>
        </table>
      </ul>
    )
  }
});

module.exports = Environments;
