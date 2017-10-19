import React, {Component} from 'react';
import {View, Button,	Text,	FlatList,	TextInput,	StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {doSomething} from '../actions/UserTransactionAction';

function mapStateToProps(state){
	return{
		data: state.userTransaction,
		userList: state.userList
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({doSomething: doSomething}, dispatch)
}

class EditPage extends Component{
	constructor(){
		super()
		this.state={
			key: '',
			name: '',
			dataList: []
		}
	}

	componentDidMount(){
		const {params} = this.props.navigation.state
		this.setState({key: params.data.key})
		this.setState({name: params.data.name})
		this.setState({dataList: this.props.userList})
	}

	editData(){
		this.props.doSomething('EDIT', this.state)
		this.props.navigation.goBack()
	}

	render (){
		return(
			<View style={styles.mainContainer}>
				<View style={styles.rowContainer}>
					<Text style={{marginRight:10}}>Name</Text>
					<TextInput
						style={{flex: 1}}
						value = {this.state.name}
						onChangeText = {(text) => this.setState({name: (text)})}
					/>
				</View>
				<Button title='Edit' onPress={() => this.editData()}/>
			</View>
		)
	}
}

export default connect (mapStateToProps, matchDispatchToProps)(EditPage)

const styles = StyleSheet.create({
	mainContainer:{
		flex:1,
	},
	rowContainer:{
		flexDirection: 'row',
		alignItems: 'center'
	}
})
