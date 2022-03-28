import React from 'react';

class Header extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      date: "",
      time: "",
      daysLeft: 0
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
    );
    var today = new Date();
    var date1 = today.toDateString();
    var cmas= new Date(2022, 3, 9);
    var one_day=1000*60*60*24;
    var daysLeft1 = "Days to Competition: " + (Math.ceil( (cmas.getTime()-today.getTime() )/ one_day ));
    
    this.setState({
      date: date1,
      daysLeft: daysLeft1
    });
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <nav className="navbar is-fixed-top is-dark color-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://www.bruinracing.com/smv/">
            <h1>Bruin SuperMileage</h1>
          </a>
        </div>
        
        <div className="navbar-end is-hidden-touch">
          {/* <div className="navbar-item">
          Made by A. Nagarajan, Continued by K. Nguyen
          </div> */}
          <div className="navbar-item">
            {this.state.daysLeft}
          </div>
          <div className="navbar-item">
          { this.state.date}
          </div>
          <div className="navbar-item">
            {this.state.time}
          </div>
        </div>
      </nav>
    );
  }
};

export default Header;