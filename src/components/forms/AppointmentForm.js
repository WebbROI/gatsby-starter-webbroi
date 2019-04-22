import React, { Component } from 'react'
import axios from 'axios'
import SimpleReactValidator from 'simple-react-validator'
import {
  Form,
  Message,
} from 'semantic-ui-react'

const API_PATH = '/api/contact/index.php';

class AppointmentForm extends Component {
  constructor(props) {
    super(props)
    this.validator = new SimpleReactValidator()
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      date: '',
      services: '',
      mailSent: false,
      mailError: null,
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();

    if (this.validator.allValid()) {
      axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: this.state
      })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => {
        this.setState({ 
          mailError: error.message 
        })
      })
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  }

  render() {
    return (
      <Form className='form-container' size='large' action='#' success error>        
        <Form.Input
          fluid
          type='text'
          id='fname'
          name='fname'
          label='First name'
          placeholder='First name'
          value={this.state.fname}
          onChange={e => this.setState({ fname: e.target.value })}
          required
        />
        {this.validator.message('first_name', this.state.fname, 'required|alpha')}
        <Form.Input
          fluid
          type='text'
          id='lname'
          label='Last name'
          placeholder='Last name'
          value={this.state.lname}
          onChange={e => this.setState({ lname: e.target.value })}
          required
        />
        {this.validator.message('last_name', this.state.lname, 'required|alpha')}
        <Form.Input
          fluid
          type='email'
          id='email'
          label='Email'
          placeholder='Email'
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
          required
        />
        {this.validator.message('email', this.state.email, 'required|email')}
        <Form.Input
          fluid
          type='tel'
          id='phone'
          label='Phone'
          placeholder='Phone'
          value={this.state.phone}
          onChange={e => this.setState({ phone: e.target.value })}
          required
        />
        {this.validator.message('phone', this.state.phone, 'required|phone')}        
        <Form.Input 
          fluid
          type='date'
          id='date'
          label='Date'
          value={this.state.date}
          onChange={e => this.setState({ date: e.target.value })}
          required 
        />
        {this.validator.message('date', this.state.date, 'required')}
        <Form.TextArea 
          id='services'
          label='Services'
          placeholder='Let us know what services you need...'
          value={this.state.services}
          onChange={e => this.setState({ services: e.target.value })}
          required 
        />
        {this.validator.message('services', this.state.services, 'required|max:140')}
        <Form.Button 
          type='submit' 
          onClick={e => this.handleFormSubmit(e)} 
          size='big' 
          color='red'
        >
          Request Appointment
        </Form.Button>

        <div className='form-message-container'>
          {this.state.mailSent &&
            <Message success className='appointment-form' header='Thank You!' content="Your request has been sent. We will contact you soon." />
          }
          {this.state.mailError &&
            <Message error header='Oops!' content='Sorry, there was a problem sending your request. Please refresh browser and try again. If problem persists, please use other contact channels. Thanks!' />
          }
        </div>
      </Form>
    )
  }
}

export default AppointmentForm