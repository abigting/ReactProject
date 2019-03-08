import {Component} from 'react';
import { withRouter } from 'react-router';

class RightPart extends Component {

  componentDidMount() {
   console.log( this.props.location,' this.props.location');
  }

  render() {
    let {getContent}=this.props;

    return(
      <div style={{width:'100%', padding:'20px', background:'#fff'}}>
        {
          getContent()
        }
      </div>
    )
  }
}
export default withRouter(RightPart)
