import React, {Component} from 'react';
import Phone from "./Phone.component";
import * as ApplicationAction from '../action/Application.action';
import DataFeedStore from '../store/DataFeed.store';


class Layout extends Component {
  constructor () {
    super();
    this.state = {
      title: 'Welcome to DOJO'
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    const layoutStyle = {
      backgroundColor: '#f6f8fa'
    };
    ApplicationAction.start(this.props.params.id);

    return (
      <div style={layoutStyle}>
        
        <Phone title={this.state.title}/>
      </div>
    );
  }
}
export default Layout;
