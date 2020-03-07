import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
class Homepage extends Component {
  render() {
    return <div>
      <Header />
      <center><div >Launched in 2004, Gadget World is everything related to gadgets, gizmos, and cutting-edge consumer electronics. Our aim has always been to provide first class customer service with value for money innovative products that completely satisfy even the most demanding customer.</div></center>
      <Footer />


    </div>;
  }
}
export default Homepage;
