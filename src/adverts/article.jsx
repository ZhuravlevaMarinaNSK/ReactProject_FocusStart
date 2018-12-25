import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import RenderPhotos from './renderPhotos';

function checkFeature(adv, item) {
  const feature = item;
  const advert = adv;
  let result = false;
  if (advert.features) {
    for (let i = 0; i < advert.features.length; i += 1) {
      if (advert.features[i] === feature) {
        result = true;
      }
      if (result) {
        return true;
      }
    }
  }

  return false;
}

class Article extends PureComponent {
  onRemoveButtonClick = () => {
    debugger;
    const { onDelete, adv } = this.props;
    onDelete(adv.id);
  };

  render() {
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
        <p className="popup__text popup__text--address">{adv.addressText}</p>
        <p className="popup__text popup__text--price">
{adv.price}
{' '}
руб.
</p>
        <h4 className="popup__type">{adv.type}</h4>
        <p className="popup__text popup__text--capacity">
          Комнат: 
{' '}
{adv.rooms}
          {'. '}
          Вмещает гостей: 
{' '}
{adv.capacity}
        </p>
        <p className="popup__text popup__text--time">
          Заезд после 
{' '}
{adv.timein}
, выезд до
{' '}
{adv.timeout}
        </p>
        <ul className="popup__features">
          {['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'].map(key => (
            <li
              className={`${
                checkFeature(adv, key)
                  ? `popup__feature--${key} popup__feature`
                  : 'popup--invisible'
              }`}
              key={key}
            />
          ))}
        </ul>
        <p className="popup__description">{adv.description}</p>
        <div className="popup__photos">
          <RenderPhotos adv={adv} />
        </div>
        <button
          type="button"
          className={`${adv.isRemovable ? 'button' : 'button--invisible'}`}
          onClick={this.onRemoveButtonClick}
        >
          Удалить объявление
        </button>
      </article>
    );
  }
}

Article.propTypes = {
  adv: propTypes.shape({
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
  }).isRequired,
  onDelete: propTypes.func,
  closePopup: propTypes.func
};

Article.defaultProps = {
  onDelete: propTypes.func,
  closePopup: propTypes.func
};

export default Article;
