import React, {Component} from 'react';
import {View,	Button,	Text,	FlatList,	StyleSheet,	TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {doSomething} from '../actions/UserTransactionAction';

function mapStateToProps(state){
	var {dataList} = state.userTransaction
	return{
		userList: state.userList,
		updatedDataList: dataList
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({doSomething: doSomething}, dispatch)
}

class HomePage extends Component{
	constructor(){
		super()
		this.state={
			data: []
		}
	}

	componentDidMount(){
		this.setState({data: this.props.userList})
	}

	componentWillReceiveProps(nextProps){
		// alert("nextProps: "+JSON.stringify(nextProps.dataList))
		this.setState({data: nextProps.updatedDataList})
	}

	removeData(item, index){
		let userList = this.state.data
		var data = {
			dataList: userList,
			key: item.key,
			name: item.name,
			index
		}
		this.props.doSomething('REMOVE', data)
	}

	renderRowItem(item, index){
		// alert(JSON.stringify(item))
		return(
			<View style={styles.rowContainer}>
				<Text style={{flex: 1, fontSize:20, fontWeight:'bold'}}>{item.name}</Text>
				<TouchableOpacity onPress={() => {this.props.navigation.navigate('EditPage', {data: item})}}>
					<Image source={{uri: 'https://vignette1.wikia.nocookie.net/lab-rats-elite-force/images/c/cb/Editing-edit-icon.png/revision/latest?cb=20160613223046'}} style={styles.icon}/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {this.removeData(item, index)}}>
					<Image source={{uri: 'https://maxcdn.icons8.com/Share/icon/Editing//delete1600.png'}} style={styles.icon}/>
				</TouchableOpacity>
			</View>
		)
	}

	render (){
		return(
			<View style={styles.mainContainer}>
				<FlatList
					data={this.state.data}
					renderItem={({item, index}) => this.renderRowItem(item, index)}
				/>
			</View>
		)
	}
}

export default connect (mapStateToProps, matchDispatchToProps)(HomePage)

const styles = StyleSheet.create({
	mainContainer:{
		flex: 1
	},
	rowContainer:{
		flexDirection: 'row'
	},
	icon:{
		width:20,
		height:20,
		marginLeft: 20
	}
})
