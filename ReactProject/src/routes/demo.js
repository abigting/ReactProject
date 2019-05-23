import React, {Component} from 'react';
import {Layout, FormExample} from '../components';

export default class Demo extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state({
  //
  //   })
  // }

  render() {
    return (
      <Layout>
        <h1 style={{textAlign: 'center', margin: '0 0 40px 0'}}><b>Change Theme Colors</b></h1>
        <FormExample/>
      </Layout>
    )
  }
}
