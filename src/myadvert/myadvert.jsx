import React, { PureComponent, createRef } from 'react';
import classNames from 'classnames/class-names';
import createRequest from 'core/create-request';
import { createAdvert } from 'core/api-config';
import Input from 'myadvert/input';
import Select from 'myadvert/select';
import Feature from 'myadvert/feature';
import CreateAvatar from 'myadvert/avatar';
import CreateTextarea from 'myadvert/textarea';
import LocationSearchInput from 'myadvert/places';

class MyAdvert extends PureComponent {
  state = { avatar: './src/img/avatars/default.png' };

  ADVERT_FIELDS = [
    {
      fieldsetClass: 'ad-form__field',
      labelClass: 'ad-form-header__drop-zone',
      labelText: 'Загрузите или&nbsp;перетащите сюда фото',
      for: 'avatar',
      textClass: 'ad-form-header__info',
      text:
        'Заполните все обязательные поля, назначьте цену, загрузите фотографии. Придумайте интересное описание. Оно сделает объявление более живым и привлекательным. Получившееся объявление должно давать гостям полное представление о вашем жилье.',
      avatar: {
        id: 'avatar',
        name: 'avatar',
        type: 'file',
        required: true,
        class: 'ad-form-header__input visually-hidden'
      },
      img: {
        src: './src/img/avatars/default.png'
      }
    },
    {
      fieldsetClass: 'wide',
      labelText: 'Заголовок объявления',
      for: 'title',
      input: {
        id: 'title',
        name: 'title',
        type: 'text',
        placeholder: 'Уютная квартирка в центре Новосибирска',
        minLength: 30,
        maxLength: 100,
        min: null,
        max: null,
        required: true
      }
    },
    {
      fieldsetClass: 'wide',
      labelText: 'Адрес',
      for: 'address',
      address: {
        id: 'address',
        name: 'address',
        type: 'text',
        placeholder: 'Введите адрес',
        minLength: 10,
        maxLength: 50,
        required: true
      }
    },
    {
      fieldsetClass: null,
      labelText: 'Тип жилья',
      for: 'type',
      select: {
        id: 'type',
        name: 'type',
        optionValue1: 'Хрущовка',
        optionText1: 'Хрущовка',
        optionValue2: 'Хоромы',
        optionText2: 'Хоромы',
        optionValue3: 'Студия',
        optionText3: 'Студия',
        minLength: 2,
        maxLength: 10,
        required: true
      }
    },
    {
      fieldsetClass: null,
      labelText: 'Цена за ночь, руб',
      for: 'price',
      input: {
        id: 'price',
        name: 'price',
        type: 'number',
        placeholder: '5000',
        minLength: 2,
        maxLength: 10,
        min: '1000',
        max: '1000000',
        required: true
      }
    },
    {
      fieldsetClass: 'time',
      labelText: 'Время заезда',
      for: 'time',
      select: {
        id: 'timein',
        name: 'timein',
        optionValue1: '12:00',
        optionText1: 'После 12',
        optionValue2: '13:00',
        optionText2: 'После 13',
        optionValue3: '14:00',
        optionText3: 'После 14',
        minLength: null,
        maxLength: null,
        required: true
      }
    },
    {
      fieldsetClass: 'time',
      labelText: 'Время выезда',
      for: 'time',
      select: {
        id: 'timeout',
        name: 'timeout',
        optionValue1: '12:00',
        optionText1: 'Выезд до 12',
        optionValue2: '13:00',
        optionText2: 'Выезд до 13',
        optionValue3: '14:00',
        optionText3: 'Выезд до 14',
        minLength: null,
        maxLength: null,
        required: true
      }
    },
    {
      fieldsetClass: null,
      labelText: 'Количество комнат',
      for: 'rooms',
      select: {
        id: 'rooms',
        name: 'rooms',
        optionValue1: '1',
        optionText1: '1',
        optionValue2: '2',
        optionText2: '2',
        optionValue3: '3',
        optionText3: '3',
        optionValue4: 'studio',
        optionText4: 'Студия',
        minLength: null,
        maxLength: null,
        required: true
      }
    },

    {
      fieldsetClass: null,
      labelText: 'Количество гостей',
      for: 'capacity',
      select: {
        id: 'capacity',
        name: 'capacity',
        optionValue1: '1',
        optionText1: 'для 1 гостя',
        optionValue2: '2',
        optionText2: 'для 2 гостей',
        optionValue3: '3',
        optionText3: 'для 3 гостей',
        minLength: null,
        maxLength: null,
        required: true
      }
    },
    {
      fieldsetClass: null,
      featureClass: 'features',
      labelText: 'Удобства: Wi-Fi, кухня, парковка, стиралка, лифт, кондиционер',
      for: 'features',
      feature: {
        id: 'feature-wifi',
        classLabel: 'wifi',
        classCheckbox: 'wifi',
        name: 'wifi',
        text: 'Wi Fi',
        type: 'checkbox',
        required: true
      }
    },
    {
      fieldsetClass: null,
      featureClass: 'features',
      labelText: 'Удобства: Wi-Fi, кухня, парковка, стиралка, лифт, кондиционер',
      for: 'features',
      feature: {
        id: 'feature-dishwasher',
        classLabel: 'dishwasher',
        classCheckbox: 'dishwasher',
        name: 'dishwasher',
        text: 'Посудомойка',
        type: 'checkbox',
        required: true
      }
    },
    {
      fieldsetClass: 'wide',
      featureClass: 'features',
      labelText: 'Удобства: Wi-Fi, кухня, парковка, стиралка, лифт, кондиционер',
      for: 'features',
      feature: {
        id: 'feature-parking',
        classLabel: 'parking',
        classCheckbox: 'parking',
        name: 'parking',
        text: 'Парковка',
        type: 'checkbox',
        required: true
      }
    },
    {
      fieldsetClass: 'wide',
      featureClass: 'features',
      labelText: 'Удобства: Wi-Fi, кухня, парковка, стиралка, лифт, кондиционер',
      for: 'features',
      feature: {
        id: 'feature-washer',
        classLabel: 'washer',
        classCheckbox: 'washer',
        name: 'washer',
        text: 'Стиральная машина',
        type: 'checkbox',
        required: true
      }
    },
    {
      fieldsetClass: 'wide',
      featureClass: 'features',
      labelText: 'Удобства: Wi-Fi, кухня, парковка, стиралка, лифт, кондиционер',
      for: 'features',
      feature: {
        id: 'feature-elevator',
        classLabel: 'elevator',
        classCheckbox: 'elevator',
        name: 'elevator',
        text: 'Лифт',
        type: 'checkbox',
        required: true
      }
    },
    {
      fieldsetClass: 'wide',
      featureClass: 'features',
      labelText: 'Удобства: Wi-Fi, кухня, парковка, стиралка, лифт, кондиционер',
      for: 'features',
      feature: {
        id: 'feature-conditioner',
        classLabel: 'conditioner',
        classCheckbox: 'conditioner',
        name: 'conditioner',
        text: 'Кондиционер',
        type: 'checkbox',
        required: true
      }
    },
    {
      fieldsetClass: 'wide',
      featureClass: 'features',
      labelText: 'Удобства: Wi-Fi, кухня, парковка, стиралка, лифт, кондиционер',
      for: 'features',
      textareaText: 'Описание объекта (не обязательно)',
      textarea: {
        id: 'description',
        name: 'description',
        placeholder: 'Здесь расскажите о том, какое ваше жилье замечательное и вообще'
      }
    }
  ];

