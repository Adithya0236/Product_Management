
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
      }
      this.handlePassChange = this.handlePassChange.bind(this);
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.dismissError = this.dismissError.bind(this);
  }
  dismissError() {
    this.setState({ error: '' });
}

handleSubmit(event) {
    event.preventDefault();

    if (!this.state.email) {
        return this.setState({ error: 'Email required' });
    }

    else if (!this.state.password) {
        return this.setState({ error: 'Password required' });
    }
    else {
        this.setState({ error: '' });
        axios.get('http://localhost:5002/posts?email_like'+ this.state.email +'&pass_like='+ this.state.password ).then(resp => {

            console.log(resp.data);
            if(resp.data.length===0)
            {
                return this.setState({ error: 'INVALID EMAIL/PASSWORD' });
            }
            else
            {
                console.log(this.props.history);
                this.props.history.push("/dashboard")
            }
        }).catch(error => {

            console.log(error);
        });
    }
}

handleUserChange(event) {
    this.setState({
        email: event.target.value,
    });
};

handlePassChange(event) {
    this.setState({
        password: event.target.value,
    });
}

    render() {
        return (<div class='content'>
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.error &&
                        <h3 data-test="error" onClick={this.dismissError}>
                            <button onClick={this.dismissError}>✖</button>
                            {this.state.error}
                        </h3>
                    }
                    <h1>Email:<br /><input type='text' data-test="email" value={this.state.email} onChange={this.handleUserChange}></input></h1>
                    <h2>Password:<br /><input type='password' data-test="password" value={this.state.password} onChange={this.handlePassChange}></input></h2><br />
                   <center><input type='submit' value='LOG IN' /></center></form>

            </div>
            </div>
        );
    }
}

export default withRouter(Login);