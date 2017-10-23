//The Action Creator
export const doSomething = (type, data) => {
  if (type == 'EDIT'){
    return {
      type: 'EDIT',
      payload: data
    }
  }else if (type == 'REMOVE'){
    return {
      type: 'REMOVE',
      payload: data
    }
  }
}
