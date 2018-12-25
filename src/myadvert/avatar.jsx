import React, { PureComponent, createRef } from 'react';
import propTypes from 'prop-types';

class CreateAvatar extends PureComponent {
  fieldEl = createRef();

  state = {
    src: './src/img/avatars/default.png'
  };

  avatar = [];

  componentDidUpdate(prevProps) {
    const { src } = this.state;
    if (src !== prevProps.data.img.src) {
      console.log('avatar changed');
    }
  }

  onInputChange = () => {
    const { data, onChange } = this.props;
    this.setState({ src: this.fieldEl.current.value });
    onChange(data.avatar.id, this.fieldEl.current.value);
  };

  downloadAvatar(data) {
    this.avatar = [];
    const { src } = this.state;
    const fileInput = data.data;
    this.avatar.push(
      <div className="ad-form-header__upload" key={fileInput.avatar.id}>
        <div className="ad-form-header__preview">
          <img src={src} alt="Аватар пользователя" width="40" height="44" />
        </div>
        <div className={fileInput.fieldsetClass}>
          <label className={fileInput.labelClass} htmlFor="avatar">
            <input
              type="text"
              id={fileInput.avatar.id}
              name={fileInput.avatar.name}
              className={fileInput.avatar.class}
              ref={this.fieldEl}
              autoComplete="off"
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

CreateAvatar.propTypes = {
  data: propTypes.shape({
    avatar: propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      class: propTypes.string.isRequired
    })
  }).isRequired,
  onChange: propTypes.func
};

CreateAvatar.defaultProps = {
  onChange: propTypes.func
};

export default CreateAvatar;

// https://im0-tub-ru.yandex.net/i?id=0ee58d179efe157ee28965b5798a3194&n=13&exp=1
