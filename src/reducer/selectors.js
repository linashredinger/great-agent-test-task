import { getSortFunction } from './sort'
import { searcFunc } from './search'

export const propertyDataSelector = state => {
    const data = Object.keys(state.propertyData).map(key => state.propertyData[key])
    data.sort(getSortFunction(state))
    return data.filter(searcFunc(state.currentSearchFilter))
}

export const autoSuggestionSelector = state => {
    if (state.searchInput.length === 0) {
        return []
    }
    const data = Object.keys(state.propertyData).map(key => state.propertyData[key])
    // data.sort(getSortFunction(state))
    return data.filter(searcFunc(state.searchInput))
}
