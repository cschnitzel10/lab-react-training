import React, { Component } from 'react';

class Greetings extends Component  {

    setLanguage = () => {
        let value = 'Hallo'
        switch (this.props.lang) {
            case 'de':
                value = 'Hallo'
                break
            case 'fr':
                value = 'Bounjour'
                break
            default:
                value = 'Hallo'
        }

        return value
    }


    render() {
        return (
            <div>
                {this.setLanguage()} {this.props.children}
            </div>
        )
    }
}


export default Greetings 
