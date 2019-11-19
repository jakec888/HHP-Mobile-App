import React, {Component} from 'react';
import {connect} from 'react-redux';

import AboutUs from '../../views/AboutUs';

export class AboutUsScreen extends Component {
  render() {
    return <AboutUs />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsScreen);
