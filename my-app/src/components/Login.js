import React, {Component} from "react";
import LoginFormRedux from "./loginForm";


class Login extends Component{
    submit = (values) => {
        // print the form values to the console
        console.log(values)
      }
    render() {
    return <LoginFormRedux onSubmit={this.submit} />
    }
}
export default Login