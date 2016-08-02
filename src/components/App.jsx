import React from 'react';
require('./app.styl');
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import firebase from 'firebase';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

injectTapEventPlugin();

class App extends React.Component {
    constructor() {
        super();

        var config = {
            apiKey: "AIzaSyBZaY7GcLbYbRbxDma8y8vjSNAyY7VV1Gc",
            authDomain: "react-3508c.firebaseapp.com",
            databaseURL: "https://react-3508c.firebaseio.com",
            storageBucket: "react-3508c.appspot.com",
        };
        this.firebaseRef = firebase.initializeApp(config);
    }

    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <AppBar title="Awesome Chat App"/>
                </MuiThemeProvider>
                <div style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    maxWidth: 1200,
                    width: '100%',
                    margin: '30px auto'
                }}>
                    <ChannelList />
                    <MessageList firebaseRef={this.firebaseRef}/>
                </div>
                <MessageBox firebaseRef={this.firebaseRef}/>
            </div>
        );
    }
}

export default App;
