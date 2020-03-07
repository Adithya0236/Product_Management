import React, { Component } from "react";
import axios from 'axios';
import Modal from './modal.js';
class View2 extends Component {
constructor(props){
  super(props);
  this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
  this.state = {
    requiredItem:0,

    pdetail : [],name:'',supplier:'',
  }
}




componentDidMount(){
  axios.get('http://localhost:5001/productdetail')
  .then(res=>{
    
    this.setState({pdetail:res.data})
    console.log(this.state.pdetail)
  })
}



replaceModalItem(index) {
  this.setState({
    requiredItem: index
  });
}

saveModalDetails(item) {
  const requiredItem = this.state.requiredItem;
  let tempbrochure = this.state.pdetail;
  tempbrochure[requiredItem] = item;
  this.setState({ pdetail: tempbrochure });
}

deleteItem(index) {
  let tempBrochure = this.state.pdetail;
  tempBrochure.splice(index, 1);
  this.setState({ pdetail: tempBrochure });
  var s=index+1
  axios.delete('http://localhost:5001/productdetail/',s)
  .then(res => {
    console.log("deleted");
})
}




render() {    
  
  console.log(this.state.pdetail)
  const requiredItem = this.state.requiredItem;
let modalData = this.state.pdetail[requiredItem];console.log(modalData)
  const pdetails = this.state.pdetail
  if(pdetails){
    return(
<div>
      <div><h1 class='header'>PRODUCT DETAILS</h1>
        {pdetails.map((item, index) => (
        <tr key={index}>
        <p><td><b>PRODUCT NAME : </b>{item.pname}</td></p>
        <p><td><b>PRODUCT QUANTITY :</b>{item.quantity}</td></p>
        <p><td><b>PRODUCT CATEGORY :</b>{item.category}</td></p>
        <p><td><b>PRODUCT SUPPLIERR :</b>{item.supplier}</td></p>
        <p><td><b>PRODUCT DESCRIPTION :</b>{item.desc}</td></p>
        
        <td>
         
          <button className="btn btn-danger" onClick={() => this.deleteItem(index)}>Delete</button>
        </td>
      </tr>
        ))
        }
      </div>
     


      
    )
  

    </div>
    )  
}
}
}

export default View2;