import React, {Component} from 'react';
import {
	View,
	Button,
	Text
} from 'react-native';

export default class HomePage extends Component{
	goToPage(){
		this.props.navigation.navigate('AddPage');
	}

	render (){
		return(
			<View>
				<Button onPress={() => {this.goToPage()}} title="Masuk"/>
			</View>
		)
	}
}