import React from 'react';

const adverts = [
  {
    id: 'e69fcfb925bbf',
    avatar: '../src/img/avatars/user01.png',
    title: 'Большая уютная квартира',
    address: 'Площадь Маркса, 1',
    price: '10000',
    lat: '54.98',
    long: '82.89',
    type: 'Новостройка',
    capacity: '1',
    time: ['12', '15'],
    photos: ['../src/img/muffin-red.svg', '../src/img/muffin-grey.svg', '../src/img/pins.svg'],
    features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    isRemovable: false,
    description:
      'Великолепная квартира-студия в центре города. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.'
  },
  {
    id: 'e11fcfb925bbf',
    avatar: '../src/img/avatars/user02.png',
    title: 'Маленькая неуютная квартира',
    address: 'Площадь Маркса, 10',
    price: '1000',
    type: 'Хрущовка',
    lat: '54.99',
    long: '82.88',
    capacity: '1',
    time: ['12', '15'],
    photos: ['../src/img/muffin-red.svg'],
    features: ['elevator', 'conditioner'],
    isRemovable: true,
    description:
      'Великолепная квартира-студия в центре города. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.'
  }
];

function Map({ openPopup }) {
  DG.then(() => {
    const map = DG.map('map', {
      center: [54.98, 82.89],
      zoom: 13,
      fullscreenControl: false
    });
    map.zoomControl.setPosition('topright');
    adverts.map((item) => {
      const myIcon = DG.icon({
        iconUrl: item.avatar,
        iconSize: [40, 40],
        iconAnchor: [22, 20],
        popupAnchor: [-3, -6]
      });

      DG.marker([item.lat, item.long], { icon: myIcon })
        .addTo(map)
        .bindLabel(item.title)
        .on('click', () => {
          console.log(item.id);
          openPopup(item.id);
        });
    });
  });
  return <div className="wrapper" />;
}

export default Map;