  onChange = (name, value, value2) => {
    if (name === 'address') {
      this.setState({ value });
    } else {
      this.setState({ [name]: value });
    }
  };

  addAdvert = (dataValues) => {
    Object.keys(dataValues).forEach((item) => {
      if (item.includes('feature')) {
        debugger;
        dataValues.features = dataValues.features || [];
        const items = item.split('-');
        dataValues.features.push(items[1]);
        delete dataValues.item;
      }
    });
    createRequest(createAdvert, null, { dataValues }).then(({ status }) => {
      if (status === 'OK') {
        alert('Вы успешно опубликовали объявление!');
      }
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.addAdvert(this.state);
  };

  renderFields() {
    const fields = this.ADVERT_FIELDS;
    return fields.map(it => Object.keys(it).map((key) => {
        if (key === 'avatar') {
          return (
            <fieldset key={it.id} className="ad-form-header">
              <legend className="ad-form-header__title">Ваша фотография (для карты)</legend>
              <CreateAvatar data={it} key={it.id} />
            </fieldset>
          );
        }
        if (key === 'address') {
          return (
            <fieldset
              key={it.id}
              className={classNames('ad-form__element', { class: it.fieldsetClass })}
            >
              <label className="ad-form__label" htmlFor={it.for} id={it.for} key={it.id}>
                {' '}
                {it.labelText}
                <LocationSearchInput data={it} key={it.id} onChange={this.onChange} />
              </label>
            </fieldset>
          );
        }
        if (key === 'input') {
          return (
            <fieldset
              key={it.id}
              className={classNames('ad-form__element', { class: it.fieldsetClass })}
            >
              <label className="ad-form__label" htmlFor={it.for} id={it.for} key={it.id}>
                {' '}
                {it.labelText}
                <Input data={it} key={it.id} onChange={this.onChange} />
              </label>
            </fieldset>
          );
        }
        if (key === 'select') {
          return (
            <fieldset
              key={it.id}
              className={classNames(
                'ad-form__element',
                { class: it.fieldsetClass },
                { class: it.featureClass }
              )}
            >
              <label className="ad-form__label" htmlFor={it.for} id={it.for} key={it.id}>
                {' '}
                {it.labelText}
                <Select data={it} key={it.id} onChange={this.onChange} />
              </label>
            </fieldset>
          );
        }
        if (key === 'feature') {
          return <Feature data={it} key={it.id} onChange={this.onChange} />;
        }
        if (key === 'textarea') {
          return (
            <fieldset
              key={it.for}
              className={classNames('ad-form__element', { class: it.fieldsetClass })}
            >
              <label className="ad-form__label" htmlFor={it.for} id={it.for}>
                {it.textareaText}
                <CreateTextarea data={it} onChange={this.onChange} />
              </label>
            </fieldset>
          );
        }
      }));
  }

  render() {
    return (
      <section className="notice">
        <h2 className="notice__title">Ваше объявление</h2>

        <form className="ad-form" onSubmit={this.onSubmit}>
          {this.renderFields()}

          <fieldset className="ad-form__element ad-form__element--wide" key="photos">
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

          <fieldset className="ad-form__element ad-form__element--submit" key="buttons">
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
}

export default MyAdvert;
