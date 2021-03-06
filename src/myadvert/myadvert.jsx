import React, { PureComponent } from 'react';
import Input from './input';
import Select from './select';
import Feature from './feature';
import CreateAvatar from './avatar';
import CreateTextarea from './textarea';
import LocationSearchInput from './locationSearch';
import classNames from '../classnames/class-names';
import createRequest from '../core/create-request';
import { createAdvert } from '../core/api-config';

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
        'Заполните все обязательные поля, назначьте цену, загрузите аватар. Придумайте интересное описание. Оно сделает объявление более живым и привлекательным. Получившееся объявление должно давать гостям полное представление о вашем жилье.',
      avatar: {
        id: 'avatar',
        name: 'avatar',
        type: 'file',
        required: true,
        class: 'ad-form-header__input'
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
        required: true,
        value: null
      }
    },
    {
      fieldsetClass: 'wide',
      labelText: 'Выберите адрес из выпадающего списка',
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
      fieldsetClass: 'long',
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

  onChange = (name, value) => {
    if (name === 'address') {
      this.setState({ value });
    } else {
      this.setState({ [name]: value });
    }
  };

  onResetButtonClick = () => {
    const form = document.querySelector('form');
    form.reset();
  };

  addAdvert = (dataValues) => {
    const values = dataValues;
    Object.keys(values).forEach((item) => {
      if (item.includes('feature')) {
        values.features = values.features || [];
        const items = item.split('-');
        dataValues.features.push(items[1]);
      }
    });
    const success = document.querySelector('.success');
    const { history } = this.props;
    createRequest(createAdvert, null, { dataValues }).then(({ status }) => {
      if (status === 'OK') {
        success.classList.remove('hidden');
        setTimeout(() => {
          history.goBack();
        }, 2000);
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
              <CreateAvatar data={it} key={it.id} onChange={this.onChange} />
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

          <fieldset className="ad-form__element ad-form__element--submit" key="buttons">
            <button className="ad-form__submit" type="submit">
              Опубликовать
            </button>
            <span className="ad-form__word">или</span>
            <button className="ad-form__reset" type="button" onClick={this.onResetButtonClick}>
              очистить
            </button>
          </fieldset>
        </form>

        <div className="success hidden">
          <p className="success__message">Ваше объявление успешно размещено!</p>
        </div>
      </section>
    );
  }
}

export default MyAdvert;
