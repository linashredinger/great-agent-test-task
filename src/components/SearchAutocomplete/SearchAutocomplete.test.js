import React from 'react'
import { shallow } from 'enzyme'
import SearchAutocomplete from './SearchAutocomplete'

describe('SearchAutocomplete', () => {
    it('should render normal without any props supplied', () => {
        expect(shallow(<SearchAutocomplete />)).toHaveLength(1)
    })
})