import React from 'react';
import HeaderLayout from './header';
import FooterLayout from './footer';
import {Layout, message} from 'antd';
import 'rc-drawer/assets/index.css';
import {connect} from 'dva';
import Setting from '../setting';

message.config({
  maxCount: 1,
});

const { Content} = Layout;

function MainLayout({children}) {

  return (<Layout>
    <HeaderLayout/>
    <Content style={{ padding: '24px 50px' }}>
    <div style={{background:'#fff', padding:'20px', minHeight: ' calc(100vh - 181px)'}}>{children}</div>
    </Content>
    <FooterLayout/>
    <Setting/>>
  </Layout>)
}

function mapStateToProps({layout}) {
  return {
    collapse: layout.collapse,
    currentColor: layout.currentColor
  };
}

export default connect(mapStateToProps)(MainLayout);

