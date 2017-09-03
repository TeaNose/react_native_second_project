import React, {Component} from 'react';
import {
	Text,
	View,
	Button,
	TextInput
} from 'react-native';

export default class AddPage extends Component{
	constructor(){
		super();
		this.state = {
			num1: '0',
			num2: '0',
			result: '0'
		}
	}

	addNumbers(){
		let result =  parseInt(this.state.num1) + parseInt(this.state.num2);
		this.setState({result: result});
	}

	render(){
		return(
			<View>
				<TextInput 
					onChangeText={(text) => {this.setState({num1: text})}}
					value={this.state.num1}
				/>
				<TextInput
					onChangeText={(text) => {this.setState({num2: text})}}
					value={this.state.num2}
				/>
				<Button onPress={() => {this.addNumbers()}} title='Hitung'/>
				<Text>{this.state.result}</Text>
			</View>
		);
	};
}
