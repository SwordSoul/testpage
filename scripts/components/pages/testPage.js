import React from 'react';
import {branch} from 'baobab-react/decorators';

//decorators allow to make a customized query for the data store
@branch({
  cursors: {
    salesForceAdded: ['data', 'users', 0, 'salesForce', 'added']
  }
})
class TestPage extends React.Component {
  render() {
    return (
      <div>{this.props.salesForceAdded}</div>
    );
  }
}

export {TestPage as default};
