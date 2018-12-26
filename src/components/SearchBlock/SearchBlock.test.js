import React from 'react'
import { shallow } from 'enzyme'
import SearchBlock from './SearchBlock'

describe('SearchBlock', () => {
    it('should render normal without any props supplied', () => {
        expect(shallow(<SearchBlock />)).toHaveLength(1)
    })
})