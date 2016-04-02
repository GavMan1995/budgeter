class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = { account: this.props.account }
    this.changeTotal = this.changeTotal.bind(this)
  }

  changeTotal(e) {
    e.preventDefault();
    let total = this.refs.total.value
    let id = this.props.account.id
      $.ajax({
        url: `/accounts/${id}`,
        type: 'PUT',
        data: { account: { total: total } },
        dataType: 'JSON'
      }).success( account => {
        this.setState({ account: account })
        this.refs.total.value = null;
      })


  }


  render() {
    return(
      <div className="container">
        <div className="row z-depth-5 teal accent-3">
          <h1 className="white-text center">Acount</h1>
        </div>
        <div>
          <h3 className="purple-text center-align">Your acount ballance in american dolars: ${ this.state.account.total }</h3>
            <div className="row">
              <form onSubmit={this.changeTotal} className="col s4">
                <input type='number' placeholder="enter amount" ref="total" required={true} />
                <button className="btn-large purple lighten-3 z-depth-3">ADD AMMOUNT</button>
              </form>
            </div>
        </div>
      </div>
    )
  }
}