import React from 'react';

class Channel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props.channel}</li>
        );
    }
}

export default Channel;