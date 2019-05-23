import React from 'react';
import { message, Icon, Drawer, Divider} from 'antd';
import 'rc-drawer/assets/index.css';
import BlockColor from "./BlockColor";
import styles from './setting.less';
import {connect} from 'dva';

function Setting({collapse, dispatch, currentColor}) {

  function themeChange( val,type) {
    switch (type){
      case 'layoutBgColor':
        window.less.modifyVars(
          {
            '@layout-header-background': val,
          }
        ).then(() => {
          message.success('切换成功')
        })
          .catch(error => {
            message.error(`切换失败`);
          });
        break;
      case 'formColor':
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
            message.error(`切换失败`);
          });
        break;
      case 'theme0':
        window.less.modifyVars(
          {
            '@primary-color': '#364768',
            '@btn-primary-bg': '#364768',
            '@layout-header-background': '#314659',
          }
        ).then(() => {
          message.success('切换成功')
        })
          .catch(error => {
            message.error(`Failed to update theme`);
          });
        break;
      case 'theme1':
        window.less.modifyVars(
          {
            '@primary-color': 'rgb(47, 194, 91)',
            '@btn-primary-bg': 'rgb(19, 194, 194)',
            '@layout-header-background': 'rgb(19, 194, 194)',
          }
        ).then(() => {
          message.success('切换成功')
        })
          .catch(error => {
            message.error(`切换失败`);
          });
        break;
      default:
        break;
    }

  }


  function colorChange (value) {
    dispatch({type: "layout/update", payload: {currentColor: value}});
  };


  function togglerContent()  {
    dispatch({type: "layout/update", payload: {collapse: !collapse}});
  };

  return (
    <Drawer
      mask={false}
      visible={collapse}
      width={300}
      onClose={()=>togglerContent()}
      placement="right"
      handler={
        <div className={styles.handle} onClick={()=>togglerContent()}>
          <Icon
            type={collapse ? 'close' : 'setting'}
            style={{
              color: '#fff',
              fontSize: 20,
            }}
          />
        </div>
      }
      style={{
        zIndex: 999,
      }}
    >
      <div className={styles.colorBox}>
        <Divider>选择颜色</Divider>
        <BlockColor
          value={currentColor}
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
            {
              key: '#364768',
              title: '浅紫',
            }
          ]}
          onChange={e=>colorChange(e)}
        />
      </div>
      <div className={styles.changeColor}>
        <p onClick={()=>themeChange(currentColor, 'layoutBgColor')}>设置顶部导航栏背景色</p>
        <p onClick={()=>themeChange(currentColor, 'formColor')}>设置Active颜色</p>
      </div>
      <div className={styles.changeTheme}>
        <Divider>切换主题</Divider>
        <p onClick={()=>themeChange(currentColor, 'theme0')}>主题一</p>
        <p onClick={()=>themeChange(currentColor, 'theme1')}>主题二</p>
      </div>
    </Drawer>
  )
}

function mapStateToProps({layout}) {
  return {
    collapse: layout.collapse,
    currentColor: layout.currentColor
  };
}

export default connect(mapStateToProps)(Setting);

