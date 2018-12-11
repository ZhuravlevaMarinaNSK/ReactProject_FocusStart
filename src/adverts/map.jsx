import React, { Component } from 'react';

class Map extends Component {
  state = {
    map: null
  };

  componentDidMount() {
    return (
      <div>
        {DG.then(() => {
          this.setState(
            (this.state.map = DG.map('map', {
              center: [54.98, 82.89],
              zoom: 13,
              fullscreenControl: false
            }))
          );
          this.state.map.zoomControl.setPosition('topright');
          console.log(this.state.map);
        })}
      </div>
    );
  }

  render() {
    const { adverts, openPopup } = this.props;
    return (
      <div className="test">
        {adverts.map((item) => {
          const myIcon = DG.icon({
            iconUrl: item.avatar,
            iconSize: [40, 40],
            iconAnchor: [22, 20],
            popupAnchor: [-3, -6]
          });
          console.log(this.state.map);
          DG.marker([item.lat, item.long], { icon: myIcon })
            .addTo(this.state.map)
            .bindLabel(item.title)
            .on('click', () => {
              console.log(item.id);
              openPopup(item.id);
            });
        })}
      </div>
    );
  }
}

export default Map;
