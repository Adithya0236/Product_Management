import React, { Component } from "react";
import {Link} from "react-router-dom";
import Axios from 'axios';
class Add extends Component {
  constructor(props){
    super();
    this.state={
      pname:"",
       quantity:"",category:"",
      supplier:"",desc:""

    }

  }
  handleevent=(e)=>
  {
     console.log(this.props);
     console.log(document.getElementById('pname').value);

    e.preventDefault();
this.state.pname = document.getElementById('pname').value;
this.state.quantity = document.getElementById('quantity').value;
this.state.category = document.getElementById('category').value;
this.state.supplier = document.getElementById('supplier').value;
this.state.desc = document.getElementById('desc').value;

this.setState(this.state);

Axios.post("http://localhost:5001/productdetail",this.state)
this.props.history.push('/dashboard')
}
  render() {
    return (
    <div class='content'>
    <div class='container'>
     <h1>Product Name:<input id='pname' type='text'></input></h1>
      <h1>Quantity: <input id='quantity' type='text'></input></h1>
      <h1>Category:<input id='category' type='text'></input><br /></h1>
      <h1>Supplier:<input id='supplier' type='text'></input><br /></h1>
      <h1>Description:<input id='desc' type='text'></input><br /></h1>

    <center><Link to="/dashboard"> <input type='submit' value='ADD' onSubmit={this.handleevent.bind(this)}></input></Link></center>
      
    </div>
    </div>);
  }
}
export default Add;



