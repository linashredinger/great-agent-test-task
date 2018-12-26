import React from 'react'
import { shallow } from 'enzyme'
import Favorite from './Favorite'

describe('Favorite', () => {
    it('should render normal without any props supplied', () => {
        expect(shallow(<Favorite />)).toHaveLength(1)
    })
})