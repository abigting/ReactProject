import React, {Component} from 'react';
import {Button, message} from 'antd';
import {BlockColor} from '../components';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.colorChange = this.colorChange.bind(this);
  }

  colorChange(val) {
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
  }

  render() {
    return (
      <div>
        <main style={{textAlign: 'center', padding: '100px', width: '600px', margin: 'auto'}}>
          <div>
            <BlockColor
              onChange={this.colorChange}
            />
          </div>
          <Button type="primary" style={{marginTop: 50}}>antd组件变色</Button>
        </main>
      </div>
    )
  }
}



