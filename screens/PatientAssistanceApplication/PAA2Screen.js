import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    updateApplicant,
    updateAgeRange,
    updateLocation,
    updateReference,
    updateService,
    updateIssue,
} from '../../redux/actions/ppa.actions'

import PAA2Form from '../../views/PAA2Form'

export class PAA2Screen extends Component {
    onChangeApplicant = applicant => {
        this.props.updateApplicant(applicant)
    }

    onChangeAgeRange = age => {
        this.props.updateAgeRange(age)
    }

    onChangeReference = reference => {
        this.props.updateReference(reference)
    }

    onChangeLocation = location => {
        this.props.updateLocation(location)
    }

    onChangeService = service => {
        this.props.updateService(service)
    }

    onChangeIssue = issue => {
        this.props.updateIssue(issue)
    }

    onSubmitUserData = event => {
        this.props.navigation.navigate('Part3')
    }

    render() {
        return (
            <PAA2Form
                onChangeApplicant={this.onChangeApplicant}
                onChangeAgeRange={this.onChangeAgeRange}
                onChangeReference={this.onChangeReference}
                onChangeLocation={this.onChangeLocation}
                onChangeService={this.onChangeService}
                onChangeIssue={this.onChangeIssue}
                onSubmitUserData={this.onSubmitUserData}
                applicant={this.props.applicant}
                age={this.props.age}
                location={this.props.location}
                reference={this.props.reference}
                service={this.props.service}
                issue={this.props.issue}
            />
        )
    }
}

const mapStateToProps = state => ({
    applicant: state.PPA.applicant,
    age: state.PPA.age,
    location: state.PPA.location,
    reference: state.PPA.reference,
    service: state.PPA.service,
    issue: state.PPA.issue,
})

const mapDispatchToProps = {
    updateApplicant: updateApplicant,
    updateAgeRange: updateAgeRange,
    updateLocation: updateLocation,
    updateReference: updateReference,
    updateService: updateService,
    updateIssue: updateIssue,
}

export default connect(mapStateToProps, mapDispatchToProps)(PAA2Screen)
