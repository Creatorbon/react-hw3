import React, {Component} from 'react';
import './App.css'

import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import Step from '../Step';

export default class App extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: '',
    }

    handleChangeForm = (name, value) => {
        this.setState ({
            [name] : value
        })
    }

    handleClickNextForm = () => {
        this.setState({
            step: this.state.step + 1
        })
    }
    
    handleTabClick = (tabNumber) => {
        this.setState({
            step: tabNumber
        })
    }

    isFormCommitable = () => {
        switch (this.state.step) {
            case 1:
                return (this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.email.includes('@'))
            case 2: 
                return (this.state.cardNumber.length === 16)
            default: 
                return false
        }
    }

    renderForm = () => {
        const {
            firstName,
            lastName,
            email,
            cardNumber
        } = this.state;

        switch (this.state.step) {
            case 1:
                return (
                    <PersonalForm
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        onChangeForm={this.handleChangeForm} 
                    />
                )
            case 2: 
                return (
                    <CardForm
                        cardNumber={cardNumber}
                        onChangeForm={this.handleChangeForm}
                    />
                )
            case 3:
                return <p data-test="congratulations">Поздравляем!</p>;
            default:
                return <p>Ошибка!</p>;
        }
    }

    render () {
        return (
            <div className="container">
                <div className="tab-panel">
                    <Step number={1} isSelected={this.state.step === 1} children={'Personal info'} isClickable={this.state.step > 1} onClick={this.handleTabClick} />
                    <Step number={2} isSelected={this.state.step === 2} children={'Card info'} isClickable={this.state.step > 2} onClick={this.handleTabClick} />
                    <Step number={3} isSelected={this.state.step === 3} children={'Success!'} />
                </div>
                <div className='tab-panel'></div>
                <div className='form-content'>
                    {this.renderForm()}
                </div>        
                <div className='button-panel'>
                    <button className='button-next' onClick={this.handleClickNextForm} disabled={!this.isFormCommitable()} hidden={this.state.step === 3}>Next</button>
                </div>
            </div>
       )
    }
}