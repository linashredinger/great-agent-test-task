import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { func, string, arrayOf, shape } from 'prop-types'

import SearchBlock from '../../components/SearchBlock'
import SearchAutocomplete from '../../components/SearchAutocomplete'

import {
    onSearchSubmit,
    onSearch
} from '../../reducer/actions'

import { autoSuggestionSelector } from '../../reducer/selectors'

class SearchContainer extends Component {
    static propTypes = {
        onSearchSubmit: func,
        onSearch: func,
        searchInput: string,
        listAutocomplete: arrayOf(shape({})),
    }

    render() {

        const { listAutocomplete } = this.props

        return (
            <div>
                <SearchBlock {...this.props} />
                {
                    listAutocomplete && (
                        <SearchAutocomplete listAutocomplete={listAutocomplete} />
                    )
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchInput: state.searchInput,
        listAutocomplete: autoSuggestionSelector(state)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    onSearchSubmit,
    onSearch
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
