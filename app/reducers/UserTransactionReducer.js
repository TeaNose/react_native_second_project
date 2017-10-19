export default function (state = {}, action){
  switch (action.type){
    case 'EDIT':
      const payload = action.payload;
      var dataList = payload.dataList.slice(0)
      var data = {
        key: payload.key,
        name: payload.name
      }
      dataList[payload.key - 1] = data
      return {dataList}
    case 'REMOVE':
      payload = action.payload;
      dataList = payload.dataList.slice(0)
      data = {
        key: payload.key,
        name: payload.name
      }
      dataList.splice((payload.index), 1)
      return {dataList}
    default:
      return state
  }
}
