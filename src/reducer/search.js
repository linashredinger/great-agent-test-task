export const searcFunc = searchCriteria => item => {
    const searchFields = ['id', 'address', 'type']
    for (let field of searchFields) {
        if (item[field].toString().toLowerCase().search(searchCriteria.toLowerCase()) >= 0) {
            return true
        }
    }
    return false
}
