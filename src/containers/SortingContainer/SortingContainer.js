import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { func, string } from 'prop-types'

import Sorting from '../../components/Sorting'

import {
    setSorting,
} from '../../reducer/actions'

class SortingContainer extends Component {
    static propTypes = {
        fieldType: string,
        setSorting: func,
        sortDirection: string,
        sortType: string,
    }

    render() {

        const { fieldType, setSorting, sortDirection, sortType } = this.props

        return (
            <Sorting
                onSort={setSorting}
                sortDirection={sortDirection}
                fieldType={fieldType}
                sortType={sortType}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        sortDirection: state.sortDirection,
        sortType: state.sortType,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setSorting,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SortingContainer)
