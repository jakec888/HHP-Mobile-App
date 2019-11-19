import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updateReason, submitPPA} from '../../redux/actions/ppa.actions';

import PAA3Form from '../../views/PAA3Form';

export class PAA3Screen extends Component {
  onChangeReason = reason => {
    this.props.updateReason(reason);
  };

  onGoBack = event => {
    this.props.navigation.navigate('Part2');
  };

  onSubmitUserData = event => {
    this.props.submitPPA();
    alert('Submitted!');
  };

  render() {
    return (
      <PAA3Form
        onChangeReason={this.onChangeReason}
        onGoBack={this.onGoBack}
        onSubmitUserData={this.onSubmitUserData}
        reason={this.props.reason}
      />
    );
  }
}

const mapStateToProps = state => ({
  reason: state.PPA.reason,
});

const mapDispatchToProps = {
  updateReason: updateReason,
  submitPPA: submitPPA,
};

export default connect(mapStateToProps, mapDispatchToProps)(PAA3Screen);
