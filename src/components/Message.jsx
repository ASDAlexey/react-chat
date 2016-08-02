import React from 'react';
import mui from 'material-ui'

class Message extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li>{this.props.message}</li>
        );
    }
}

export default Message;