import React, { Component } from "react";
import {Link} from "react-router-dom";
import Axios from 'axios';
class Signup extends Component {
  constructor(props){
    super();
    this.state={
      name:"",
      email:"",phno:"",
      pass:""

    }

  }
  handleevent=(e)=>
  {
     console.log(this.props);
     console.log(document.getElementById('email').value);
     console.log(document.getElementById('phno').value);
     console.log(document.getElementById('pass').value);
    e.preventDefault();
this.state.name = document.getElementById('name').value;
this.state.email = document.getElementById('email').value;
this.state.phno = document.getElementById('phno').value;
this.state.pass = document.getElementById('pass').value;
this.setState(this.state);
Axios.post("http://localhost:5002/posts",this.state)
this.props.history.push('/dashboard')
}
  render() {
    return (<div class='content'>
    <div class='container'>
     <h1>Name:<input id='name' type='text'></input></h1>
      <h1>Email: <input id='email' type='text'></input></h1>
      <h1>Phone Number:<input id='phno' type='text'></input><br /></h1>
      <h1>Password:<input id='pass' type='password'></input><br /></h1>

    <center><Link to="/dashboard"> <input type="submit" value="SIGN IN" onSubmit={this.handleevent.bind(this)}></input></Link></center>
  
    </div>
    </div>);
  }
}
export default Signup;



