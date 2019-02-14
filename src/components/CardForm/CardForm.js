import React, {Component} from 'react';

import './CardForm.css'

export default class CardForm extends Component {

    handleChangeForm = event => {
        const {onChangeForm} = this.props
        onChangeForm(event.target.name, event.target.value)
    }
    
    componentWillUnmount = () => {}

    render () {
        const {
            cardNumber
        } = this.props;

        return (
            <div className='card-form' data-test='card-form'>
                <input name='cardNumber' placeholder='1111 2222 3333 4444' onChange={this.handleChangeForm} value={cardNumber}/>
            </div>
        )
    }
}