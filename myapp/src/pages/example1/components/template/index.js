import {Row, Layout} from 'antd';
import Header from './header';
import LeftPart from './leftPart';
import RightPart from './rightPart';
import {Component} from 'react';

export default class Index extends Component{

  render(){
    let { level1, typeList, getContent}=this.props;
    return (
      <div>
        <Header level1={level1} typeList={typeList}/>
        <Row>
          <Layout style={{margin: '20px 0 20px 0'}}>
            <LeftPart level1={level1} typeList={typeList}/>
            <RightPart getContent={getContent}/>
          </Layout>
        </Row>
      </div>
    )
  }
}

