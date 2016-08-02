import React from 'react';
import Message from './Message.jsx';
import _ from 'lodash';


class MessageList extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: {},
        };
    }

    componentWillMount() {
        this.props.firebaseRef.database().ref('/messages').on('child_added', (msg) => {
            if (!_.get(this.state.messages, 'msg.key')) {
                let msgVal = msg.val();
                msgVal.key = msg.key;
                this.state.messages[msgVal.key] = msgVal;
                this.setState({ messages: this.state.messages });
            }
        });

        this.props.firebaseRef.database().ref('/messages').on('child_removed', (msg) => {
            var key = msg.key;
            delete this.state.messages[key];
            this.setState({ messages: this.state.messages });
        });
    }

    render() {
        var messageNodes = _.values(this.state.messages).map((message, index)=> {
            return (
                <Message key={index} message={message.message}/>
            );
        });

        return (
            <ul style={{
                border: '1px solid #ccc',
                flexGrow: 2,
                marginLeft: 30
            }}>
                {messageNodes}
            </ul>
        );
    }
}

export default MessageList;