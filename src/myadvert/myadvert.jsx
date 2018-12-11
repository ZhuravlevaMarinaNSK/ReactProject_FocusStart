import React from 'react';

function MyAdvert() {
  return (
    <section className="notice">
      <h2 className="notice__title">Ваше объявление</h2>

      <form className="ad-form" method="post" action="">
        <fieldset className="ad-form-header">
          <legend className="ad-form-header__title">Ваша фотография (для карты)</legend>
          <div className="ad-form-header__upload">
            <div className="ad-form-header__preview">
              <img
                src="./src/img/muffin-grey.svg"
                alt="Аватар пользователя"
                width="40"
                height="44"
              />
            </div>
            <div className="ad-form__field">
              <label className="ad-form-header__drop-zone" htmlFor="avatar" id="1">
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  className="ad-form-header__input visually-hidden"
                />
                Загрузите или&nbsp;перетащите сюда фото
              </label>
            </div>
            <p className="ad-form-header__info">
              Заполните все обязательные поля, назначьте цену, загрузите фотографии. Придумайте
              интересное описание. Оно сделает объявление более живым и привлекательным.
              Получившееся объявление должно давать гостям полное представление о вашем жилье.
            </p>
          </div>
        </fieldset>

        <fieldset className="ad-form__element ad-form__element--wide">
          <label className="ad-form__label" htmlFor="title">
            Заголовок объявления
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Уютная квартирка в центре Новосибирска"
              minLength={30}
              maxLength={100}
              required
            />
          </label>
        </fieldset>

        <fieldset className="ad-form__element ad-form__element--wide">
          <label className="ad-form__label" htmlFor="address">
            Адрес
            <input id="address" name="address" type="text" readOnly />
          </label>
        </fieldset>

        <fieldset className="ad-form__element">
          <span className="ad-form__label" id="2" />
          Тип жилья
          <select id="type" name="type">
            <option value="bungalo">Бунгало</option>
            <option value="flat" selected>
              Квартира
            </option>
            <option value="house">Дом</option>
            <option value="palace">Дворец</option>
          </select>
        </fieldset>

        <fieldset className="ad-form__element">
          <label className="ad-form__label" htmlFor="price">
            Цена за ночь, руб.
            <input
              id="price"
              name="price"
              type="number"
              placeholder="5000"
              min="1000"
              max="1000000"
              required
            />
          </label>
        </fieldset>

        <fieldset className="ad-form__element ad-form__element--time">
          <span className="ad-form__label" htmlFor="timein">
            Время заезда и выезда
          </span>
          <select id="timein" name="timein">
            <option value="12:00" selected>
              После 12
            </option>
            <option value="13:00">После 13</option>
            <option value="14:00">После 14</option>
          </select>
          <select id="timeout" name="timeout" title="Time to go out">
            <option value="12:00" selected>
              Выезд до 12
            </option>
            <option value="13:00">Выезд до 13</option>
            <option value="14:00">Выезд до 14</option>
          </select>
        </fieldset>

        <fieldset className="ad-form__element">
          <span className="ad-form__label" htmlFor="room_number">
            Кол-во комнат
          </span>
          <select id="room_number" name="rooms">
            <option value="1" selected>
              1 комната
            </option>
            <option value="2">2 комнаты</option>
            <option value="3">3 комнаты</option>
            <option value="100">100 комнат</option>
          </select>
        </fieldset>

        <fieldset className="ad-form__element">
          <span className="ad-form__label" htmlFor="capacity">
            Количество мест
          </span>
          <select id="capacity" name="capacity">
            <option value="3" selected>
              для 3 гостей
            </option>
            <option value="2">для 2 гостей</option>
            <option value="1">для 1 гостя</option>
            <option value="0">не для гостей</option>
          </select>
        </fieldset>

        <fieldset className="ad-form__element ad-form__element--wide features">
          <legend>Удобства: Wi-Fi, кухня, парковка, стиралка, лифт, кондиционер</legend>
          <label className="feature feature--wifi" htmlFor="feature-wifi">
            <input
              type="checkbox"
              name="features"
              value="wifi"
              id="feature-wifi"
              className="feature__checkbox visually-hidden"
            />
            Wi-Fi
          </label>
          <label className="feature feature--dishwasher" htmlFor="feature-dishwasher">
            <input
              type="checkbox"
              name="features"
              value="dishwasher"
              id="feature-dishwasher"
              className="feature__checkbox visually-hidden"
            />
            Посудомоечная машина
          </label>
          <label className="feature feature--parking" htmlFor="feature-parking">
            <input
              type="checkbox"
              name="features"
              value="parking"
              id="feature-parking"
              className="feature__checkbox visually-hidden"
            />
            Парковка
          </label>
          <label className="feature feature--washer" htmlFor="feature-washer">
            <input
              type="checkbox"
              name="features"
              value="washer"
              id="feature-washer"
              className="feature__checkbox visually-hidden"
            />
            Стиральная машина
          </label>
          <label className="feature feature--elevator" htmlFor="feature-elevator">
            <input
              type="checkbox"
              name="features"
              value="elevator"
              id="feature-elevator"
              className="feature__checkbox visually-hidden"
            />
            Лифт
          </label>
          <label className="feature feature--conditioner" htmlFor="feature-conditioner">
            <input
              type="checkbox"
              name="features"
              value="conditioner"
              id="feature-conditioner"
              className="feature__checkbox visually-hidden"
            />
            Кондиционер
          </label>
        </fieldset>

        <fieldset className="ad-form__element ad-form__element--wide">
          <label className="ad-form__label" htmlFor="description">
            Описание (не обязательно)
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Здесь расскажите о том, какое ваше жилье замечательное и вообще"
          />
        </fieldset>

        <fieldset className="ad-form__element ad-form__element--wide">
          <span className="ad-form__label">Фотографии жилья</span>
          <div className="ad-form__photo-container">
            <div className="ad-form__upload">
              <label htmlFor="images" className="ad-form__drop-zone">
                <input
                  type="file"
                  id="images"
                  name="images"
                  className="ad-form__input visually-hidden"
                />
                Загрузите или&nbsp;перетащите сюда фото
              </label>
            </div>
            <div className="ad-form__photo" />
          </div>
        </fieldset>

        <fieldset className="ad-form__element ad-form__element--submit">
          <button className="ad-form__submit" type="submit">
            Опубликовать
          </button>
          <span className="ad-form__word">или</span>
          <button className="ad-form__reset" type="button">
            очистить
          </button>
        </fieldset>
      </form>
    </section>
  );
}

export default MyAdvert;
