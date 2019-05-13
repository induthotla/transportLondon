import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import * as Constants from '../constants/urlConfig';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import NavigationLink from './NavigationLink';

/**
 * Get the air quality info 
 */
class AirQuality extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            airQualityInfo: []
        }
    }
    /**
     * service call to get air quality info
     */
    componentDidMount() {
        this.setState({ isLoading: true })
        fetch(Constants.URL + 'AirQuality' + Constants.APIPARAMS)

            .then(response => response.json())
            .then(data => {
                this.setState({
                    airQualityInfo: data.currentForecast,
                    isLoading: false
                });
                //console.log(this.state.airQualityInfo.currentForecast, Constants);
            });
    }

    render() {

        const { airQualityInfo, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        }
        return (
            <div className="row" >
                <div className="col-md-12">
                    <img src="images/landingImage.jpg" className="banner-image" />
                </div>
                <NavigationLink activePage="Check the Air Quality" />
                <div className="row no-gutters p-md-5 p-2">
                    {airQualityInfo.map(item =>

                        <div className="col-md-6 col-12 px-2">
                            <h3 className="titleHeader">{item.forecastType == 'Future' && <text>Tomorrow</text>}{item.forecastType == 'Current' && <text>Today</text>}</h3>

                            <div>
                                {item.forecastBand.toLowerCase() != 'none' && <img className="forecast-band" src={require(`../../public/images/${item.forecastBand.toLowerCase()}.png`)} alt="no Image" />}
                                {!!item.forecastBand.toLowerCase() != 'none' && <span>{item.forecastBand}</span>}
                                <p>{ReactHtmlParser(ReactHtmlParser(item.forecastText))}</p>
                                <table className="table air-quality-band">
                                    <tr >
                                        <th>No<sub>2</sub></th><th>O<sub>3</sub></th><th>PM10</th><th>PM2.5</th><th>SO<sub>2</sub></th>
                                    </tr>
                                    <tbody>
                                        <tr>
                                            <td>{item.nO2Band}</td>
                                            <td>{item.o3Band}</td>
                                            <td>{item.pM10Band}</td>
                                            <td>{item.pM25Band}</td>
                                            <td>{item.sO2Band}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );


    }

}

export default AirQuality;