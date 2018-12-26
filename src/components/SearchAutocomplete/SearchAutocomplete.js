import React, { PureComponent } from 'react'
import { arrayOf, shape } from 'prop-types'

import './SearchAutocomplete.scss'

export default class SearchAutocomplete extends PureComponent {
    static propTypes = {
        listAutocomplete: arrayOf(shape({}))
    }

    static defaultProps = {}

    renderSuggestion = item => (
        <div className='searchAutocomplete_row' key={item.id}>
            <div className='searchAutocomplete_row__item'>{item.id}</div>
            <div className='searchAutocomplete_row__item'>{item.address}</div>
            <div className='searchAutocomplete_row__item'>{item.type}</div>
            <div className='searchAutocomplete_row__item'>{item.price}</div>
        </div>
    )

    render() {
        const { listAutocomplete } = this.props

        return (
            <div className='searchAutocomplete'>
                {listAutocomplete.map(this.renderSuggestion)}
            </div>
        )
    }
}
