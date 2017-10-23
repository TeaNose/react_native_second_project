import React, {Component} from 'react';
import {
	Text,
	View,
	Button
} from 'react-native';
import {Stack} from './route/Route';
import allReducers from './reducers/MainReducer';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

//create Store
const store = createStore(allReducers)

export default class App extends Component{
	render(){
		return (
			<Provider store={store}>
				<Stack/>
			</Provider>
		);
	}
}
