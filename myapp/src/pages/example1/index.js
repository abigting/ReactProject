import styles from './index.less';
import {Template} from './components';
import {connect} from 'dva';

function Index({location, example1, dispatch}) {
  function getContent(type){
    switch (type) {
      case 'news':
        return <div>新闻动态</div>;
      case 'inform':
        return <div>通知公告</div>;
      case 'media':
        return <div>媒体报道</div>;
      default:
        break;
    }
  }

  const level1 = {
    name: '资讯中心',
    url: 'example1'
  };

  let currentType=location.query.type;
  return (
      <div className={styles.center}>
        <Template level1={level1} typeList={example1.typeList} getContent={()=>getContent(currentType)}/>
      </div>
  )
}

function mapStateToProps({example1}) {
  return {
    example1: example1
  };
}

export default connect(mapStateToProps)(Index);
