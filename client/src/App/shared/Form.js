import React, { Component } from 'react';
import {connect} from "react-redux";
import {addContacts} from "../../redux/contacts.js";
import { Form, TextArea } from 'semantic-ui-react';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        var { firstName, lastName, email, phone, comments } = props;
        this.state = {
            inputs: {
                firstName: firstName || "",
                lastName: lastName || "",
                email: email || "",
                phone: phone || "",
                comments: comments || "",
                
            }
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        let {name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    clearInputs() {
        this.setState({
            inputs: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                comments: ""
                
            }
        })
    }
    handleSubmit(e){
        e.preventDefault();
        let {addContacts} =  this.props;
        addContacts(this.state.inputs);
        console.log(this.props)
        this.clearInputs(this.props);
         
    }
    render(){
    
        let { firstName, lastName, email, phone , comments} = this.state.inputs;
        return (
            <div>
                <div className="contactForm">
                    <div className="form-overlay">
                        <Form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <Form.Group widths={1} >
                                    <Form.Input onChange={this.handleChange} value={firstName} name="firstName" type="text" label="First Name" placeholder="First Name" />
                                    <Form.Input label="Last Name" onChange={this.handleChange} value={lastName} name="lastName" type="text" placeholder="Last Name" />
                                </Form.Group>
                                <Form.Group widths={1}>
                                    <Form.Input label="Email" onChange={this.handleChange} value={email} name="email" type="text" placeholder="Email" />
                                    <Form.Input label="Phone" onChange={this.handleChange} value={phone} name="phone" type="text" placeholder="Phone" />
                                </Form.Group>
                                <Form.TextArea width={13} label="Comments" control={TextArea} className="input comment" onChange={this.handleChange} value={comments} name="comments" type="text" placeholder="Comments" />
                                <button color="white" className="submit">Send</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {contacts: state.contacts}
}

export default connect(mapStateToProps, {addContacts}) (ContactForm);