import React, { Component } from 'react'
import { connect } from 'react-redux'

import WhatIsLupus from '../../views/WhatIsLupus'

export class LupusScreen extends Component {
    render() {
        return <WhatIsLupus />
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LupusScreen)
