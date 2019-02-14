import React, {Component} from 'react';

import './Step.css'

export default class Step extends Component {

    handleClick = () => {
        const {number, isClickable, onClick} = this.props;
        if (isClickable) {
           onClick(number)
        }
    }

    render () {
        return (
            <div className={'step' + (this.props.isSelected ? ' step-selected' : (this.props.isClickable ? ' step-clickable' : ''))} onClick={this.handleClick}>
                <p className='step__number'>{this.props.number}</p>
                <p className='step__title'>{this.props.children}</p>
            </div>
        )
    }
}