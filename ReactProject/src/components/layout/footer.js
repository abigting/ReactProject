import React, {Component} from 'react';
import styles from './footer.less';
import { Layout } from 'antd';

const { Footer} = Layout;


export default class FooterLayout extends Component{
  constructor(props) {
    super(props);
    // this.state={
  // }
  }
  render(){
    return(
      <Footer className={styles.footer} >Created by Fiona</Footer>
    )
  }
}
