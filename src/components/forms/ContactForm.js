import React, { Component } from 'react'
import axios from 'axios'
import SimpleReactValidator from 'simple-react-validator'
import {
  Form,
  Message,
} from 'semantic-ui-react'

const API_PATH = '/api/contact/index.php';

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.validator = new SimpleReactValidator()
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
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
        <Form.TextArea 
          id='message'
          label='Message'
          placeholder='Type your message here...'
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
          required 
        />
        {this.validator.message('message', this.state.message, 'required|max:500')}
        <Form.Button 
          type='submit' 
          onClick={e => this.handleFormSubmit(e)} 
          size='big' 
          color='red'
        >
          Send Message
        </Form.Button>

        <div className='form-message-container'>
          {this.state.mailSent &&
            <Message success className='appointment-form' header='Thank You!' content="Your message has been sent. We will contact you soon." />
          }
          {this.state.mailError &&
            <Message error header='Oops!' content='Sorry, there was a problem sending your message. Please refresh browser and try again. If problem persists, please use other contact channels. Thanks!' />
          }
        </div>
      </Form>
    )
  }
}

export default ContactForm