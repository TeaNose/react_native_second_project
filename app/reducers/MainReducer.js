import {combineReducers} from 'redux';
import UserListReducer from './UserListReducer';
import UserTransactionReducer from './UserTransactionReducer';

const allReducers = combineReducers({
  userList: UserListReducer,
  userTransaction: UserTransactionReducer
})

export default allReducers;
