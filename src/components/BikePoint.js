import React from 'react';
import { render } from 'react-dom';
import Map from './map/Map';
import * as Constants from '../constants/urlConfig';
import NavigationLink from './NavigationLink';

export default class BikePoint extends React.Component {

    /**
     * Constructor function
     * set intial data
     */
    constructor() {
        super();
        this.state = {
            isLoading: false,
            bikePointInfo: [],
            markersData: [
                //{ latLng: { lat: 49.8419, lng: 24.0315 }, title: 1 }
            ],
            intialMapCenter: [49.8419, 24.0315],
            bikePointName: '',
            noData: false
        }
    }
    /**
     * Update the state value on change
     */
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    /**
     * Submit the form to get bike point details
     */
    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { bikePointName } = this.state;
        /**
         * service call to get Bike point info
         * input is name
         */

        this.setState({ isLoading: true });
        console.log(Constants.URL + 'BikePoint/Search' + Constants.APIPARAMS + '&query=' + bikePointName)
        fetch(Constants.URL + 'BikePoint/Search' + Constants.APIPARAMS + '&query=' + bikePointName)
            .then(response => response.json())
            .then(data => {
                const pointers = [];
                if (data.length) {
                    /**
                     * build the markers data
                     */
                    data.map(marker => {
                        pointers.push(
                            {
                                title: marker.commonName,
                                latLng: {
                                    lat: marker.lat,
                                    lng: marker.lon,
                                }
                            }
                        )
                    })
                    this.setState({
                        bikePointInfo: data,
                        intialMapCenter: [data[0].lat, data[0].lon],
                        markersData: pointers,
                        isLoading: false
                    });
                } else {
                    this.setState({
                        bikePointInfo: data,
                        noData: true,
                        isLoading: false,

                    });
                }
            });
    }

    render() {
        /**
         * assign the state data to required constants
         */
        const { markersData, isLoading, bikePointInfo } = this.state;

        return (
            <div className="row" >
                <div className="col-md-12">
                    <img src="images/landingImage.jpg" className="banner-image" />
                </div>
                <NavigationLink activePage="Search Bike Point" />

                <div className="col-md-12" id="bikePointers">

                    <div className="col-md-6 floatLeft">
                        <h2 className="mt-3">Search for bike stations</h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <input type="text" name='bikePointName' value={this.state.bikePointName} onChange={this.onChange} className="form-control mt-2" placeholder="Enter location" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {!!bikePointInfo.length && <div className="col-md-6 maps floatLeft"><Map markersData={markersData} centerPoint={this.state.intialMapCenter} /></div>}


                </div>
                {!!bikePointInfo.length && <div className="col-md-12">
                    <h5>Bike Points:</h5>
                    <ul className="bike-pointer-list">
                        {markersData.map(marker => (
                            <li key={marker.title} >
                                {marker.title}
                            </li>
                        ))}
                    </ul>

                </div>}
                {this.state.noData && <div class="col"><h5>No Bike points Found</h5></div>}
            </div>


        )

    }
}

