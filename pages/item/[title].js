import React, { Component } from 'react'
import axios from 'axios'
// import "../../scss/index.scss";




export default class ItemDetail extends Component {
    static async getInitialProps(query) {
        console.log("1:")
        return {
            title: 'cc'
        }
    }

    // static getDerivedStateFromProps = (nextProps, currentState) => {
    //     console.log("cc",nextProps)
    //     return {
    //         title: 'ok'
    //     }
    // }

    render() {
        console.log("3: ", this.props)
        return (
            <div>
                {this.props.title}
                <p>aaaa</p>
            </div>
        )
    }
}
