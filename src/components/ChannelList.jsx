import React from 'react';
import Channel from './Chanel.jsx'

class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [
                'Dogs',
                'Cats'
            ]
        };
    }

    render() {
        var channelNodes = this.state.channels.map((channel, index)=> {
            return (
                <Channel key={index} channel={channel}/>
            );
        });

        return (
            <ul style={{
                border: '1px solid #ccc',
                flexGrow: 1
            }}>
                {channelNodes}
            </ul>
        );
    }
}

export default ChannelList;