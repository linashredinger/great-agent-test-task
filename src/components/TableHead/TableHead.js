import React, { PureComponent } from 'react'
import { string } from 'prop-types'

import SortingContainer from '../../containers/SortingContainer'

import './TableHead.scss'

export default class TableHead extends PureComponent {
    static propTypes = {
        activeTab: string,
    }

    static defaultProps = {}

    renderTableHead = values => {
        const { activeTab } =this.props

        return (
            values.map(item => (
                <div
                    className={'tableHead_column ' + (activeTab === item ? 'active' : '')}
                    key={item}>
                    {item}
                    {
                        item !== 'isFavorite' && (
                            <SortingContainer fieldType={item}/>
                        )
                    }
                </div>
            ))
        )
    }

    render() {
        // const {  } = this.props

        return (
            <div className='tableHead'>
                {this.renderTableHead(['id', 'address', 'price', 'last update', 'type', 'is favorite'])}
            </div>
        )

    }
}
