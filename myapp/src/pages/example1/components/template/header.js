import {Breadcrumb, Icon} from 'antd';
import styles from './header.less';
import {Link} from "react-router-dom";
import { withRouter } from 'react-router';
import {Component} from "react";

class Header extends Component{

render() {
  let {level1, typeList, location}=this.props;

  let routers = {level1: {name: '首页', url: `/`},level2:{name: level1.name, url: level1.url}};
  routers={...routers, children:{name:location.query.type, url:`/${location.pathname}?type=${location.query.type}`}};

  return (
    <div>
      <Breadcrumb className={styles.header}>
        <Breadcrumb.Item>
          <Icon type="home" theme="filled" style={{marginRight: '8px'}}/>
          <Link to={routers.level1.url}>
            {routers.level1.name}
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={routers.level2.url}>
            {routers.level2.name}
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={routers.children.url}>
            {routers.children.name}
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}
}

export default withRouter(Header);
