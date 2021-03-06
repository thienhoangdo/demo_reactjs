import React, {component} from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginFormRedux = props => {

    const { handleSubmit} = props
    return (
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
    )
  }


export default  reduxForm({
  form: 'LoginFormRedux'  // a unique identifier for this form
})(LoginFormRedux)
