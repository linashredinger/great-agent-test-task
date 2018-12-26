const numberSortDesc = type => (a, b) =>(
    b[type]- a[type]
)

const numberSortAsc = type => (a, b) =>(
    a[type] - b[type]
)


const textSortAsc = type => (a, b) => {
    if (a[type] > b[type]) {
        return 1
    }
    if (a[type] < b[type]) {
        return -1
    }
    return 0
}

const textSortDesc = type => (a, b) => {
    if (a[type] > b[type]) {
        return -1
    }
    if (a[type] < b[type]) {
        return 1
    }
    return 0
}

const sortFavorite = (a, b) => {
    if (a.isFavorite && !b.isFavorite) {
        return -1
    }
    if (b.isFavorite && !a.isFavorite) {
        return 1
    }
    return 0
}

const favoriteFirst = sortFunc => (a, b) => {
    if (a.isFavorite === b.isFavorite) {
        return sortFunc(a, b)
    }
    return sortFavorite(a, b)
}

export const getSortFunction = state => {
    if (['id', 'price', 'lastUpdate'].includes(state.sortType)) {
        if (state.sortDirection === 'asc') {
            return favoriteFirst(numberSortAsc(state.sortType))
        }
        return favoriteFirst(numberSortDesc(state.sortType))
    } else {
        if (state.sortDirection === 'asc') {
            return favoriteFirst(textSortAsc(state.sortType))
        }
        return favoriteFirst(textSortDesc(state.sortType))
    }
}
