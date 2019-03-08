
export default {
  namespace: 'example1',
  state: {
    currentRoute: '',
    typeList: [
      {type: 'news', name: '新闻动态', active: true},
      {type: 'inform', name: '通知公告'},
      {type: 'media', name: '媒体报道'},
    ],
  },
  reducers: {
    update(state, {payload}) {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: {
  },
}

