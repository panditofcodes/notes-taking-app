import React, { Component } from 'react'
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Outlet } from 'react-router-dom';
export class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page: 1,
        };
      }
    
      pageSwitchhandler = (e) => {
        this.setState({
          page: !this.state.page,
        });
        e.preventDefault();
      };
  render() {
    return (
      <>
      <div className="container">
        {this.state.page ? (
          <SignIn switch={this.pageSwitchhandler} />
        ) : (
          <SignUp switch={this.pageSwitchhandler} />
        )}
        <Outlet/>
      </div>
    </>
    )
  }
}

export default Homepage