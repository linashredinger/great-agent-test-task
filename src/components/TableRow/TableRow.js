import React, { PureComponent } from 'react'
import { string, number, bool, func } from 'prop-types'
import moment from 'moment'

import Favorite from '../Favorite'

import './TableRow.scss'

const FIELDS = ['id', 'address', 'price', 'lastUpdate', 'type', 'isFavorite']

export default class TableRow extends PureComponent {
    static propTypes = {
        id: number,
        address: string,
        price: number,
        lastUpdate: number,
        type: string,
        isFavorite: bool,
        onFavorite: func,
    }

    static defaultProps = {}

    renderTableCell = type => {
        if (type === 'isFavorite') {
            return(
                <div
                    key={type}
                    className='tableRow_item'
                >
                    <Favorite
                        isFavorite={this.props.isFavorite}
                        onFavorite={this.handleFavoriteClick}
                    />
                </div>
            )
        }
        if (type === 'lastUpdate') {
            return(
                <div key={type} className='tableRow_item'>{moment(this.props.lastUpdate).format('h:mm:ss a')}</div>
            )
        }
        return(
            <div key={type} className='tableRow_item'>{this.props[type]}</div>
        )
    }

    handleFavoriteClick = () => {
        this.props.onFavorite(this.props.id)
    }

    render() {
        // const {} = this.props

        return (
            <div className='tableRow'>
                {FIELDS.map(this.renderTableCell)}
            </div>
        )

    }
}
