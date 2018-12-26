import React from 'react'
import { shallow } from 'enzyme'
import TableHead from './TableHead'

describe('TableHead', () => {
    it('should render normal without any props supplied', () => {
        expect(shallow(<TableHead />)).toHaveLength(1)
    })
})