import {
	StackNavigator,
	TabNavigator
} from 'react-navigation';

import HomePage from '../components/HomePage'
import EditPage from '../components/EditPage'

export const Stack = StackNavigator({
	HomePage:{
		screen: HomePage
	},
	EditPage:{
		screen:EditPage
	}
})
