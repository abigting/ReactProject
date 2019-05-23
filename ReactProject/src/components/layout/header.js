import React, {Component} from 'react';
import { Layout, Menu, Avatar} from 'antd';
import styles from './header.less';

const { Header } = Layout;

export default class HeaderLayout extends Component{
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
    };
  }

  render(){
    return(
      <Header style={{textAlign:'right'}} className={styles.header}>

        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          <Menu.Item key="4">
            <Avatar size="large" className={styles.name}>
              F
            </Avatar>
          </Menu.Item>
        </Menu>
      </Header>
    )
  }
}
