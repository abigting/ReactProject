import {Layout, Icon} from 'antd';
import styles from './leftPart.less';
import {Link} from "react-router-dom";
import {Component} from 'react';
import { withRouter } from 'react-router';

const {Sider} = Layout;

class LeftPart extends Component {
  componentDidMount() {
  }

  render() {
    const {typeList, level1, location} = this.props;
    return (
      <Sider style={{border: 0, width: 208, flex: '0 0 208px', padding:'20px 0 20px 0'}}>
        <div className={styles.left} key="allservices">
          {/*<Link to={`/service/all`}>*/}
          <h5
            style={{
              fontSize: '18px',
              color: '#999999',
              display: 'inline-block',
              position: 'relative',
              top: '3px',
              padding: '0 30px',
              fontWeight:'800'
            }}>
            {level1.name}
          </h5>
          {/*</Link>*/}
        </div>
        <ul className={styles.menu}>
          {
            typeList.map(s =>
              <Link to={`?type=${s.type}`} key={s.type}>
                <li key={s.type}
                    className={`${location.query.type === s.type || location.query.from === s.type ? styles.active : ''}`}>

                  {s.name}
                  {location.query.type === s.type ?
                    <Icon type="right"
                          style={{fontSize: 16, color: '#ffffff', float: 'right', margin: '16px 0'}}/> : null}
                </li>
              </Link>
            )
          }
        </ul>
      </Sider>
    )
  }
}
export default withRouter(LeftPart)
