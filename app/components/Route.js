import {
	StackNavigator,
	TabNavigator
} from 'react-navigation';

import HomePage from './HomePage'
import AddPage from './AddPage'
import SubtractPage from './SubtractPage'
import MultiplyPage from './MultiplyPage'
import DividePage from './DividePage'

export const Tab = TabNavigator({
	AddPage:{
		screen: AddPage
	},
	SubtractPage:{
		screen: SubtractPage
	},
	MultiplyPage:{
		screen: MultiplyPage
	},
	DividePage:{
		screen: DividePage
	}
})

export const Stack = StackNavigator({
	HomePage:{
		screen: HomePage,
		//hide header navigation
		navigationOptions:({navigation}) => ({
			header:false
		})
	},
	Tab:{
		screen: Tab
	}
})

