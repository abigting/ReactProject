import React, {Component} from 'react';

import {Button, message} from 'antd'

import BlockColor from '../components/BlockColor'


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
        message.error(`Failed to update theme`);
      });
  }

  render() {
    return (
      <div>
        <main style={{textAlign: 'center', padding:'100px'}}>
          <Button type="primary" style={{marginBottom: 50}}>antd组件变色</Button>
          <div>
            <div>
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
                onChange={this.colorChange}
              />
            </div>
          </div>
        </main>
      </div>
    )
  }
}



