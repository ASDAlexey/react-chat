import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';

@decorate(alt)
class ChatStore {
    constructor() {
        this.state = {
            user: null
        }
    }

    @bind(Actions.login)
    login(user) {
        this.setState({ user })
    }
}

export default alt.createStore(ChatStore, 'ChatStore');