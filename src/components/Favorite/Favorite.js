import React, { PureComponent } from 'react'
import { bool, func } from 'prop-types'

import './Favorite.scss'

export default class Favorite extends PureComponent {
    static propTypes = {
        isFavorite: bool,
        onFavorite: func,
    }

    static defaultProps = {
        isFavorite: false,
        onFavorite: () => {},
    }

    render() {
        const { isFavorite, onFavorite } = this.props

        return (
            <svg width='24px' height='24px' viewBox='0 0 24 24' className='favorite' onClick={onFavorite}>
                <path
                    className='favorite_icon'
                    fill={isFavorite ? '#e64c65' : '#9099b7'}
                    d='M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z'
                />
            </svg>
        )
    }
}
