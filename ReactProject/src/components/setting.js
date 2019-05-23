import React from 'react';
import { message, Icon, Drawer, Divider, Button} from 'antd';
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
      case 'headColor':
        window.less.modifyVars(
          {
            '@heading-color': val,
          }
        ).then(() => {
          message.success('切换成功')
        })
          .catch(error => {
            message.error(`切换失败`);
          });
        break;
      case 'primaryColor':
        window.less.modifyVars(
          {
            '@primary-color': val,
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
            '@heading-color': '#fa541c',
            '@primary-color': '#fa541c',
            '@btn-primary-bg': '#fa541c',
            '@secondary-color': '#fa541c',
            '@thirdly-color': '#ff7a45',
            '@fourthly-color': '#ffc069',
            'layout-header-background': '#ffbb96',
          }
        ).then(() => {
          message.success('切换成功')
        })
          .catch(error => {
            message.error(`切换失败`);
          });
        break;
      case 'theme1':
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

  // 重置颜色
  function resetTheme(){
    let initialValue= {
      '@primary-color': '#1890ff'
    };
    window.less
      .modifyVars(initialValue)
      .catch(error => {
        message.error(`重置失败`);
      });
  }
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
          onChange={e=>colorChange(e)}
        />
      </div>
      <div className={styles.changeColor}>
        <p onClick={()=>themeChange(currentColor, 'primaryColor')}>设置@primary-color</p>
        <p onClick={()=>themeChange(currentColor, 'layoutBgColor')}>设置@layout-header-background</p>
        <p onClick={()=>themeChange(currentColor, 'headColor')}>设置@heading-color</p>
      </div>
      <div className={styles.changeTheme}>
        <Divider>切换主题</Divider>
        <p onClick={()=>themeChange(currentColor, 'theme0')}>主题一</p>
        <p onClick={()=>themeChange(currentColor, 'theme1')}>主题二</p>
      </div>
      <div style ={{textAlign:'center'}}>
        <Button type='primary' onClick={()=> resetTheme()}>重置主题色</Button>
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

