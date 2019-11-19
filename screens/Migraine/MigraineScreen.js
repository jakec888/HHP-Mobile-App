import React, {Component} from 'react';
import {connect} from 'react-redux';

import WhatIsMigraine from '../../views/WhatIsMigraine';

export class MigraineScreen extends Component {
  render() {
    return <WhatIsMigraine />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MigraineScreen);
