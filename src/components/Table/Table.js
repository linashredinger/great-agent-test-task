import React, { PureComponent } from 'react'
import { node, string } from 'prop-types'

import TableHead from '../TableHead'

import './Table.scss'

export default class Table extends PureComponent {
    static propTypes = {
        children: node,
        sortType: string,
    }

    static defaultProps = {
    }

    render() {
        const { children, sortType } = this.props

        return (
            <div className='table'>
                <TableHead activeTab={sortType} />
                <div className='table_body'>
                    {children}
                </div>
            </div>
        )

    }
}
