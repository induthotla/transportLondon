import React from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

const style = {
  width: "100%",
  height: "500px"
};

class Map extends React.Component {
  componentDidMount() {
    console.log(this.props.centerPoint)

    // create map
    this.map = L.map("map", {
      center: this.props.centerPoint,
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });

    // add layer
    this.layer = L.layerGroup().addTo(this.map);
    this.updateMarkers(this.props.markersData);

    // add marker
    //this.marker = L.marker(this.props.markerPosition, { icon: myIcon }).addTo(this.map);


  }

  componentDidUpdate({ markersData }) {
    // check if data has changed
    if (this.props.markersData !== markersData) {
      this.updateMarkers(this.props.markersData);
    }
  }
  updateMarkers(markersData) {
    //custom icon
    const myIcon = L.icon({
      iconUrl: 'images/icon.png',
      iconSize: [20, 40],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      //shadowUrl: 'my-icon-shadow.png',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
    });
    this.layer.clearLayers();
    markersData.forEach(marker => {
      L.marker(marker.latLng, { icon: myIcon }, { title: marker.title }).bindPopup(marker.title).addTo(this.layer);
    });
  }
  render() {
    return <div id="map" style={style} />;
  }
}

export default Map;
