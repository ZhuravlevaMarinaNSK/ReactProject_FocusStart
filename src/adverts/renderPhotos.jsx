import React from 'react';

function RenderPhotos(advert) {
  const photo = [];
  const photocartes = advert.adv.photos || [];
  if (photocartes.length > 0) {
    photocartes.forEach(it => photo.push(
        <img
          src={it}
          key={it}
          className="popup__photo"
          width="45"
          height="40"
          alt="Фотография жилья"
        />
      ));
    return photo;
  }
  return null;
}

export default RenderPhotos;
