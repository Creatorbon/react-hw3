import React, {Component} from 'react';
import './PersonalForm.css'

import Title from '../Title';

export default class PersonalForm extends Component {

    handleChangeForm = event => {
        const { onChangeForm } = this.props;
        onChangeForm (event.target.name, event.target.value);
    }
    
    render () {
        const {
            firstName,
            lastName,
            email,
        } = this.props;

        return (
            <div className='personal-form' data-test="personal-form">
                <Title />
                <input name='firstName' onChange={this.handleChangeForm} value={firstName} placeholder='First name'/> 
                <input name='lastName' onChange={this.handleChangeForm} value={lastName} placeholder='Last name'/> 
                <input name='email' onChange={this.handleChangeForm} value={email} placeholder='email'/> 
            </div>
        )
    }
}