import React from 'react';
import {branch} from 'baobab-react/decorators';

@branch({
  cursors: {
    salesForceAdded: ['user', 1, 'salesForce', 'salesForceAdded']
  }
})
class 