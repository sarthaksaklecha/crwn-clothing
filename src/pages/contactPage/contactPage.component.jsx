import React from 'react';
import './contactPage.styles.scss'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button'

class contactPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name :'',
            email : '',
            subject : '',
            message : ''
        }
    }
    handleChange = (e) =>{
    const {name,value} = e.target;
    this.setState({
        [name] : value
    })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            name :'',
            email : '',
            subject : '',
            message : ''
        });
        alert("Message sent successfully");
    } 
    render(){
        const { name,email,subject,message } = this.state;
        return(
        <div className='contact-page'>
            <h1 className='title'> Contact Us </h1>
            <div className='form-container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='input-container'>
                        <div className='form-input'>
                            <FormInput handleChange = {this.handleChange} value={name} type='text' name ='name' label='Full Name'/>
                        </div>
                        <div className='form-input'>
                            <FormInput handleChange = {this.handleChange} value={email} type='email' name ='email' label='Email'/>
                        </div>
                        <div className='form-input'>
                            <FormInput handleChange = {this.handleChange} value={subject} type='text' name ='subject' label='Subject'/>
                        </div>
                        <div className='form-input message'>
                            <FormInput handleChange = {this.handleChange} value={message} type='text' name ='message' label='Message'/>
                        </div>
                        <div className='form-input'>
                            <CustomButton type='submit' value='SEND'>SEND</CustomButton>
                        </div>
                    </div>
                </form>
            </div>
        </div>)
    }
}

export default contactPage