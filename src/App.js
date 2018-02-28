import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Routes from './Routes';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; 

class App extends Component {
    componentWillMount(){
        let config = {
            apiKey: "AIzaSyD3J0p9je0XXLhjQ-JuhkGzGrLT7XnfB1s",
            authDomain: "react-native-messenger-81faa.firebaseapp.com",
            databaseURL: "https://react-native-messenger-81faa.firebaseio.com",
            projectId: "react-native-messenger-81faa",
            storageBucket: "react-native-messenger-81faa.appspot.com",
            messagingSenderId: "725048052656"
          };
          firebase.initializeApp(config);
    }

    render () {
        return (

            <Provider store={createStore(reducers)}>
                <Routes />
            </Provider>

        ) 
    }
}
;
export default App;