import React from 'react'
import { shallow } from 'enzyme'
import Table from './Table'

describe('Table', () => {
    it('should render normal without any props supplied', () => {
        expect(shallow(<Table />)).toHaveLength(1)
    })
    it('should render normal with children content', () => {
      expect(shallow(<Table>Table</Table>).text()).toEqual('<TableHead />Table')
    })
})