import React, {PropTypes} from 'react';
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
import Login from './Login.jsx';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';

injectTapEventPlugin();

@connectToStores
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

    static childContextTypes = {
        name: PropTypes.object,
    };

    getChildContext() {
        return { firebaseRef: this.firebaseRef }
    }

    static getStores() {
        return [ChatStore]
    }

    static getPropsFromStores() {
        return ChatStore.getState();
    }

    render() {
        var view = <Login />;

        if (this.props.user) {
            view = (
                <div>
                    <div style={{
                        display: 'flex',
                        flexFlow: 'row wrap',
                        maxWidth: 1200,
                        width: '100%',
                        margin: '30px auto 30px'
                    }}>
                        <ChannelList />
                        <MessageList />
                    </div>
                    <MessageBox />
                </div>
            );
        }

        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <AppBar title="Awesome Chat App"/>
                </MuiThemeProvider>
                { view }
            </div>
        );
    }
}

export default App;
