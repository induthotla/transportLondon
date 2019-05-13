import React from 'react';

export default class NavigationLink extends React.Component {

    render() {
        return (
            <div className="col-md-12">
                <ul class="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li>{this.props.activePage}</li>
                </ul>
            </div>
        );
    }
}
