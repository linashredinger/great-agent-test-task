import { createReducer } from 'redux-act'

import {
    receiveData,
    markAsFavorite,
    setSorting,
    onSearch,
    onSearchSubmit,
} from './actions'

const initialState = {
    propertyDataInput: {},
    sortDirection: 'asc',
    sortType: 'id',
    searchInput: '',
    currentSearchFilter: '',
}

// GET ALL DATA

const customReceive = (receiveBuffer, propertyDataInput) => {
    for (let key of Object.keys(receiveBuffer)) {
        const bufferItem = receiveBuffer[key]
        const inputItem = propertyDataInput[key]
        if (inputItem === undefined) {
            propertyDataInput[key] = bufferItem
            continue
        }
        if (bufferItem.lastUpdate > inputItem.lastUpdate) {
            inputItem.lastUpdate = bufferItem.lastUpdate
            inputItem.price = bufferItem.price
        }
    }
    return propertyDataInput
}

const handleReceiveData = (state, payload) => ({
    ...state,
    propertyDataInput: customReceive(payload, state.propertyDataInput),
})

// MARK AS FAVORITE

const handleMarkAsFavorite = (state, payload) => ({
    ...state,
    propertyDataInput: {
        ...state.propertyDataInput,
        [payload]: {
            ...state.propertyDataInput[payload],
            isFavorite: !state.propertyDataInput[payload].isFavorite,
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
