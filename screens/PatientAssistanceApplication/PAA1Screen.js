import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
   updateEmail,
   updateFirstName,
   updateLastName,
} from '../../redux/actions/ppa.actions';

import PAA1Form from '../../views/PAA1Form';

export class PAA1Screen extends Component {
   onChangeEmail = email => {
      this.props.updateEmail(email);
   };

   onChangeFirstName = first_name => {
      this.props.updateFirstName(first_name);
   };

   onChangeLastName = last_name => {
      this.props.updateLastName(last_name);
   };

   onSubmitUserData = event => {
      this.props.navigation.navigate('Part2');
   };

   render() {
      return (
         <PAA1Form
            onChangeEmail={this.onChangeEmail}
            onChangeFirstName={this.onChangeFirstName}
            onChangeLastName={this.onChangeLastName}
            onSubmitUserData={this.onSubmitUserData}
            email={this.props.email}
            first_name={this.props.first_name}
            last_name={this.props.last_name}
         />
      );
   }
}

const mapStateToProps = state => ({
   email: state.PPA.email,
   first_name: state.PPA.first_name,
   last_name: state.PPA.last_name,
});

const mapDispatchToProps = {
   updateEmail: updateEmail,
   updateFirstName: updateFirstName,
   updateLastName: updateLastName,
};

export default connect(mapStateToProps, mapDispatchToProps)(PAA1Screen);
