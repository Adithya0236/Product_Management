import React, { Component } from "react";
import {Link} from 'react-router-dom';
class Dashboard extends Component {
  render() {
    return <div>
      <div class='text'>DASHBOARD</div>
        <div class='viewbtn'>
        <table>
      <tbody>
        <tr>
      <td><Link to={'/view2'}> <input type="submit" value="VIEW PRODUCTS"></input></Link></td>
      <td/>
      <td/>
      <td><Link to={'/add'}><input type="submit" value="ADD PRODUCT"></input></Link></td>
      </tr>
      </tbody>
      </table></div>
    </div>;

  }
}
export default Dashboard;
