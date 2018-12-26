import React, { PureComponent } from 'react'
import {string, func} from 'prop-types'

import './SearchBlock.scss'
import SearchIcon from './SearchIcon'

export default class SearchBlock extends PureComponent {
    static propTypes = {
        onSearchSubmit: func,
        onSearch: func,
        searchInput: string
    }

    static defaultProps = {
        onSearchSubmit: () => {},
        onSearch: () => {},
        searchInput: 'Home',
    }

    handleChange = e => {
        this.props.onSearch(e.target.value)
    }

    handleSubmit = e => {
        e.preventDefault()
        e.stopPropagation()
        this.props.onSearchSubmit()
    }

    render() {
        const { searchInput } = this.props

        return (
            <form className='searchBlock' onSubmit={this.handleSubmit}>
                <input
                    className='searchBlock_input'
                    type='text'
                    placeholder='Address, ID or Type'
                    onChange={this.handleChange}
                    value={searchInput}
                />
                <button className='searchBlock_icon'>
                    <SearchIcon />
                </button>
            </form>
        )
    }
}
