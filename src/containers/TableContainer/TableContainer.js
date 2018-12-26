import React, { Component } from 'react'
import { connect } from 'react-redux'
import { func, arrayOf, shape, number, bool, string } from 'prop-types'
import { bindActionCreators } from 'redux'
import properties$ from '../../mock'

import Table from '../../components/Table'
import TableRow from '../../components/TableRow'
import {
    receiveData,
    markAsFavorite,
} from '../../reducer/actions'

import {
    propertyDataSelector
} from '../../reducer/selectors'


class TableContainer extends Component {

    static propTypes = {
        receiveData: func,
        propertyData: arrayOf(shape({
            id: number,
            address: string,
            price: number,
            lastUpdate: number,
            type: string,
            isFavorite: bool,
        })),
        markAsFavorite: func,
        sortType: string,
    }

    static defaultProps = {}

    componentDidMount() {
        properties$.subscribe((data) => {
            this.props.receiveData(data)
        })
    }


    render() {

        const { propertyData, markAsFavorite, sortType } =this.props

        return (
            <Table sortType={sortType}>
                {propertyData.map(data => ( <TableRow key={data.id} {...data} onFavorite={markAsFavorite} /> ))}
            </Table>
        )
    }
}

function mapStateToProps (state) {
    return {
        propertyData: propertyDataSelector(state),
        sortType: state.sortType,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    receiveData,
    markAsFavorite,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(TableContainer)
