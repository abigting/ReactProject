export default {
  namespace: 'layout',
  state: {
    headerAffix: false,
    mobileOpen: false
  },
  reducers: {
    update(state, {payload}) {
      return {...state, ...payload}
    }
  }
}
