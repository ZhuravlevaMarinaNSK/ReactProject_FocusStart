import React, { PureComponent, createRef } from 'react';
import classNames from 'classnames/class-names';
import LoadFile from 'myadvert/loadfile';

class CreateAvatar extends PureComponent {
  fieldEl = createRef();

  avatar = [];

  onAvatarChange = () => {
    console.log(this.props.data);
    const input = document.querySelector(`.${this.props.data.avatar.class}`);
    const prew = document.querySelector('.ad-form-header__preview img');
    return <LoadFile input={input} prew={prew} />;

    // console.log(this.props, this.props.data.avatar.id);
    // this.props.onChange(this.props.data.avatar.id, this.fieldEl.current.value);
  };

  downloadAvatar(data) {
    this.avatar.push(
      <div className="ad-form-header__upload" key={data.data.avatar.id}>
        <div className="ad-form-header__preview">
          <img src={data.data.img.src} alt="Аватар пользователя" width="40" height="44" />
        </div>
        <div className={data.data.fieldsetClass}>
          <label className={data.data.labelClass} htmlFor="avatar">
            <input
              type="file"
              id={data.data.avatar.id}
              name={data.data.avatar.name}
              className={data.data.avatar.class}
              ref={this.fieldEl}
              onChange={this.onAvatarChange}
            />
            Загрузите или&nbsp;перетащите сюда фото
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
