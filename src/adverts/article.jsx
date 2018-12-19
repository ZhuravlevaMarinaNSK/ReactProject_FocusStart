import React, { PureComponent } from 'react';
import createRequest from 'core/create-request';
import { deleteAdvert } from 'core/api-config';
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

class Article extends PureComponent {
  onRemoveButtonClick = () => {
    const id = this.props.adv.id;
    const isDelete = confirm('Вы уверены, что хотите удалить объявление?');
    alert(isDelete);
    if (isDelete) {
      createRequest(deleteAdvert, { id }).then((response) => {
        if (response.status === 'OK') {
          alert('Объявление удалено');
          this.props.onMarkerDelete(this.props.adv);
        }
      });
    }
  };

  render() {
    const { adv, closePopup } = this.props;
    console.log(adv);
    // const adv = this.state.adv;
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
export default Article;
