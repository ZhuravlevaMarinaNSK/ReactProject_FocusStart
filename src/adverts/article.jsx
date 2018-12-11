import React, { PureComponent } from 'react';
import RenderPhotos from 'adverts/renderPhotos';

function checkFeature(adv, item) {
  const feature = item;
  const advert = adv;
  let result = false;
  for (let i = 0; i < advert.features.length; i++) {
    if (advert.features[i] === feature) {
      result = true;
    }
    if (result) {
      return true;
    }
  }
  return false;
}

function onRemoveButtonClick() {
  const isDelete = confirm('Вы уверены, что хотите удалить объявление?');
  alert(isDelete);
}

class Article extends PureComponent {
  render() {
    console.log(this.props);
    const { adv, closePopup } = this.props;
    return (
      <article className="map__card popup">
        <img
          src={adv.avatar}
          className="popup__avatar"
          width="70"
          height="70"
          alt="Аватар пользователя"
        />
        <button type="button" className="popup__close" onClick={closePopup}>
          Закрыть
        </button>
        <h3 className="popup__title">{adv.title}</h3>
        <p className="popup__text popup__text--address">{adv.address}</p>
        <p className="popup__text popup__text--price">
{adv.price}
{' '}
руб.
</p>
        <h4 className="popup__type">{adv.type}</h4>
        <p className="popup__text popup__text--capacity">
для
{' '}
{adv.capacity}
{' '}
гостей
</p>
        <p className="popup__text popup__text--time">
          Заезд после 
{' '}
{adv.time[1]}
, выезд до
{' '}
{adv.time[0]}
        </p>
        <ul className="popup__features">
          <li
            className={`${checkFeature(adv, 'wifi') ? 'popup__feature--wifi popup__feature' : ''}`}
          />
          <li
            className={`${
              checkFeature(adv, 'dishwasher') ? 'popup__feature--dishwasher popup__feature' : ''
            }`}
          />
          <li
            className={`${
              checkFeature(adv, 'parking') ? 'popup__feature--parking popup__feature' : ''
            }`}
          />
          <li
            className={`${
              checkFeature(adv, 'washer') ? 'popup__feature--washer popup__feature' : ''
            }`}
          />
          <li
            className={`${
              checkFeature(adv, 'elevator') ? 'popup__feature--elevator popup__feature' : ''
            }`}
          />
          <li
            className={`${
              checkFeature(adv, 'conditioner') ? 'popup__feature--conditioner popup__feature' : ''
            }`}
          />
        </ul>
        <p className="popup__description">{adv.description}</p>
        <div className="popup__photos">
          <RenderPhotos adv={adv} />
        </div>
        <button
          type="button"
          className={`${adv.isRemovable ? 'button' : 'button--invisible'}`}
          onClick={onRemoveButtonClick}
        >
          Удалить объявление
        </button>
      </article>
    );
  }
}
export default Article;
