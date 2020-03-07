import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {


    return (<div class='header'>
      <a href='' class='logo'>THE NEXT STORE</a>
      <div class='header-right'>
        <Link to={'/signup'}> <a href=''>SIGNUP</a></Link>
        <Link to={'/login'}><a href=''>LOGIN</a></Link>
      </div>
    </div>);
  }
}
export default Header;
