import { createReducer } from 'redux-act'

import {
    receiveData,
    markAsFavorite,
    setSorting,
    onSearch,
    onSearchSubmit,
} from './actions'

const initialState = {
    propertyData: {},
    sortDirection: 'asc',
    sortType: 'id',
    searchInput: '',
    currentSearchFilter: '',
}

// GET ALL DATA

const handleReceiveData = (state, payload) => ({
    ...state,
    propertyData: {
        ...state.propertyData,
        [payload.id]: {
            ...state.propertyData[payload.id],
            ...payload,
        },
    },
})

// MARK AS FAVORITE

const handleMarkAsFavorite = (state, payload) => ({
    ...state,
    propertyData: {
        ...state.propertyData,
        [payload]: {
            ...state.propertyData[payload],
            isFavorite: true,
        },
    },
})

//SORTING

const handleSetSorting = (state, payload) => ({
    ...state,
    sortDirection: payload.sortDirection,
    sortType: payload.sortType,
})

// SEARCH

const handleOnSearch = (state, payload) => ({
    ...state,
    searchInput: payload,
})

const handleOnSearchSubmit = state => ({
    ...state,
    currentSearchFilter: state.searchInput,
})



const actions ={
    [receiveData]: handleReceiveData,
    [markAsFavorite]: handleMarkAsFavorite,
    [setSorting]: handleSetSorting,
    [onSearch]: handleOnSearch,
    [onSearchSubmit]: handleOnSearchSubmit,
}

const reducer = createReducer(actions, initialState)

export default reducer
