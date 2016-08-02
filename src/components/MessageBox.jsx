import React from 'react';
import trim from 'trim';

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    onChange(evt) {
        this.setState({
            message: evt.target.value,
        });
    }

    onKeyUp(evt) {
        if (evt.keyCode === 13 && trim(evt.target.value) !== '') {
            evt.preventDefault();

            this.props.firebaseRef.database().ref('/messages').push({ message: this.state.message });

            this.setState({
                message: '',
            });
            console.log('send a new message: ', evt.target.value);
        }
    }

    render() {
        return (
            <div style={{
                maxWidth: 1200,
                margin: '30px auto',
                padding: 30,
                border: '1px solid #ccc'
            }}>
                <textarea
                    value={this.state.message}
                    onChange={this.onChange.bind(this)}
                    onKeyUp={this.onKeyUp.bind(this)}
                    style={{
                        width: '100%',
                        borderColor: '#d0d0d0',
                        resize: 'none',
                        borderRadius: 3,
                        minHeigth: 50,
                        fontSize: 50,
                        outline: 'none'
                    }}/>
            </div>
        );
    }
}

export default MessageBox;