export default {
  namespace: 'layout',
  state: {
    headerAffix: false,
    collapse: false,
    currentColor:'#1890FF'
  },
  reducers: {
    update(state, {payload}) {
      return {...state, ...payload}
    }
  }
}
