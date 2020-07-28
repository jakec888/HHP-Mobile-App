import React, {Component} from 'react';
import {connect} from 'react-redux';

import WhyUs from '../../views/WhyUs';

export class WhyUsScreen extends Component {
   render() {
      return <WhyUs />;
   }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WhyUsScreen);
