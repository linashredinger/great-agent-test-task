import React, { PureComponent } from 'react'
// import {} from 'prop-types'

import './Header.scss'

export default class Header extends PureComponent {
    static propTypes = {}

    static defaultProps = {}

    render() {
        // const {} = this.props

        return (
            <div className='header'>
                <h1 className='header_text'>Simple properties table</h1>
            </div>
        )

    }
}
