import React, { Component,Fragment } from 'react'

export const  NewHOC = (PassedComponent) => {
    return class extends Component {
        render() {
            return (
                <Fragment>
                    <PassedComponent {...this.props} />
                </Fragment>
            )
        }
    }
}