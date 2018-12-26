import React, { PureComponent } from 'react'
import { string, func } from 'prop-types'

import './Sorting.scss'


export default class Sorting extends PureComponent {
    static propTypes = {
        sortDirection: string,
        onSort: func,
        fieldType: string,
        sortType: string,
    }

    static defaultProps = {
        sortDirection: 'asc',
        onSort: () => {},
        fieldType: 'id',
        sortType: 'id',
    }

    handleClick = () => {
        const { onSort, sortDirection, fieldType, sortType } =this.props

        if (fieldType === sortType) {
            onSort({
                sortDirection: sortDirection === 'asc' ? 'desc' : 'asc',
                sortType
            })
        } else {
            onSort({
                sortDirection: 'desc',
                sortType: fieldType
            })
        }
    }

    getClassName = () => {
        const { sortDirection, fieldType, sortType } =this.props

        if (fieldType !== sortType) {
            return 'sorting'
        }
        if (sortDirection === 'asc') {
            return 'sorting asc'
        }
        return 'sorting'
    }



    render() {
        // const {  } = this.props

        return (
            <div
                className={this.getClassName()}
                onClick={this.handleClick}
            />
        )

    }
}
