import React, { Component } from 'react'

export default class Editor extends Component {
    render() {
        return (
            <div className="text-center">
                <h4>Editor</h4>
                <textarea
                    className="container__editor form-control m-2"
                    type="text"
                    onChange={this.props.onChange}
                    value={this.props.text}
                />
            </div>
        )
    }
}
