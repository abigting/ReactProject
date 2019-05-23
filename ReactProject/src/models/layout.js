export default {
  namespace: 'layout',
  state: {
    headerAffix: false,
    collapse: false,
    currentColor:'#1890ff'
  },
  reducers: {
    update(state, {payload}) {
      return {...state, ...payload}
    }
  }
}
