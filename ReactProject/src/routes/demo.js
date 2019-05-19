import React, {Component} from 'react';
import Layout from '../components/layout';
import Steps from '../components/Steps';

export default class Demo extends Component{
  constructor(props) {
    super(props);
    // this.state({
    //
    // })
  }
  render(){
    return(
      <Layout>
        <h1>Change Theme Colors</h1>
          <Steps/>
      </Layout>
    )
  }
}
