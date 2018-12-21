import React, { PureComponent, createRef } from 'react';
import classNames from 'classnames/class-names';

class CreateAvatar extends PureComponent {
  fieldEl = createRef();

  state = {
    src: './src/img/avatars/default.png'
  };

  avatar = [];

  componentDidUpdate(prevProps) {
    if (this.state.src !== prevProps.data.img.src) {
      console.log('change avatar');
    }
  }

  onInputChange = () => {
    this.setState({ src: this.fieldEl.current.value });
    console.log(this.props);
    this.props.onChange(this.props.data.avatar.id, this.fieldEl.current.value);
  };

  downloadAvatar(data) {
    this.avatar = [];
    this.avatar.push(
      <div className="ad-form-header__upload" key={data.data.avatar.id}>
        <div className="ad-form-header__preview">
          <img src={this.state.src} alt="Аватар пользователя" width="40" height="44" />
        </div>
        <div className={data.data.fieldsetClass}>
          <label className={data.data.labelClass} htmlFor="avatar">
            <input
              type="text"
              id={data.data.avatar.id}
              name={data.data.avatar.name}
              className={data.data.avatar.class}
              ref={this.fieldEl}
              autoComplete='off'
              onChange={this.onInputChange}
            />
            Вставьте ссылку на изображение
          </label>
        </div>
        <p className="ad-form-header__info">
          Заполните все обязательные поля, назначьте цену, загрузите фотографии. Придумайте
          интересное описание. Оно сделает объявление более живым и привлекательным. Получившееся
          объявление должно давать гостям полное представление о вашем жилье.
        </p>
      </div>
    );
  }

  render() {
    const { data } = this.props;
    this.downloadAvatar({ data });
    return <div>{this.avatar}</div>;
  }
}

export default CreateAvatar;

// https://im0-tub-ru.yandex.net/i?id=0ee58d179efe157ee28965b5798a3194&n=13&exp=1
