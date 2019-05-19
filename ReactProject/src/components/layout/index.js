import React from 'react';
import HeaderLayout from './header';
import FooterLayout from './footer';
import {Layout, message} from 'antd';
import Drawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import BlockColor from "../BlockColor";
import {connect} from 'dva';

const { Content} = Layout;

function MainLayout({children, mobileOpen}) {

  function colorChange(val) {
    window.less.modifyVars(
      {
        '@primary-color': val,
        '@link-color': val,
        '@btn-primary-bg': val,
      }
    ).then(() => {
      message.success('切换成功')
    })
      .catch(error => {
        message.error(`Failed to update theme`);
      });
  }

  function showOrHide({mobileOpen}) {
    console.log(mobileOpen)
    const {dispatch} = this.props;
    dispatch({type: "layout/update", payload: {mobileOpen}});
  }
  return (<Layout>
    <HeaderLayout/>
    <Content style={{ padding: '24px 50px' }}>
    <div style={{background:'#fff', padding:'20px', minHeight: ' calc(100vh - 181px)'}}>{children}</div>
    </Content>
    <FooterLayout/>

    <Drawer
      width="240px"
      placement="right"
      // open={mobileOpen}
      // onIconClick={() =>showOrHide({mobileOpen: !mobileOpen})}
      level={null}>
      <div style={{textAlign: 'center', padding:'10px'}}>
        <BlockColor
          list={[
            {
              key: '#f5222d',
              title: '薄暮',
            },
            {
              key: '#fa541c',
              title: '火山',
            },
            {
              key: '#faad14',
              title: '日暮',
            },
            {
              key: '#13c2c2',
              title: '明青',
            },
            {
              key: '#52c412',
              title: '极光青',
            },
            {
              key: '#1890ff',
              title: '拂晓蓝（默认）',
            },
            {
              key: '#2f54eb',
              title: '极客蓝',
            },
            {
              key: '#722ed1',
              title: '酱紫',
            },
          ]}
          onChange={e=>colorChange(e)}
        />
      </div>
    </Drawer>

  </Layout>)
}

function mapStateToProps({layout}) {
  return {
    mobileOpen: layout.mobileOpen
  };
}

export default connect(mapStateToProps)(MainLayout);

