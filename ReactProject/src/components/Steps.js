import React, {Component} from 'react';
import styles from './Steps.less';
import { Row, Col  } from 'antd';


export default class Steps extends Component{
  constructor(props) {
    super(props);
    this.state={
      list:[0,1,2,3,4,5,6]
    }
  }
  render(){
    return(
      <div>
        <Row>
          <Col span={24}>
            <div className={styles.form}>
              <div className={styles.formHeader}>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className={styles.formBody}>
                <ul>
                  {
                    this.state.list.map(s=>
                      <li key={s}></li>
                    )
                  }
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
