import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('Header', () => {
    it('should render normal without any props supplied', () => {
        expect(shallow(<Header />)).toHaveLength(1)
    })
})