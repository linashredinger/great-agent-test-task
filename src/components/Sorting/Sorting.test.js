import React from 'react'
import { shallow } from 'enzyme'
import Sorting from './Sorting'

describe('Sorting', () => {
    it('should render normal without any props supplied', () => {
        expect(shallow(<Sorting />)).toHaveLength(1)
    })
})