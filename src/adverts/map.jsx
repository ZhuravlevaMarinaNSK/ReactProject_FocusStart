import React, { Component } from 'react';
import propTypes from 'prop-types';

class Map extends Component {
  state = {
    map: null
  };

  componentDidMount() {
    return (
      <div>
        {DG.then(() => {
          this.setState({
            map: DG.map('map', {
              center: [54.95, 82.99],
              zoom: 11,
              fullscreenControl: false
            })
          });
          const { map } = this.state;
          map.zoomControl.setPosition('topright');
        })}
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    const { adverts, openPopup } = this.props;
    const { map } = this.state;
    if (adverts.length) {
      if (adverts.length > 0 && adverts.length < prevProps.adverts.length) {
        adverts.map((item) => {
          const myIcon = DG.icon({
            iconUrl: item.avatar || './src/img/avatars/default.png',
            iconSize: [40, 40],
            iconAnchor: [22, 20],
            popupAnchor: [-3, -6]
          });
          return (
            map
            && DG.marker([item.value.lat, item.value.lng], { icon: myIcon })
              .addTo(map)
              .bindLabel(item.title)
              .on('click', () => {
                openPopup(item.id);
              })
          );
        });
      }
    }
  }

  render() {
    const { adverts, openPopup } = this.props;
    const { map } = this.state;
    return (
      <div className="test">
        {adverts.map((item) => {
          const myIcon = DG.icon({
            iconUrl: item.avatar || './src/img/avatars/default.png',
            iconSize: [40, 40],
            iconAnchor: [22, 20],
            popupAnchor: [-3, -6]
          });
          map
            && DG.marker([item.value.lat, item.value.lng], { icon: myIcon })
              .addTo(map)
              .bindLabel(item.title)
              .on('click', () => {
                openPopup(item.id);
              });
        })}
      </div>
    );
  }
}

Map.propTypes = {
  adverts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      avatar: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      timein: propTypes.string.isRequired,
      timeout: propTypes.string.isRequired,
      isRemovable: propTypes.bool.isRequired,
      rooms: propTypes.string.isRequired,
      capacity: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      value: propTypes.shape({
        lat: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
        lng: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired
      }),
      price: propTypes.string.isRequired,
      description: propTypes.string,
      features: propTypes.arrayOf(propTypes.string)
    })
  ).isRequired,
  openPopup: propTypes.func
};

Map.defaultProps = {
  openPopup: propTypes.func
};

export default Map;
