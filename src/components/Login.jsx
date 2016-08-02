import React from 'react';
import Actions from '../actions';


class Login extends React.Component {

    onClick() {
        Actions.login();
    }

    render() {
        return (
            <dic style={{
                'maxWidth': '800px',
                'margin': '30px auto',
                'padding': '50px'
            }}>
                <div style={{
                    'textAlign': 'center'
                }}>
                    To start chatting away, please log in with your Google account.
                </div>

                <button onClick={this.onClick.bind(this)}>Log in with Google</button>
            </dic>

        );
    }
}


module.exports = Login;
