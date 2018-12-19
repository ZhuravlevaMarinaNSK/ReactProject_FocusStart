import React, { Component } from 'react';

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
              center: [54.98, 82.89],
              zoom: 13,
              fullscreenControl: false
            })
          });
          this.state.map.zoomControl.setPosition('topright');
        })}
      </div>
    );
  }

  // onMarkerDelete(item) {
  //   DG.marker([item.value.lat, item.value.lng]).removeTo(this.state.map);
  // }

  componentDidUpdate(prevProps, prevState) {
    const { adverts, openPopup } = this.props;
    const { prevAdverts } = prevProps;
    // if (adverts.length < prevAdverts.length) {
    //   adverts.map((item) => {
    //     const myIcon = DG.icon({
    //       iconUrl: item.avatar || './src/img/avatars/default.png',
    //       iconSize: [40, 40],
    //       iconAnchor: [22, 20],
    //       popupAnchor: [-3, -6]
    //     });
    //     this.state.map
    //       && DG.marker([item.value.lat, item.value.lng], { icon: myIcon })
    //         .addTo(this.state.map)
    //         .bindLabel(item.title)
    //         .on('click', () => {
    //           openPopup(item.id);
    //         });
    //   });
    // }
  }

  render() {
    const { adverts, openPopup } = this.props;
    return (
      <div className="test">
        {adverts.map((item) => {
          const myIcon = DG.icon({
            iconUrl: item.avatar || './src/img/avatars/default.png',
            iconSize: [40, 40],
            iconAnchor: [22, 20],
            popupAnchor: [-3, -6]
          });
          this.state.map
            && DG.marker([item.value.lat, item.value.lng], { icon: myIcon })
              .addTo(this.state.map)
              .bindLabel(item.title)
              .on('click', () => {
                openPopup(item.id);
              });
        })}
      </div>
    );
  }
}

export default Map;
