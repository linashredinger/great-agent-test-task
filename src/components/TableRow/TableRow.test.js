import React from 'react'
import { shallow } from 'enzyme'
import TableRow from './TableRow'

describe('TableRow', () => {
    it('should render normal without any props supplied', () => {
        expect(shallow(<TableRow />)).toHaveLength(1)
    })
})